-- Comcof Shop: core commerce schema (migration 0001).
-- Currency: UGX stored as whole shillings in BIGINT (no floating point).
-- Security: RLS enabled on every table; deny by default. The anonymous role
-- may read only active catalogue data. All writes go through service-role
-- server code or authenticated policies added alongside the features that
-- need them.

create extension if not exists "pgcrypto";

-- ── Staff and roles ─────────────────────────────────────────────────────
create table staff_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role text not null check (role in (
    'super_admin','commerce_admin','product_manager','inventory_manager',
    'fulfilment_officer','support_officer','marketing_manager','finance_viewer'
  )),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- ── Customers ───────────────────────────────────────────────────────────
create table customer_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  marketing_consent boolean not null default false,
  marketing_consent_at timestamptz,
  notification_preferences jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table addresses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  label text,
  recipient_name text not null,
  phone text not null,
  country text not null default 'Uganda',
  city text not null,
  area text,
  address_line text not null,
  delivery_instructions text,
  is_default boolean not null default false,
  created_at timestamptz not null default now()
);
create index addresses_user_idx on addresses(user_id);

-- ── Catalogue ───────────────────────────────────────────────────────────
create table brands (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  is_partner boolean not null default false,
  created_at timestamptz not null default now()
);

create table categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  sort_order int not null default 0
);

create table products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  brand_id uuid references brands(id),
  short_description text not null default '',
  full_description text,
  origin_country text,
  region text,
  producer text,
  variety text,
  altitude text,
  processing_method text,
  roast_profile text,
  flavour_notes text[] not null default '{}',
  brewing_methods text[] not null default '{}',
  status text not null default 'draft' check (status in ('draft','active','archived')),
  gift_suitable boolean not null default false,
  subscription_eligible boolean not null default false,
  image_urls text[] not null default '{}',
  seo_title text,
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index products_status_idx on products(status);

create table product_categories (
  product_id uuid not null references products(id) on delete cascade,
  category_id uuid not null references categories(id) on delete cascade,
  primary key (product_id, category_id)
);

create table product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  sku text not null unique,
  barcode text,
  name text not null,
  package_size text not null,
  grind text,
  price_amount bigint not null check (price_amount >= 0),
  compare_at_amount bigint check (compare_at_amount >= 0),
  subscription_amount bigint check (subscription_amount >= 0),
  cost_amount bigint check (cost_amount >= 0),
  currency text not null default 'UGX',
  weight_grams int,
  available_quantity int not null default 0,
  reserved_quantity int not null default 0,
  low_stock_threshold int not null default 5,
  is_available boolean not null default true,
  image_url text,
  created_at timestamptz not null default now()
);
create index variants_product_idx on product_variants(product_id);

create table inventory_movements (
  id uuid primary key default gen_random_uuid(),
  variant_id uuid not null references product_variants(id),
  delta int not null,
  reason text not null check (reason in (
    'received','sold','reserved','released','adjustment','damaged','returned'
  )),
  reference text,
  note text,
  staff_user_id uuid references auth.users(id),
  created_at timestamptz not null default now()
);
create index inv_moves_variant_idx on inventory_movements(variant_id, created_at);

-- ── Orders ──────────────────────────────────────────────────────────────
create sequence order_number_seq start 1000;

create table orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique
    default ('CM-' || to_char(now(),'YYMM') || '-' || nextval('order_number_seq')),
  user_id uuid references auth.users(id),
  guest_email text,
  guest_phone text,
  status text not null default 'received' check (status in (
    'received','payment_pending','payment_confirmed','processing','packed',
    'ready_for_collection','dispatched','out_for_delivery','delivered',
    'cancelled','returned','refunded'
  )),
  currency text not null default 'UGX',
  subtotal_amount bigint not null default 0,
  delivery_amount bigint not null default 0,
  discount_amount bigint not null default 0,
  total_amount bigint not null default 0,
  promotion_code text,
  delivery_method text,
  delivery_zone_id uuid,
  gift_message text,
  customer_note text,
  internal_note text,
  placed_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint order_contact check (user_id is not null or guest_email is not null)
);
create index orders_user_idx on orders(user_id, placed_at desc);
create index orders_status_idx on orders(status);

create table order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  variant_id uuid references product_variants(id),
  product_name text not null,
  variant_name text not null,
  sku text,
  unit_amount bigint not null,
  quantity int not null check (quantity > 0),
  line_amount bigint not null
);
create index order_items_order_idx on order_items(order_id);

create table order_addresses (
  order_id uuid primary key references orders(id) on delete cascade,
  recipient_name text not null,
  phone text not null,
  country text not null default 'Uganda',
  city text not null,
  area text,
  address_line text not null,
  delivery_instructions text
);

create table order_status_history (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  status text not null,
  note text,
  customer_visible boolean not null default true,
  staff_user_id uuid references auth.users(id),
  created_at timestamptz not null default now()
);
create index order_history_order_idx on order_status_history(order_id, created_at);

-- ── Payments ────────────────────────────────────────────────────────────
create table payments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id),
  provider text not null,
  provider_reference text,
  idempotency_key text unique,
  status text not null default 'pending' check (status in (
    'pending','authorised','paid','failed','cancelled','refunded',
    'partially_refunded','awaiting_manual_verification'
  )),
  amount bigint not null,
  currency text not null default 'UGX',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index payments_order_idx on payments(order_id);

create table payment_events (
  id uuid primary key default gen_random_uuid(),
  payment_id uuid not null references payments(id) on delete cascade,
  event_type text not null,
  provider_event_id text,
  payload jsonb,
  created_at timestamptz not null default now(),
  unique (payment_id, provider_event_id)
);

-- ── Delivery ────────────────────────────────────────────────────────────
create table delivery_zones (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  country text not null default 'Uganda',
  city text,
  areas text[] not null default '{}',
  fee_amount bigint not null default 0,
  free_over_amount bigint,
  estimate text,
  is_active boolean not null default true
);

-- ── Promotions ──────────────────────────────────────────────────────────
create table promotions (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  kind text not null check (kind in ('fixed','percent','free_delivery')),
  value bigint not null default 0,
  min_order_amount bigint,
  starts_at timestamptz,
  ends_at timestamptz,
  usage_limit int,
  usage_count int not null default 0,
  first_order_only boolean not null default false,
  is_active boolean not null default true
);

-- ── Subscriptions ───────────────────────────────────────────────────────
create table subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id),
  status text not null default 'active' check (status in ('active','paused','cancelled')),
  frequency text not null check (frequency in ('weekly','fortnightly','monthly','custom')),
  custom_interval_days int,
  next_delivery_on date,
  address_id uuid references addresses(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table subscription_items (
  id uuid primary key default gen_random_uuid(),
  subscription_id uuid not null references subscriptions(id) on delete cascade,
  variant_id uuid not null references product_variants(id),
  quantity int not null check (quantity > 0)
);

create table subscription_events (
  id uuid primary key default gen_random_uuid(),
  subscription_id uuid not null references subscriptions(id) on delete cascade,
  event_type text not null,
  detail jsonb,
  created_at timestamptz not null default now()
);

-- ── Reviews, support, corporate ─────────────────────────────────────────
create table reviews (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  user_id uuid not null references auth.users(id),
  order_id uuid references orders(id),
  rating int not null check (rating between 1 and 5),
  body text,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now(),
  unique (product_id, user_id)
);

create table corporate_enquiries (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  contact_name text not null,
  email text not null,
  phone text,
  location text,
  monthly_requirement text,
  frequency text,
  notes text,
  status text not null default 'new' check (status in ('new','in_review','quoted','won','closed')),
  created_at timestamptz not null default now()
);

create table support_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  email text,
  order_id uuid references orders(id),
  subject text not null,
  body text not null,
  status text not null default 'open' check (status in ('open','in_progress','resolved')),
  created_at timestamptz not null default now()
);

-- ── Loyalty (feature-flagged off at launch) ─────────────────────────────
create table loyalty_accounts (
  user_id uuid primary key references auth.users(id) on delete cascade,
  balance int not null default 0,
  updated_at timestamptz not null default now()
);

create table loyalty_transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id),
  delta int not null,
  reason text not null,
  reference text,
  created_at timestamptz not null default now()
);

-- ── Settings, flags, audit ──────────────────────────────────────────────
create table app_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

create table feature_flags (
  key text primary key,
  enabled boolean not null default false,
  note text,
  updated_at timestamptz not null default now()
);

create table audit_logs (
  id uuid primary key default gen_random_uuid(),
  staff_user_id uuid references auth.users(id),
  action text not null,
  entity text not null,
  entity_id text,
  detail jsonb,
  created_at timestamptz not null default now()
);
create index audit_entity_idx on audit_logs(entity, entity_id);

-- ── Row-Level Security: deny by default ─────────────────────────────────
do $$
declare t text;
begin
  for t in
    select tablename from pg_tables where schemaname = 'public'
  loop
    execute format('alter table %I enable row level security', t);
  end loop;
end $$;

-- Public (anon) may read active catalogue data only.
create policy "public read active products" on products
  for select using (status = 'active');
create policy "public read available variants" on product_variants
  for select using (
    is_available and exists (
      select 1 from products p where p.id = product_id and p.status = 'active'
    )
  );
create policy "public read brands" on brands for select using (true);
create policy "public read categories" on categories for select using (true);
create policy "public read product categories" on product_categories for select using (true);
create policy "public read active delivery zones" on delivery_zones
  for select using (is_active);
create policy "public read approved reviews" on reviews
  for select using (status = 'approved');

-- Customers manage their own data.
create policy "own profile" on customer_profiles
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own addresses" on addresses
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own orders" on orders
  for select using (auth.uid() = user_id);
create policy "own order items" on order_items
  for select using (exists (select 1 from orders o where o.id = order_id and o.user_id = auth.uid()));
create policy "own order address" on order_addresses
  for select using (exists (select 1 from orders o where o.id = order_id and o.user_id = auth.uid()));
create policy "own order history" on order_status_history
  for select using (
    customer_visible and exists (select 1 from orders o where o.id = order_id and o.user_id = auth.uid())
  );
create policy "own subscriptions" on subscriptions
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own subscription items" on subscription_items
  for all using (exists (select 1 from subscriptions s where s.id = subscription_id and s.user_id = auth.uid()))
  with check (exists (select 1 from subscriptions s where s.id = subscription_id and s.user_id = auth.uid()));
create policy "own loyalty" on loyalty_accounts
  for select using (auth.uid() = user_id);
create policy "write own reviews" on reviews
  for insert with check (auth.uid() = user_id);

-- Staff access: helper predicate via staff_profiles.
create or replace function is_staff() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from staff_profiles
    where user_id = auth.uid() and is_active
  );
$$;

create policy "staff read all orders" on orders for select using (is_staff());
create policy "staff read all order items" on order_items for select using (is_staff());
create policy "staff read all order addresses" on order_addresses for select using (is_staff());
create policy "staff read order history" on order_status_history for select using (is_staff());
create policy "staff read payments" on payments for select using (is_staff());
create policy "staff read corporate" on corporate_enquiries for select using (is_staff());
create policy "staff read support" on support_requests for select using (is_staff());
create policy "staff read own profile" on staff_profiles for select using (auth.uid() = user_id);

-- Mutations beyond the policies above (order placement, inventory,
-- payments, admin writes) are performed exclusively by server-side code
-- using the service-role key, wrapped in transactions that enforce the
-- business rules in application code and database functions added in the
-- next migration.
