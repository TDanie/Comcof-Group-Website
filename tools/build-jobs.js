// Comcof Group careers builder.
// To add a role: add an object to `roles` below, run `node tools/build-jobs.js`,
// then add its card to careers.html and its URL to sitemap.xml.
// To close a vacancy: remove its card from careers.html and its sitemap entry,
// and delete careers/<slug>.html (keep the role object here for reuse).
const fs = require('fs');
const path = require('path');
const outDir = path.join(__dirname, '..', 'careers');
fs.mkdirSync(outDir, { recursive: true });

const roles = [
  {
    slug: 'operations-manager',
    title: 'Operations Manager',
    titleHtml: 'Operations<br><em>Manager</em>',
    desc: 'Comcof Group is hiring an Operations Manager in Kampala, Uganda to keep daily commercial and operational activities moving professionally, on schedule, and with clear accountability.',
    chips: ['Kampala, Uganda', 'Full-Time', 'Office & Field-Based', '3 to 5 Years', 'Reports to Group Leadership'],
    mission: "Ensure Comcof's day-to-day commercial and operational activities move forward professionally, on schedule, and with clear accountability, even when the founder is not physically present.",
    responsibilities: [
      'Coordinate daily commercial and operational activities.',
      'Support coffee sourcing, procurement, logistics, warehouse, and contract-execution activities.',
      'Maintain operational workplans, trackers, records, and reports.',
      'Follow up with suppliers, buyers, warehouses, transporters, banks, and service providers.',
      'Coordinate documentation required for transactions, financing, logistics, and management reporting.',
      'Track contract milestones, deliveries, inventory movement, and operational deadlines.',
      'Prepare weekly operational reports for leadership.',
      'Identify operational risks, delays, and bottlenecks early.',
      'Coordinate meetings and follow up agreed actions.',
      'Support the development of standard operating procedures.',
      'Maintain confidentiality and professional discipline.',
      'Ensure commitments made to external stakeholders are tracked and followed through.'
    ],
    minimum: [
      "Bachelor's degree or equivalent professional experience.",
      'At least 3 years of relevant experience in operations, supply chain, procurement, logistics, commodities, agriculture, trade, project coordination, or commercial administration.',
      'Strong written and spoken English.',
      'Strong Excel, Word, reporting, and record-management skills.',
      'Ability to handle multiple priorities.',
      'High integrity and attention to detail.',
      'Ability to work independently and report clearly.'
    ],
    preferredHead: 'Preferred backgrounds',
    preferred: [
      'Business Administration, Supply Chain Management, Procurement and Logistics, Commerce, Agricultural Economics, Project Management, Industrial Engineering, or Agribusiness.',
      'Experience in coffee, commodities, agricultural trade, warehousing, logistics, exports, banking coordination, or contract execution is advantageous.'
    ],
    attributes: [
      'Highly organised and dependable.',
      'Calm under pressure and proactive.',
      'Commercially aware, with strong follow-through.',
      'Professional with different stakeholder groups.',
      'Comfortable visiting warehouses, suppliers, banks, and operational sites.'
    ],
    success: [
      'Operations continue moving without constant founder intervention.',
      'Deadlines and commitments are tracked.',
      'Reports and records are accurate.',
      'Risks are identified early.',
      'Stakeholders receive timely follow-up.',
      'Contracts and transactions are executed more smoothly.',
      'Internal systems become increasingly organised.'
    ],
    gain: 'You will sit at the centre of a coffee business being built from first principles: direct exposure to sourcing, logistics, contracts, financing coordination, and leadership decision-making, with responsibility that grows as the company does.'
  },
  {
    slug: 'finance-trade-manager',
    title: 'Finance & Trade Manager',
    titleHtml: 'Finance &amp; Trade<br><em>Manager</em>',
    desc: 'Comcof Group is hiring a Finance & Trade Manager in Kampala, Uganda to protect the company\'s financial position and support profitable, well-structured coffee transactions.',
    chips: ['Kampala, Uganda', 'Full-Time', 'Primarily Office-Based', '3 to 6 Years', 'Reports to Group Leadership'],
    mission: "Protect Comcof's financial position and support profitable, well-structured coffee transactions through disciplined financial management, trade-finance coordination, commercial analysis, and strong controls.",
    responsibilities: [
      'Prepare financial forecasts, budgets, cash-flow plans, and management reports.',
      'Analyse the profitability and cash requirements of coffee transactions.',
      'Support product pricing and transaction modelling.',
      'Coordinate with banks and financial institutions on trade-finance facilities.',
      'Prepare and follow up financial information required for financing applications.',
      'Monitor funding utilisation, transaction costs, margins, repayments, and financial obligations.',
      'Support the review of contracts from a financial and commercial perspective.',
      'Track receivables, payables, supplier commitments, buyer payments, and operational costs.',
      'Support foreign-exchange and price-risk monitoring.',
      'Establish internal controls, approval processes, and financial documentation standards.',
      'Coordinate with accountants, auditors, tax advisers, banks, and other service providers.',
      'Prepare periodic financial and commercial performance reports.',
      'Maintain accurate and confidential financial records.',
      'Help management identify and manage financial risks.'
    ],
    minimum: [
      "Bachelor's degree in Accounting, Finance, Commerce, Economics, Business Administration, or a related discipline.",
      'At least 3 years of relevant finance, accounting, banking, trade-finance, treasury, commodities, audit, or commercial-analysis experience.',
      'Strong Excel and financial-modelling skills.',
      'Strong understanding of cash flow, margins, costs, receivables, payables, and financial reporting.',
      'High integrity, confidentiality, and attention to detail.',
      'Strong written and verbal communication.'
    ],
    preferredHead: 'Preferred qualifications',
    preferred: [
      'CPA, ACCA, CFA coursework, or another relevant professional qualification is advantageous.',
      'Experience in coffee, commodities, exports, trade finance, banking, foreign exchange, or structured transactions is highly desirable.'
    ],
    attributes: [
      'Analytical and commercially minded.',
      'Calm, trustworthy, and detail-oriented.',
      'Disciplined, with sound professional judgement.',
      'Able to challenge assumptions respectfully.',
      'Able to communicate financial information clearly.'
    ],
    success: [
      'Management has reliable visibility into cash, costs, margins, and obligations.',
      'Transactions are assessed before commitments are made.',
      'Financing documentation is prepared and followed up professionally.',
      'Financial risks are identified early.',
      'Controls and approvals improve.',
      'Reports are timely and accurate.',
      'Comcof protects capital while supporting growth.'
    ],
    gain: 'You will build the financial architecture of a trading company from the ground up: trade-finance relationships, transaction models, controls, and reporting, with direct access to leadership and to the commercial logic of every deal.'
  },
  {
    slug: 'quality-production-manager',
    title: 'Quality & Production Manager',
    titleHtml: 'Quality &amp; Production<br><em>Manager</em>',
    desc: 'Comcof Group is hiring a Quality & Production Manager in Kampala, Uganda to establish disciplined quality, traceability, production, and process-control systems across its coffee operations.',
    chips: ['Kampala & Operational Locations', 'Full-Time', 'Office, Warehouse, Production & Field', '3 to 5 Years', 'Reports to Group Leadership'],
    mission: "Protect Comcof's reputation by establishing disciplined quality, traceability, production, and process-control systems across its coffee operations.",
    responsibilities: [
      'Develop and manage quality-control and quality-assurance procedures.',
      'Coordinate coffee sampling, inspection, grading, testing, and release processes.',
      'Monitor supplier and incoming-product quality.',
      'Maintain quality records, traceability information, and product documentation.',
      'Coordinate warehouse and production quality requirements.',
      'Support production planning and process-control activities.',
      'Monitor losses, defects, inconsistencies, contamination risks, and process deviations.',
      'Coordinate with laboratories, warehouses, processors, suppliers, exporters, and buyers.',
      'Support compliance with customer specifications, export requirements, food-safety standards, and applicable regulations.',
      'Prepare quality and production reports.',
      'Investigate complaints and quality incidents.',
      'Recommend corrective and preventive actions.',
      'Train operational teams on quality procedures.',
      'Support continuous improvement across sourcing, storage, processing, and delivery.'
    ],
    minimum: [
      "Bachelor's degree or equivalent professional experience in Food Science, Agriculture, Agricultural Engineering, Industrial Chemistry, Quality Management, Production Management, Agribusiness, or a related field.",
      'At least 3 years of relevant quality, production, processing, food, agricultural, warehouse, laboratory, or manufacturing experience.',
      'Strong documentation and reporting ability.',
      'Strong attention to detail.',
      'Ability to work across office, warehouse, production, and field environments.',
      'High integrity and professional discipline.'
    ],
    preferredHead: 'Preferred experience',
    preferred: [
      'Coffee quality, coffee processing, cupping, grading, export standards, warehouse management, food safety, traceability, or commodity quality systems.',
      'Relevant training from coffee-sector or quality-assurance institutions is advantageous.'
    ],
    attributes: [
      'Methodical, detail-oriented, and disciplined.',
      'Objective and patient, with strong powers of observation.',
      'Comfortable enforcing standards consistently.',
      'Able to investigate causes rather than assigning blame.'
    ],
    success: [
      'Quality requirements are documented and followed.',
      'Product issues are identified before delivery.',
      'Traceability and quality records remain reliable.',
      'Production and warehouse processes become more consistent.',
      'Customer specifications are understood and met.',
      'Quality complaints reduce.',
      'Corrective actions are documented and completed.'
    ],
    gain: 'You will define what quality means at Comcof: the standards, records, and habits that every future lot, warehouse, and production line will be measured against, with the authority to enforce them.'
  },
  {
    slug: 'grants-partnerships-impact-manager',
    title: 'Grants, Partnerships & Impact Manager',
    titleHtml: 'Grants, Partnerships<br><em>&amp; Impact Manager</em>',
    desc: 'Comcof Group is hiring a Grants, Partnerships & Impact Manager in Kampala, Uganda to identify, secure, and manage strategic grant-funded and partnership programmes aligned with the company\'s commercial strategy.',
    chips: ['Kampala, Uganda', 'Full-Time', 'Office, Field & Travel', '3 to 6 Years', 'Partnerships, Sustainability & Strategic Programmes', 'Reports to Group Leadership'],
    mission: 'The Grants, Partnerships & Impact Manager will identify, develop, secure, and manage strategic funding and partnership opportunities that support Comcof Group\'s growth across coffee sourcing, farmer development, quality improvement, sustainability, climate resilience, traceability, digitalisation, market access, processing, and value addition. The role will ensure that grant-funded initiatives are commercially relevant, professionally implemented, compliant with donor requirements, and aligned with Comcof\'s long-term strategy.',
    aboutRole: [
      'Coffee and agriculture attract significant interest from development agencies, foundations, financial institutions, governments, NGOs, research organisations, sustainability programmes, and international partners.',
      'Comcof Group is seeking a commercially aware and highly capable Grants, Partnerships & Impact Manager to identify suitable opportunities, build strong institutional relationships, prepare competitive proposals, coordinate funded programmes, and ensure that every project produces measurable and sustainable value.',
      '<strong>This is not a purely administrative grant-writing role.</strong> The successful candidate must be able to understand Comcof\'s commercial strategy, translate business and sector needs into credible project concepts, coordinate multiple stakeholders, manage implementation, maintain strong records, and deliver high-quality reporting.',
      'Comcof is a commercial coffee company, not an NGO. Grants and partnerships are tools for building strategic capabilities and measurable impact: stronger value chains, productivity, quality, income resilience, market access, institutional capacity, climate resilience, finance, technology, and inclusion. Funded activities carry the same financial controls, accountability, and execution standards as commercial transactions.'
    ],
    scopeIntro: 'The role may support programmes relating to the areas below. This describes the kinds of programmes the role may pursue; it does not describe programmes Comcof currently holds.',
    scope: [
      'Farmer organisation and supplier development.',
      'Coffee productivity and quality improvement.',
      'Climate-smart agriculture, sustainability, and responsible sourcing.',
      'Traceability and digital systems.',
      'Women and youth participation, and inclusion.',
      'Access to finance, market access, and export development.',
      'Coffee processing and value addition.',
      'Cooperative and aggregator capacity-building.',
      'Post-harvest handling and certification readiness.',
      'Research, innovation, and technology adoption.',
      'Food security and livelihood improvement.',
      'Regional and international partnerships.',
      'Infrastructure and equipment support.',
      'Environmental and social programmes.'
    ],
    respGroups: [
      { h: 'Opportunity identification', items: [
        'Continuously research and identify suitable grant, partnership, challenge-fund, technical-assistance, concessional-finance, and development-programme opportunities.',
        'Maintain an organised pipeline of current and upcoming opportunities.',
        'Monitor opportunities from foundations, development agencies, financial institutions, embassies, NGOs, governments, research bodies, climate funds, trade programmes, and agricultural organisations.',
        'Assess opportunities according to eligibility, strategic fit, funding size, implementation requirements, risk, and potential long-term value.',
        'Provide management with clear recommendations on which opportunities Comcof should pursue.'
      ]},
      { h: 'Proposal development', items: [
        'Lead the preparation of grant applications, expressions of interest, concept notes, proposals, budgets, logical frameworks, workplans, and supporting documentation.',
        'Translate Comcof\'s commercial and operational priorities into credible, fundable programme concepts.',
        'Coordinate technical, financial, operational, quality, and management input into proposals.',
        'Ensure submissions are accurate, persuasive, compliant, complete, and delivered before deadlines.',
        'Develop reusable proposal materials, institutional profiles, project descriptions, evidence libraries, and application templates.',
        'Maintain accurate records of all submissions and outcomes.'
      ]},
      { h: 'Partnership development', items: [
        'Build and maintain professional relationships with development partners, NGOs, government institutions, research organisations, foundations, financial institutions, sustainability programmes, and private-sector partners.',
        'Represent Comcof professionally in meetings, workshops, consortium discussions, and programme-development engagements.',
        'Identify suitable consortium and implementation partners.',
        'Support the preparation and review of partnership agreements, memoranda of understanding, scopes of work, and collaboration frameworks.',
        'Coordinate partner due diligence and background information where required.'
      ]},
      { h: 'Programme design', items: [
        'Design practical projects that respond to real commercial, farmer, market, quality, sustainability, and operational needs.',
        'Develop programme theories of change, results frameworks, implementation plans, budgets, risk registers, and performance indicators.',
        'Ensure that proposed projects have clear beneficiaries, realistic outcomes, measurable indicators, and sustainable post-funding plans.',
        'Avoid creating programmes that are disconnected from Comcof\'s long-term commercial strategy.',
        'Ensure projects strengthen lasting systems and capabilities rather than temporary activity.'
      ]},
      { h: 'Programme implementation', items: [
        'Coordinate the implementation of approved grant-funded and partnership programmes.',
        'Prepare detailed workplans, implementation schedules, budgets, procurement plans, and stakeholder-engagement plans.',
        'Coordinate internal teams, consultants, suppliers, field teams, farmers, partners, and service providers.',
        'Monitor activities, deadlines, deliverables, expenditure, outputs, and risks.',
        'Escalate delays, compliance risks, budget concerns, and implementation challenges early.',
        'Ensure project activities are delivered according to approved agreements and professional standards.'
      ]},
      { h: 'Monitoring, evaluation, and learning', items: [
        'Develop and maintain monitoring, evaluation, accountability, and learning systems.',
        'Track programme outputs, outcomes, indicators, beneficiary data, milestones, and lessons.',
        'Coordinate baseline assessments, surveys, field monitoring, evaluations, and impact documentation.',
        'Produce clear evidence of programme performance, capture lessons, and recommend improvements.',
        'Help Comcof communicate credible impact without exaggeration or misleading claims.'
      ]},
      { h: 'Financial and compliance coordination', items: [
        'Work closely with finance and operations to prepare budgets, expenditure forecasts, financial reports, and supporting documentation.',
        'Ensure spending and procurement follow funding agreements and internal controls.',
        'Maintain complete and audit-ready programme records.',
        'Monitor reporting deadlines, contractual obligations, deliverables, and compliance requirements.',
        'Coordinate donor reviews, audits, verification exercises, and programme assessments.',
        'Ensure that no expenditure, commitment, or public claim is made outside approved programme requirements.'
      ]},
      { h: 'Reporting and communication', items: [
        'Prepare high-quality narrative reports, progress reports, financial-reporting inputs, presentations, case studies, and management updates.',
        'Maintain a central repository of proposals, agreements, correspondence, reports, budgets, evidence, and partner records.',
        'Coordinate approved programme communications with Comcof\'s communications function.',
        'Ensure public communication respects donor requirements, beneficiary dignity, commercial confidentiality, and factual accuracy.',
        'Prepare regular pipeline and programme-performance reports for leadership.'
      ]}
    ],
    minimum: [
      'Bachelor\'s degree in Development Studies, Agricultural Economics, Agribusiness, Economics, International Development, Project Management, Business Administration, Public Policy, Social Sciences, Finance, Agriculture, Environmental Studies, or a related field.',
      'At least 3 years of relevant professional experience in grant acquisition, proposal development, programme management, partnerships, development finance, agriculture, sustainability, or donor-funded projects.',
      'Demonstrated experience preparing successful or highly competitive funding proposals.',
      'Strong understanding of project design, budgeting, implementation, reporting, monitoring, and compliance.',
      'Excellent written and spoken English.',
      'Strong analytical, research, presentation, and stakeholder-management skills.',
      'High attention to detail and ability to manage multiple deadlines.',
      'Strong integrity, professionalism, and confidentiality.',
      'Ability to work independently while coordinating multiple internal and external contributors.',
      'Strong competence in Microsoft Word, Excel, PowerPoint, online research, and digital collaboration tools.'
    ],
    preferredHead: 'Preferred qualifications and experience',
    preferred: [
      'Master\'s degree or relevant professional certification.',
      'Experience in coffee, agriculture, commodities, farmer organisations, sustainability, climate, trade, rural development, market systems, or value-chain programmes.',
      'Experience working with international development agencies, NGOs, foundations, governments, financial institutions, research organisations, or private-sector development programmes.',
      'Experience developing logical frameworks, theories of change, results frameworks, risk registers, monitoring plans, and detailed budgets.',
      'Experience managing grants from application through implementation and close-out.',
      'Familiarity with donor compliance, procurement procedures, safeguarding, gender and inclusion requirements, environmental and social standards, and audit preparation.',
      'Experience developing consortium proposals or multi-partner programmes.',
      'A strong professional network within agriculture, coffee, development, finance, sustainability, or trade is advantageous.',
      'Knowledge of Uganda\'s coffee and agricultural sectors is highly desirable.',
      'A postgraduate qualification or established network is not mandatory where a candidate otherwise demonstrates strong capability.'
    ],
    attributes: [
      'Exceptional proposal-writing ability, with persuasive but accurate writing.',
      'Strong commercial awareness and strategic thinking.',
      'Research discipline, and the ability to understand technical information.',
      'Financial and budgeting confidence.',
      'Excellent stakeholder management, presentation, and negotiation skills.',
      'Strong project-management ability, attention to detail, and follow-through.',
      'Professional confidence, integrity, and discretion.',
      'Ability to work under deadline pressure and to coordinate specialists.',
      'Ability to turn ideas into structured programmes.',
      'Respect for farmers, partners, beneficiaries, and communities.'
    ],
    kpisIntro: 'Performance will be assessed on quality and strategic alignment, never on volume of submissions alone. Indicators include:',
    kpis: [
      'Number and quality of strategically relevant opportunities identified.',
      'Quality and timeliness of funding submissions, and proposal success rate.',
      'Total funding or partnership value secured.',
      'Quality of institutional relationships developed.',
      'Compliance with reporting and implementation deadlines.',
      'Programme delivery against approved workplans and budgets.',
      'Accuracy and completeness of programme records, and audit and compliance performance.',
      'Achievement of programme indicators.',
      'Sustainability and commercial relevance of funded initiatives.',
      'Quality of leadership reporting.',
      'Percentage of opportunities rejected early due to poor strategic fit.'
    ],
    success: [
      'Comcof maintains a strong and organised pipeline of relevant funding and partnership opportunities.',
      'High-quality applications are submitted on time, and Comcof pursues opportunities that fit its strategy rather than applying indiscriminately.',
      'Partner relationships are professionally managed.',
      'Approved programmes are implemented according to scope, budget, deadlines, and agreements.',
      'Reporting is accurate, clear, and timely, and programme files remain complete and audit-ready.',
      'Management has visibility into opportunities, obligations, risks, and performance.',
      'Grant-funded programmes strengthen Comcof\'s long-term commercial and operational capabilities.',
      'Programme results are measurable, credible, and sustainable.',
      'The company avoids compliance failures, unsupported claims, and poorly aligned projects.'
    ],
    gain: 'You will build Comcof\'s grants, partnerships, and impact function from the ground up, with direct engagement with leadership, exposure to coffee, agriculture, international development, sustainability, finance, and trade, and responsibility for significant strategic programmes in a high-learning environment.',
    careerPath: ['Grants, Partnerships & Impact Manager', 'Head of Partnerships, Sustainability & Impact', 'Director of Strategic Partnerships & Development'],
    careerPathNote: 'This is a potential progression as the function grows, not a guaranteed promotion.',
    evidence: [
      'Your CV and a cover letter.',
      'Your LinkedIn profile, where available.',
      'A brief summary of grants, proposals, partnerships, or programmes you have worked on, your specific role in each, funding amounts or programme scale where disclosure is permitted, and the outcomes achieved.',
      'One relevant writing sample, concept note, proposal extract, programme report, or equivalent document, with confidential information removed.'
    ],
    evidenceNote: 'Please do not submit confidential documents belonging to previous employers or clients.',
    assessmentNote: 'Shortlisted candidates may be asked to complete a time-limited practical assessment involving opportunity evaluation, concept development, proposal writing, budgeting, partnership strategy, or programme planning. The assessment will not involve preparing a complete live funding application for Comcof without compensation.',
    extraQuestions: [
      { id: 'gq1', label: 'Describe the strongest funding proposal, grant application, or partnership programme you have contributed to. What was your role and what was the result? *', f: 'Strongest proposal and result', required: true },
      { id: 'gq2', label: 'How do you determine whether a funding opportunity is strategically suitable for an organisation? *', f: 'Strategic suitability approach', required: true },
      { id: 'gq3', label: 'Describe a funded project you helped implement. What challenges arose and how were they managed? *', f: 'Implementation example', required: true },
      { id: 'gq4', label: 'What systems would you use to track grant opportunities, reporting deadlines, budgets, deliverables, and compliance obligations? *', f: 'Tracking systems', required: true },
      { id: 'gq5', label: 'Describe your experience working in coffee, agriculture, sustainability, climate, trade, farmer development, or another relevant sector. *', f: 'Sector experience', required: true }
    ],
    extraQuestionsNote: 'Attach one non-confidential writing sample or proposal extract to your application email, alongside your CV and cover letter.'
  }
];

const list = items => items.map(i => '        <li>' + i + '</li>').join('\n');

const logo = h => `<svg class="logo-svg"${h ? ' style="height:32px"' : ''} viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comcof">
          <ellipse cx="200" cy="75" rx="186" ry="62" stroke="currentColor" stroke-width="11"/>
          <text x="52" y="96" font-family="Poppins, DM Sans, sans-serif" font-weight="800" font-size="58" fill="currentColor" textLength="190" lengthAdjust="spacingAndGlyphs">COMC</text>
          <circle cx="276" cy="75" r="23" fill="currentColor"/>
          <path d="M266 60 C 284 69, 268 81, 286 90" stroke="#0C0B0A" stroke-width="6" fill="none" stroke-linecap="round"/>
          <text x="312" y="96" font-family="Poppins, DM Sans, sans-serif" font-weight="800" font-size="58" fill="currentColor" textLength="34" lengthAdjust="spacingAndGlyphs">F</text>
        </svg>`;

const jobLd = r => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: r.title,
  description: r.desc,
  datePosted: '2026-07-16',
  employmentType: 'FULL_TIME',
  hiringOrganization: { '@type': 'Organization', name: 'Comcof Group', sameAs: 'https://comcofgroup.com', logo: 'https://comcofgroup.com/favicon.png' },
  jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Kampala', addressCountry: 'UG' } }
});

const page = r => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${r.title} | Careers | Comcof Group</title>
<meta name="description" content="${r.desc.replace(/"/g, '&quot;')}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.png" type="image/png" sizes="512x512">
<link rel="apple-touch-icon" href="/favicon.png">
<link rel="canonical" href="https://comcofgroup.com/careers/${r.slug}">
<meta property="og:title" content="${r.title.replace(/&/g, '&amp;')} | Careers | Comcof Group">
<meta property="og:description" content="${r.desc.replace(/"/g, '&quot;')}">
<meta property="og:image" content="https://comcofgroup.com/og.png">
<meta property="og:url" content="https://comcofgroup.com/careers/${r.slug}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Comcof Group">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">${jobLd(r)}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Poppins:wght@800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/style.css">
</head>
<body>

<nav id="nav">
  <a href="/" class="nav-logo" aria-label="Comcof Group home">
    ${logo(false).replace(/\n          /g, '\n      ').replace(/\n        <\/svg>/, '\n    </svg>')}
  </a>
  <div class="nav-links">
    <a href="/about">About</a>
    <a href="/group">The Group</a>
    <a href="/coffee">Our Coffee</a>
    <a href="/global">Global</a>
    <a href="/responsibility">Responsibility</a>
    <a href="/partners">Partners</a>
    <a href="/insights">Insights</a>
    <a href="/careers" class="active">Careers</a>
  </div>
  <a href="/contact" class="nav-cta">Contact</a>
  <button class="nav-mobile-btn" onclick="document.querySelector('.mobile-nav').classList.toggle('open')" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="mobile-nav">
  <button class="mobile-close" onclick="document.querySelector('.mobile-nav').classList.remove('open')">✕</button>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/group">The Group</a>
  <a href="/coffee">Our Coffee</a>
  <a href="/global">Global</a>
  <a href="/responsibility">Responsibility</a>
  <a href="/partners">Partners</a>
  <a href="/insights">Insights</a>
  <a href="/careers">Careers</a>
  <a href="/contact">Contact</a>
</div>

<div class="page-hero">
  <div class="page-hero-inner">
    <div class="section-eyebrow"><a href="/careers" style="color:inherit;text-decoration:none">Careers</a> / Open Role</div>
    <h1 class="section-h2">${r.titleHtml}</h1>
    <div class="role-chips">
${r.chips.map(c => '      <span class="role-chip">' + c + '</span>').join('\n')}
    </div>
    <div class="job-hero-cta">
      <a href="#apply" class="btn-primary">Apply for This Role</a>
      <a href="/careers#roles" class="btn-ghost">All Open Roles</a>
    </div>
  </div>
</div>

<div class="legal-body">
  <h2>Role mission</h2>
  <p>${r.mission}</p>
${r.aboutRole ? '\n  <h2>About the role</h2>\n' + r.aboutRole.map(p => '  <p>' + p + '</p>').join('\n') + '\n' : ''}
  <h2>About Comcof Group</h2>
  <p>Comcof Group is a coffee company focused on building long-term capabilities across sourcing, trade, market access, finance coordination, quality, processing, and value addition. We are early-stage by design and disciplined by conviction: we believe respected coffee companies are built through reliable systems, consistent quality, and professional execution. Learn more <a href="/about">about the company</a>.</p>
${r.scope ? '\n  <h2>Strategic scope</h2>\n  <p>' + r.scopeIntro + '</p>\n  <ul>\n' + list(r.scope) + '\n  </ul>\n' : ''}
  <h2>Key responsibilities</h2>
${r.respGroups ? r.respGroups.map(g => '  <h3>' + g.h + '</h3>\n  <ul>\n' + list(g.items) + '\n  </ul>').join('\n') : '  <ul>\n' + list(r.responsibilities) + '\n  </ul>'}

  <h2>Minimum qualifications</h2>
  <ul>
${list(r.minimum)}
  </ul>

  <h2>${r.preferredHead.charAt(0).toUpperCase() + r.preferredHead.slice(1)}</h2>
  <ul>
${list(r.preferred)}
  </ul>

  <h2>Skills and attributes</h2>
  <ul>
${list(r.attributes)}
  </ul>

  <h2>What success looks like</h2>
  <ul>
${list(r.success)}
  </ul>
${r.kpis ? '\n  <h2>How performance will be assessed</h2>\n  <p>' + r.kpisIntro + '</p>\n  <ul>\n' + list(r.kpis) + '\n  </ul>\n' : ''}
  <h2>What you will gain</h2>
  <p>${r.gain}</p>
${r.careerPath ? '\n  <h2>Career path</h2>\n  <p>' + r.careerPath.join(', growing into ') + '. ' + r.careerPathNote + '</p>\n' : ''}${r.evidence ? '\n  <h2>What to include with your application</h2>\n  <ul>\n' + list(r.evidence) + '\n  </ul>\n  <p>' + r.evidenceNote + '</p>\n' : ''}${r.assessmentNote ? '\n  <h2>Practical assessment</h2>\n  <p>' + r.assessmentNote + '</p>\n' : ''}
  <h2>How to apply</h2>
  <p>Complete the form below. When you submit, your email application opens with your answers already prepared and addressed to us; attach your CV (PDF preferred) and any supporting documents to that email before sending. We review every application and respond to shortlisted candidates.</p>
  <p>Comcof Group is committed to fair, merit-based recruitment. Qualified applicants are assessed according to the requirements of the role, demonstrated competence, professional conduct, experience, integrity, and potential.</p>
</div>

<section id="apply" style="background:var(--espresso)">
  <div class="apply-wrap reveal">
    <div class="section-eyebrow">Application</div>
    <h2 class="section-h2" style="font-size:1.7rem;margin-bottom:2rem">Apply: ${r.title.replace(/&/g, '&amp;')}</h2>
    <form class="form-grid apply-form" data-role="${r.title.replace(/"/g, '')}" novalidate>
      <div class="form-group">
        <label class="form-label" for="af-name">Full Name *</label>
        <input id="af-name" data-f="Full name" required type="text" class="form-input" placeholder="Your full name" autocomplete="name">
      </div>
      <div class="form-group">
        <label class="form-label" for="af-email">Email Address *</label>
        <input id="af-email" data-f="Email" required type="email" class="form-input" placeholder="your@email.com" autocomplete="email">
      </div>
      <div class="form-group">
        <label class="form-label" for="af-phone">Phone Number *</label>
        <input id="af-phone" data-f="Phone" required type="tel" class="form-input" placeholder="+256 ..." autocomplete="tel">
      </div>
      <div class="form-group">
        <label class="form-label" for="af-loc">Current Location *</label>
        <input id="af-loc" data-f="Current location" required type="text" class="form-input" placeholder="City, Country">
      </div>
      <div class="form-group">
        <label class="form-label" for="af-li">LinkedIn Profile (Optional)</label>
        <input id="af-li" data-f="LinkedIn" type="url" class="form-input" placeholder="https://linkedin.com/in/...">
      </div>
      <div class="form-group">
        <label class="form-label" for="af-exp">Years of Relevant Experience *</label>
        <input id="af-exp" data-f="Years of relevant experience" required type="text" class="form-input" placeholder="e.g. 4">
      </div>
      <div class="form-group">
        <label class="form-label" for="af-emp">Current or Most Recent Employer *</label>
        <input id="af-emp" data-f="Current or most recent employer" required type="text" class="form-input" placeholder="Organisation name">
      </div>
      <div class="form-group">
        <label class="form-label" for="af-qual">Highest Qualification *</label>
        <input id="af-qual" data-f="Highest qualification" required type="text" class="form-input" placeholder="e.g. BSc Agribusiness">
      </div>
      <div class="form-group full">
        <label class="form-label" for="af-prof">Professional Qualifications (Where Relevant)</label>
        <input id="af-prof" data-f="Professional qualifications" type="text" class="form-input" placeholder="e.g. CPA, Q Grader, PMP">
      </div>
      <div class="form-group full">
        <label class="form-label" for="af-why">Why Do You Want to Join Comcof Group? *</label>
        <textarea id="af-why" data-f="Why Comcof" required class="form-textarea" placeholder="A short, honest answer beats a long generic one."></textarea>
      </div>
      <div class="form-group full">
        <label class="form-label" for="af-own">Describe a Situation Where You Took Ownership of a Difficult Operational, Financial, or Quality Problem *</label>
        <textarea id="af-own" data-f="Ownership example" required class="form-textarea" placeholder="What was the problem, what did you do, and what happened?"></textarea>
      </div>
${(r.extraQuestions || []).map(q => `      <div class="form-group full">
        <label class="form-label" for="${q.id}">${q.label}</label>
        <textarea id="${q.id}" data-f="${q.f}"${q.required ? ' required' : ''} class="form-textarea" placeholder="Keep it concise: 3 to 6 sentences."></textarea>
      </div>
`).join('')}${r.extraQuestionsNote ? '      <p class="form-check" style="margin-top:-.4rem">' + r.extraQuestionsNote + '</p>\n' : ''}      <div class="form-group">
        <label class="form-label" for="af-start">Notice Period / Earliest Start Date *</label>
        <input id="af-start" data-f="Notice period or earliest start" required type="text" class="form-input" placeholder="e.g. one month">
      </div>
      <div class="form-group">
        <label class="form-label" for="af-comp">Expected Monthly Compensation (UGX)</label>
        <input id="af-comp" data-f="Expected monthly compensation UGX" type="text" class="form-input" placeholder="Optional">
      </div>
      <label class="form-check">
        <input type="checkbox" id="af-consent" required>
        <span>I confirm the information provided is accurate, and I consent to Comcof Group processing this application for recruitment purposes. *</span>
      </label>
      <p class="form-check" style="margin-top:-.4rem">After you press submit, your email application opens with your answers prepared. Please attach your CV (PDF preferred) and any supporting documents to that email before sending it.</p>
      <div class="form-msg" role="alert"></div>
      <div class="form-submit">
        <button type="submit" class="btn-primary" style="cursor:pointer">Submit Application</button>
      </div>
    </form>
  </div>
</section>

<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="/" class="nav-logo" aria-label="Comcof Group home">
        ${logo(true)}
      </a>
      <p>A coffee enterprise being built from Ugandan origins. Vertically integrated by design, made for the world's markets, and built for the long term.</p>
    </div>
    <div class="footer-col">
      <h5>The Group</h5>
      <ul>
        <li><a href="/about">About Comcof</a></li>
        <li><a href="/group">Business Divisions</a></li>
        <li><a href="/#value-chain">Value Chain</a></li>
        <li><a href="/about#roadmap">Growth Roadmap</a></li>
        <li><a href="/responsibility">Responsibility</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Trade</h5>
      <ul>
        <li><a href="/coffee">Green Coffee</a></li>
        <li><a href="/coffee">Roasted Coffee</a></li>
        <li><a href="/partners">Private Label</a></li>
        <li><a href="/partners">Bulk Supply</a></li>
        <li><a href="/global">Global Network</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Connect</h5>
      <ul>
        <li><a href="/insights">Insights</a></li>
        <li><a href="/partners">Partners</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="https://www.linkedin.com/company/comcofgroup" target="_blank" rel="noopener">LinkedIn</a></li>
        <li><a href="https://x.com/comcofgroup" target="_blank" rel="noopener">X (Twitter)</a></li>
        <li><a href="/insights#newsletter">Newsletter</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-bottom-text">© 2026 Comcof Group. All rights reserved. Kampala, Uganda.</span>
    <div class="footer-bottom-links"><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Use</a></div>
  </div>
</footer>

<script src="/assets/site.js"></script>
</body>
</html>
`;

roles.forEach(r => {
  fs.writeFileSync(path.join(outDir, r.slug + '.html'), page(r));
  console.log('wrote', r.slug + '.html');
});
