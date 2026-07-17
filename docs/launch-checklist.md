# Comcof Shop: Launch Checklist

## Live today (LAUNCH mode)

- [x] comcofgroup.com/shop live, brand-native, mobile responsive
- [x] /shop/coffee, /shop/gifts, /shop/subscriptions, /shop/corporate,
      /shop/cart, /account, /admin with honest states
- [x] Existing marketing site fully intact (all routes verified 200)
- [x] Corporate enquiry form with validation (opens structured email)
- [x] Cart with persistence; email ordering channel (real, human-fulfilled)
- [x] No invented products, prices, reviews, or claims anywhere
- [x] Product page template with JSON-LD, ready for real products

## To activate COMMERCE mode (owner actions)

1. Create a Supabase project (Daniel logs in; then `supabase login` on
   this machine lets Claude provision and migrate it), or share the
   project URL + keys.
2. Apply `supabase/migrations/0001_commerce_core.sql`.
3. Set env vars on the `comcof-shop` Vercel project from `shop-app/.env.example`.
4. Enter real products, variants, prices, and stock (admin build follows
   provisioning; interim entry via Supabase dashboard is acceptable).
5. Define delivery zones and fees (start with Kampala zones).
6. Choose the payment provider (recommended for Uganda: Flutterwave or
   Pesapal for MTN MoMo + Airtel Money + cards) and open a merchant
   account; integration proceeds once sandbox credentials exist.
7. Decide launch flags: checkout on, subscriptions/reviews/loyalty per
   commercial approval.

## Before public marketing push

- [ ] Real product photography for each release
- [ ] Delivery pricing tested against actual courier costs
- [ ] Order-to-delivery dry run completed end to end
- [ ] Support contact (WhatsApp number) configured via env
- [ ] Privacy policy reviewed for account/order data (update /privacy)
