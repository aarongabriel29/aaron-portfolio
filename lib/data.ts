// All site content lives here. Edit this file to update text, links and projects.

export const profile = {
  name: "Aaron Alonzo",
  fullName: "Aaron Gabriel Alonzo",
  role: "Senior Web Developer & Designer",
  focus: ["WordPress", "UI/UX", "Integrations"],
  location: "Quezon City, Philippines",
  email: "aarongabrielalonzo@gmail.com",
  phone: "+63 975 493 2610",
  phoneHref: "+639754932610",
  resume: "/Aaron-Alonzo-Resume.pdf",
  photo: "/aaron-alonzo.jpg",
  // Optional: paste full URLs here and they will appear in the hero and footer.
  linkedin: "",
  github: "",
  headline: "I design and build WordPress websites that turn visitors into leads.",
  intro:
    "Senior web developer and designer with 6 years turning design concepts into fast, responsive, conversion focused websites. I own builds end to end: Figma design, custom PHP themes and plugins, CRM and marketing automation integrations, launch, then ongoing performance and analytics.",
  about: [
    "Today I design and develop across a portfolio of 30 branded WordPress websites, with a focus on reusable component systems that keep visual identity consistent at scale and make new campaign pages faster to ship.",
    "Beyond the front end, I connect websites to the systems behind them. I own a lead capture pipeline that moves form submissions through a message queue into NetSuite, integrate Iterable for marketing automation, and implement GA4 and Google Tag Manager tracking so every enquiry can be measured.",
    "Before web, I built enterprise process automation as a Blue Prism developer. That background still shapes how I work: systems first, repeatable builds, careful QA and clean deployments.",
  ],
};

export const tools = ["WordPress", "Elementor", "Figma", "PHP", "JavaScript", "ACF", "WooCommerce", "Contact Form 7", "Iterable", "NetSuite", "Azure Service Bus", "GA4", "Google Tag Manager", "NitroPack", "Next.js"];

export const rotating = ["convert visitors", "load fast", "capture every lead", "scale across brands"];

export const stats = [
  { value: "6", suffix: "yrs", label: "Designing and building websites" },
  { value: "30", suffix: "", label: "Branded sites managed today" },
  { value: "90", suffix: "+", label: "Lighthouse scores on launch" },
  { value: "100", suffix: "%", label: "Form leads captured to CRM" },
];

export type Project = {
  slug: string;
  name: string;
  client: string;
  sector: string;
  image: string;
  url?: string;
  linkLabel: string;
  type: "Live website" | "Figma design" | "Delivered in house";
  tagline: string;
  role: string;
  services: string[];
  deliverables: string[];
  stack: string[];
  summary: string;
  overview: string;
  challenge: string;
  goals: string[];
  process: { phase: string; text: string }[];
  features: { title: string; text: string }[];
  impact: { value: string; label: string }[];
  outcome: string;
  highlights: string[];
  featured?: boolean;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "access-modular",
    name: "Access Modular",
    client: "Access Modular (amodular.com.au)",
    sector: "Modular buildings",
    image: "/projects/access-modular.webp",
    url: "https://amodular.com.au/",
    linkLabel: "Visit amodular.com.au",
    type: "Delivered in house",
    featured: true,
    accent: "#d7262e",
    tagline: "One website, two audiences, and a lead pipeline that never drops an enquiry.",
    role: "Lead designer and developer, end to end",
    services: ["Web design", "WordPress development", "CRM integration", "Marketing automation", "Analytics"],
    deliverables: [
      "Figma design system and page designs",
      "WordPress build with Elementor and custom PHP",
      "Product catalogue with downloadable spec sheets",
      "Quote form wired to NetSuite through Azure Service Bus",
      "Iterable contact sync for follow up journeys",
      "GTM and GA4 lead tracking",
      "Staging to production migration",
    ],
    stack: ["Figma", "WordPress", "Elementor", "PHP", "Contact Form 7", "Azure Service Bus", "NetSuite", "Iterable", "GTM", "GA4"],
    summary:
      "Designed and built the full Access Modular website, then connected every enquiry to NetSuite and Iterable so sales and marketing could act on leads the moment they arrived.",
    overview:
      "Access Modular supplies transportable, NCC compliant modular buildings across Australia: site offices, crib rooms and workforce accommodation for commercial sites, and granny flats, studios and home offices for homeowners. I owned the project from a blank Figma canvas to a live, integrated website, including the plumbing that turns a form submission into a sales opportunity.",
    challenge:
      "The business sells to two very different buyers. A mining site manager needs cyclone rated crib rooms delivered fast, while a homeowner wants a comfortable granny flat with high spec finishes. Both needed to find the right building quickly, understand pricing and specifications, and send an enquiry that landed directly with the sales team. A website that only sent notification emails would lose leads to bounces and inbox clutter, and give marketing nothing to measure.",
    goals: [
      "Let commercial and domestic visitors self select within seconds",
      "Present every configuration with pricing and a downloadable spec sheet",
      "Capture 100% of enquiries straight into NetSuite, without relying on email",
      "Give marketing contacts in Iterable for automated follow up",
      "Track leads in GA4 without sending personal information",
    ],
    process: [
      {
        phase: "Discover",
        text: "Mapped the two buyer journeys, the product range of seven 20ft and 40ft configurations, and the data the sales team needed on every lead: enquiry type, product, company and nearest depot.",
      },
      {
        phase: "Design",
        text: "Designed the site in Figma around a dual path hero, product configuration cards with pricing and spec sheets, an applications grid, and a five step order to install process that answers the question every buyer asks: how long until it is on site?",
      },
      {
        phase: "Build",
        text: "Developed the site in WordPress with Elementor and custom PHP in a staging environment, then migrated it from the subfolder build to the root domain, fixing spec sheet file paths so every download worked in production.",
      },
      {
        phase: "Integrate",
        text: "Connected the quote form to Azure Service Bus so every submission is queued and delivered to NetSuite as a lead record, synced contacts to Iterable for nurture journeys, and disabled Contact Form 7 mail after tracing bounces to a broken Reply-To tag.",
      },
      {
        phase: "Measure",
        text: "Pushed a generate_lead event to the dataLayer and configured Google Tag Manager and GA4 to report conversions, deliberately excluding personal information from event parameters in line with Google policy.",
      },
    ],
    features: [
      { title: "Dual path hero", text: "\"I need a building for my site\" and \"I want to add space at home\" route each buyer to the content that matters to them." },
      { title: "Configuration catalogue", text: "Seven models from the AMod A20B to the Z40KB, each with a from price, applications, amenities and a spec sheet download." },
      { title: "Smart quote form", text: "One form captures enquiry type, product, company and nearest depot across WA, NT, QLD, NSW, VIC and SA." },
      { title: "Queue backed lead delivery", text: "Azure Service Bus sits between the website and NetSuite so a slow or failed request never loses a lead." },
      { title: "Iterable journeys", text: "Enquiry contacts flow into Iterable so marketing can follow up by enquiry type, product and location." },
      { title: "Privacy safe analytics", text: "A generate_lead event feeds GA4 through GTM with no names, emails or phone numbers in the payload." },
    ],
    impact: [
      { value: "100%", label: "of quote requests delivered to NetSuite as lead records" },
      { value: "2", label: "buyer journeys served from one site, commercial and domestic" },
      { value: "7", label: "building configurations with pricing and spec sheets" },
      { value: "0", label: "personal details sent to GA4 in lead events" },
    ],
    outcome:
      "Access Modular launched with a website that speaks clearly to both of its markets and behaves like part of the sales system. Every quote request lands in NetSuite for the sales team, flows into Iterable for automated follow up, and is reported in GA4 for marketing. The site turned from a digital brochure into a measurable lead generation channel.",
    highlights: [
      "End to end ownership: design, build, launch and integrations",
      "Form to NetSuite pipeline through Azure Service Bus",
      "Iterable connection for automated follow up journeys",
      "Privacy safe GA4 lead tracking via GTM",
    ],
  },
  {
    slug: "steel-toe-digital",
    name: "Steel Toe Digital",
    client: "Steel Toe Digital",
    sector: "Marketing agency for tradesmen",
    image: "/projects/steel-toe-digital.webp",
    url: "https://steeltoedigital.com/",
    linkLabel: "Visit website",
    type: "Live website",
    accent: "#f08a1c",
    tagline: "A rebrand ready website that finally looks as approachable as the agency behind it.",
    role: "Web designer and WordPress developer",
    services: ["Web design", "WordPress development"],
    deliverables: ["Website audit and new information architecture", "Figma redesign of all key pages", "Responsive Elementor build", "Lead focused CTA strategy", "Staging handover and launch support"],
    stack: ["Figma", "WordPress", "Elementor"],
    summary:
      "A full redesign for a digital marketing agency serving tradesmen, moving from a dark, dated look to a clean, approachable and professional brand.",
    overview:
      "Steel Toe Digital helps tradespeople win more jobs online. Their own website needed to prove they could do the same: look credible to a busy business owner, explain the offer quickly, and make booking a call the obvious next step.",
    challenge:
      "The previous site was overly dark and felt dated. It did not reflect the approachable, professional brand the team wanted, and its messaging was buried in heavy sections that made it hard for a tradesperson on a phone to understand what the agency actually does.",
    goals: [
      "Replace the dark look with a lighter, brand consistent identity",
      "Make services and value clear within the first scroll",
      "Turn more visitors into enquiries with well placed CTAs",
      "Deliver a site that works just as well on a phone on site",
    ],
    process: [
      { phase: "Audit", text: "Reviewed the existing site and messaging with the client to pinpoint where the dark design and dense layout were working against the brand." },
      { phase: "Design", text: "Redesigned the experience in Figma with a lighter palette, clearer type hierarchy and section by section content structure built around the tradesman's questions." },
      { phase: "Build", text: "Rebuilt the site in WordPress using Elementor with reusable sections so the team can keep adding content without breaking the design." },
      { phase: "Optimise", text: "Placed calls to action at each decision point and tested layouts across desktop, tablet and mobile before handover." },
    ],
    features: [
      { title: "Lighter visual identity", text: "Clean backgrounds, bold accents and real imagery replace the heavy dark theme." },
      { title: "Clear service story", text: "Each service is explained in plain language with a direct path to get in touch." },
      { title: "Strategic CTAs", text: "Calls to action sit where a reader is most ready to act, not just at the bottom of the page." },
      { title: "Mobile first layouts", text: "Sections stack cleanly for tradespeople browsing between jobs." },
    ],
    impact: [
      { value: "Brand", label: "aligned design that matches how the agency wants to be seen" },
      { value: "Clear", label: "content structure that explains the offer in one scroll" },
      { value: "100%", label: "responsive across desktop, tablet and mobile" },
    ],
    outcome:
      "The result is a modern, brand consistent website that communicates the agency's message more effectively, builds credibility with tradespeople, and gives every visitor a clear path to start a conversation.",
    highlights: ["Lighter, brand aligned visual direction", "Clearer content hierarchy", "Lead focused CTA placement", "Fully responsive build"],
  },
  {
    slug: "inmind-psychological-services",
    name: "inMind Psychological Services",
    client: "inMind Psychological Services Ltd, led by Dr. Larissa",
    sector: "Mental health",
    image: "/projects/inmind-psychological-services.webp",
    url: "https://inmindpsy.com/",
    linkLabel: "Visit website",
    type: "Live website",
    accent: "#7cb342",
    tagline: "A calm, trauma informed website that makes the first step toward support feel safe.",
    role: "Web designer and WordPress developer",
    services: ["Web design", "WordPress development", "Accessibility"],
    deliverables: ["UX restructure of services and booking", "Figma redesign", "Elementor build", "Accessibility and responsive QA", "Booking and referral CTAs"],
    stack: ["Figma", "WordPress", "Elementor"],
    summary:
      "A calm, trust building website for a trauma informed psychology practice, designed so clients feel supported and safe from the very first interaction.",
    overview:
      "inMind provides trauma therapy, psychological assessment, forensic and medico legal reports, and organisational consulting. Its audiences range from individuals reaching out for help to legal professionals referring a client, so the website has to feel gentle and also be precise.",
    challenge:
      "The previous site lacked structure and warmth. Services were hard to find, practitioner information was scattered, and visitors who might already feel anxious had no clear, comfortable path to book. For a mental health practice, a confusing website is not just a conversion problem; it can stop someone from asking for help.",
    goals: [
      "Create a warm, safe first impression",
      "Organise services so each audience finds its path quickly",
      "Make booking a consultation or referring a client effortless",
      "Meet accessibility expectations on every device",
    ],
    process: [
      { phase: "Understand", text: "Worked with Dr. Larissa to understand her clients, referral partners and the tone the practice needed to convey." },
      { phase: "Structure", text: "Reorganised content around clear service pathways, practitioner information and two primary actions: book a consultation and refer for assessment." },
      { phase: "Design", text: "Designed a calm aesthetic in Figma with soft colours, generous spacing and gentle imagery that feels human rather than clinical." },
      { phase: "Build", text: "Rebuilt the site in WordPress using Elementor, testing contrast, readability and responsiveness so every visitor can navigate with ease." },
    ],
    features: [
      { title: "Two clear entry points", text: "\"Book a consultation\" for individuals and \"Refer for assessment\" for legal and organisational partners." },
      { title: "Service pathways", text: "Therapy, specialist assessments, forensic reports and consulting are each easy to find and understand." },
      { title: "Non pressuring CTAs", text: "Calls to action guide gently, which matters for people who are hesitant to reach out." },
      { title: "Accessible by design", text: "Readable type, strong contrast and responsive layouts across devices." },
    ],
    impact: [
      { value: "2", label: "primary journeys for clients and referrers, each one click from the hero" },
      { value: "4", label: "service areas organised into clear pathways" },
      { value: "100%", label: "responsive, with accessibility prioritised throughout" },
    ],
    outcome:
      "The result is a warm, professional and trust building website that reflects Dr. Larissa's mission to provide a safe space for clients seeking mental health support, while giving legal and organisational partners a fast route to refer.",
    highlights: ["Calm, welcoming visual language", "Clear service and booking structure", "Gentle, non pressuring CTAs", "Accessibility first build"],
  },
  {
    slug: "sportpump",
    name: "SportPump",
    client: "SportPump",
    sector: "Ecommerce",
    image: "/projects/sportpump.webp",
    url: "https://sportpump.com/",
    linkLabel: "Visit website",
    type: "Live website",
    accent: "#f7931e",
    tagline: "A ground up redesign built around one number: sales.",
    role: "Independent designer, developer and site maintainer",
    services: ["Web design", "WordPress development", "CRO", "Maintenance"],
    deliverables: ["Conversion flow and wireframes", "Figma redesign", "Full WordPress and Elementor rebuild", "Ongoing maintenance and optimisation", "Collaboration with marketing and SEO"],
    stack: ["Figma", "WordPress", "Elementor"],
    summary: "A ground up redesign focused on one goal: converting visitors into paying customers.",
    overview:
      "SportPump sells a product that needs to be seen and understood before people buy. The client's brief was simple and demanding: turn more visitors into paying customers.",
    challenge:
      "The existing site did not guide visitors toward purchase. Product benefits were not front and centre, visuals lacked impact, and calls to action were easy to miss, so interested visitors left without buying.",
    goals: [
      "Build a clear path from first visit to checkout",
      "Lead with strong product visuals and benefits",
      "Place calls to action where buying intent peaks",
      "Keep improving after launch with the marketing team",
    ],
    process: [
      { phase: "Plan", text: "Mapped the conversion flow from landing to purchase and identified where visitors were dropping off." },
      { phase: "Design", text: "Independently redesigned the layout in Figma with bold product imagery, benefit led sections and an intuitive structure." },
      { phase: "Build", text: "Rebuilt the site fully in WordPress using Elementor, with strategic CTAs at each step of the journey." },
      { phase: "Optimise", text: "Maintained the site for several months, working with the marketing and SEO team on ongoing improvements." },
    ],
    features: [
      { title: "Conversion first layout", text: "Every section moves the visitor one step closer to buying." },
      { title: "Bold product storytelling", text: "Strong visuals and clear benefits explain the product at a glance." },
      { title: "Strategic CTAs", text: "Buy and learn more actions sit where intent is highest." },
      { title: "Continuous optimisation", text: "Post launch iteration with marketing kept results improving." },
    ],
    impact: [
      { value: "Higher", label: "customer conversions after the relaunch" },
      { value: "More", label: "sales, driven by ongoing optimisation with marketing" },
      { value: "Ongoing", label: "maintenance and collaboration with marketing and SEO" },
    ],
    outcome:
      "After a few months of maintaining the site and collaborating with the marketing team, the redesigned website delivered excellent results, driving a significant increase in customer conversions and sales.",
    highlights: ["Conversion first layout", "Strong product visuals", "Ongoing optimisation with marketing", "Significant lift in sales"],
  },
  {
    slug: "rentpro-equipment",
    name: "RentPro Equipment",
    client: "RentPro Equipment",
    sector: "Equipment hire",
    image: "/projects/rentpro-equipment.webp",
    url: "https://www.rentproequipment.com.au/",
    linkLabel: "Visit website",
    type: "Delivered in house",
    accent: "#e2231a",
    tagline: "A fleet showcase engineered to turn browsing into rental enquiries, with the data to prove it.",
    role: "Designer, developer and analytics implementer, end to end",
    services: ["Web design", "WordPress development", "Analytics"],
    deliverables: ["Information architecture for the fleet", "Figma design", "WordPress and Elementor build", "Request a quote flow", "GTM and GA4 tracking setup"],
    stack: ["Figma", "WordPress", "Elementor", "GTM", "GA4"],
    summary:
      "A conversion focused platform built from the ground up to showcase a machinery fleet and drive rental enquiries, backed by full analytics tracking.",
    overview:
      "RentPro hires machinery to Australian businesses. The goal was a powerful online platform to showcase the fleet and drive rental enquiries, and I handled the entire lifecycle from first sketch to tracking configuration.",
    challenge:
      "Equipment hire buyers want answers fast: is the machine available, will it do the job, and how do I get a quote? A large fleet can easily overwhelm visitors, and without proper tracking the business would have no way of knowing which campaigns actually produced enquiries.",
    goals: [
      "Make a large fleet easy to browse by category",
      "Surface the specifications buyers need to decide",
      "Create a frictionless path to request a quote",
      "Give the business reliable data on visitors and conversions",
    ],
    process: [
      { phase: "Structure", text: "Organised the fleet into intuitive equipment categories with consistent specification layouts." },
      { phase: "Design", text: "Created a custom, user focused design in Figma with a clear conversion flow from category to quote." },
      { phase: "Build", text: "Developed the site in WordPress using Elementor, prioritising performance and a seamless UI flow." },
      { phase: "Measure", text: "Installed and configured comprehensive tracking so the client could monitor behaviour, track conversions and optimise campaigns." },
    ],
    features: [
      { title: "Category led browsing", text: "Visitors move from category to machine without getting lost in the fleet." },
      { title: "Specification views", text: "Key specs are presented consistently so machines are easy to compare." },
      { title: "Request a quote flow", text: "A clear, low friction path from interest to enquiry." },
      { title: "Conversion tracking", text: "GTM and GA4 configured to attribute enquiries to campaigns." },
    ],
    impact: [
      { value: "End to end", label: "lifecycle owned, from Figma to analytics" },
      { value: "Full", label: "visibility of visitor behaviour and conversions for marketing" },
      { value: "100%", label: "responsive build ready for paid campaigns" },
    ],
    outcome:
      "The result is a fast, responsive and professional website that works as a strong, data backed lead generation tool, giving the business the insight to put its marketing budget where it performs.",
    highlights: ["Built from the ground up", "Category and spec driven browsing", "Clear request a quote flow", "Full conversion tracking"],
  },
  {
    slug: "performance-physical-therapy",
    name: "Performance Physical Therapy",
    client: "Performance Physical Therapy & Fitness",
    sector: "Healthcare",
    image: "/projects/performance-physical-therapy.webp",
    url: "https://pptandfitness.com/",
    linkLabel: "Visit website",
    type: "Live website",
    accent: "#3b6ff5",
    tagline: "A modern patient experience that makes booking an appointment the easy part.",
    role: "In house web developer and designer",
    services: ["Web design", "WordPress development", "SEO content structure"],
    deliverables: ["Figma redesign", "WordPress and Elementor build", "Structured service pages", "Blog for patient education and SEO", "Monthly landing page campaigns"],
    stack: ["Figma", "WordPress", "Elementor"],
    summary: "A clean, modern revamp that supports the brand and streamlines the path to booking an appointment.",
    overview:
      "As the in house web developer and designer for Performance Physical Therapy & Fitness, I led the redesign of their website alongside monthly landing page campaigns, working closely with the marketing and content team.",
    challenge:
      "Patients needed to understand treatments quickly and book without friction, while marketing needed pages that could rank and campaigns that could launch every month. The previous site did not support either goal well.",
    goals: [
      "Modernise the brand online",
      "Structure services so patients find the right treatment",
      "Build an SEO foundation with educational content",
      "Shorten the path to booking an appointment",
    ],
    process: [
      { phase: "Design", text: "Led the full redesign in Figma with a clean, modern visual direction aligned to the brand." },
      { phase: "Build", text: "Rebuilt the site in WordPress using Elementor with structured service pages and clear CTAs." },
      { phase: "Content", text: "Added a blog section to support patient education and long term search visibility." },
      { phase: "Grow", text: "Built monthly landing page campaigns and maintained performance, accessibility and uptime." },
    ],
    features: [
      { title: "Structured service pages", text: "Each treatment explained clearly with a direct route to book." },
      { title: "Booking focused CTAs", text: "Calls to action throughout guide patients to schedule." },
      { title: "Patient education blog", text: "Content that answers common questions and supports SEO." },
      { title: "Campaign landing pages", text: "Monthly pages built to convert paid and organic traffic." },
    ],
    impact: [
      { value: "50%", label: "increase in lead conversions from monthly landing page campaigns" },
      { value: "99.9%", label: "uptime sustained across company websites" },
      { value: "3", label: "core company websites launched from the ground up" },
    ],
    outcome:
      "A professional, easy to navigate site that strengthens credibility and streamlines the path to booking appointments, supported by campaign pages that lifted lead conversions.",
    highlights: ["Structured service pages", "Blog for SEO and education", "Clear booking CTAs", "Responsive across devices"],
  },
  {
    slug: "all-ready-moving-and-storage",
    name: "All Ready Moving & Storage",
    client: "All Ready Moving and Storage",
    sector: "Moving services",
    image: "/projects/all-ready-moving.webp",
    url: "https://www.figma.com/design/RRtI2ITmSVxRugwYbqmeSP/All-ready-moving-and-storage?m=auto&fuid=871365157446868764",
    linkLabel: "View Figma file",
    type: "Figma design",
    accent: "#1f3a93",
    tagline: "A credibility first redesign that turns quote requests into booked moves.",
    role: "Web designer",
    services: ["Web design", "UX"],
    deliverables: ["UX review", "Homepage and service page designs", "Mobile layouts", "Quote journey design", "Developer ready Figma file"],
    stack: ["Figma"],
    summary:
      "A redesign for a moving and storage company, built to create a more credible, customer friendly experience that converts quote enquiries into booked moves.",
    overview:
      "Choosing a mover means trusting a stranger with everything you own. This redesign focuses on earning that trust quickly and making it easy to request a quote.",
    challenge:
      "The existing website did not present services clearly or build enough trust for customers comparing moving companies, and the path to a quote was harder than it needed to be on mobile.",
    goals: ["Build trust within the first screen", "Present services clearly", "Make the quote journey effortless on mobile", "Refresh the visual identity"],
    process: [
      { phase: "Review", text: "Audited the current site for trust gaps, unclear services and friction in the quote journey." },
      { phase: "Structure", text: "Simplified navigation and reorganised service content around customer questions." },
      { phase: "Design", text: "Created a cleaner, brand aligned identity with prominent trust cues and calls to action." },
      { phase: "Mobile", text: "Designed mobile layouts first to support smoother quote enquiries on the go." },
    ],
    features: [
      { title: "Trust cues up front", text: "Credentials, coverage and reassurance placed where hesitant visitors look first." },
      { title: "Simplified navigation", text: "Fewer, clearer choices so visitors reach the right service fast." },
      { title: "Prominent quote CTAs", text: "Request a quote is always one tap away." },
      { title: "Mobile first layouts", text: "Designed for people planning a move from their phone." },
    ],
    impact: [
      { value: "Clear", label: "service presentation for faster decisions" },
      { value: "Stronger", label: "trust signals across key pages" },
      { value: "1 tap", label: "access to request a quote on mobile" },
    ],
    outcome: "A design that helps convert visitors into booked moves through clarity, credibility and an easier quote journey.",
    highlights: ["Stronger trust cues", "Simplified navigation", "Prominent quote CTAs", "Mobile first layouts"],
  },
  {
    slug: "tristar-custom-pools",
    name: "Tristar Custom Pools",
    client: "Tristar Custom Pools",
    sector: "Home improvement",
    image: "/projects/tristar-custom-pools.webp",
    url: "https://www.figma.com/design/VOXeSYgNl3L6yac06wjMP0/Tristar-Custom-Pools?node-id=2013-113&t=e9UvOFVwBPUDcWdK-0",
    linkLabel: "View Figma file",
    type: "Figma design",
    accent: "#1b4dff",
    tagline: "A premium redesign that lets the craftsmanship sell the consultation.",
    role: "Web designer",
    services: ["Web design", "UX"],
    deliverables: ["Brand led visual direction", "Homepage and project showcase designs", "Consultation journey", "Responsive layouts", "Developer ready Figma file"],
    stack: ["Figma"],
    summary: "A premium redesign that showcases craftsmanship and turns visitors into high value design build leads.",
    overview:
      "Custom pools are a considered, high value purchase. Tristar's website needed to feel as premium as its work and give serious buyers a confident path to a consultation.",
    challenge:
      "The previous design did not reflect the quality of Tristar's pool building work. Service messaging was unclear and the site did not do enough to move visitors toward booking a consultation.",
    goals: ["Reflect premium craftsmanship", "Showcase completed projects", "Clarify design build services", "Drive consultation requests"],
    process: [
      { phase: "Direction", text: "Defined a refined, brand led visual direction worthy of premium projects." },
      { phase: "Showcase", text: "Designed layouts that put real projects and craftsmanship front and centre." },
      { phase: "Messaging", text: "Clarified service messaging so buyers understand the design build process." },
      { phase: "Convert", text: "Placed consultation CTAs strategically and refined mobile layouts." },
    ],
    features: [
      { title: "Premium visual direction", text: "Clean visuals and stronger branding that match the price point." },
      { title: "Project led storytelling", text: "Completed pools do the persuading." },
      { title: "Consultation CTAs", text: "Clear invitations to start a design conversation." },
      { title: "Responsive layouts", text: "Polished on every screen size." },
    ],
    impact: [
      { value: "Premium", label: "brand presentation aligned to high value projects" },
      { value: "Clear", label: "design build service messaging" },
      { value: "Direct", label: "path to book a consultation" },
    ],
    outcome: "A trustworthy, polished online presence designed to convert visitors into high value design build leads.",
    highlights: ["Premium visual direction", "Project led storytelling", "Consultation focused CTAs", "Responsive layouts"],
  },
];

export const experience = [
  {
    company: "Big Market Solutions",
    role: "Senior Web Developer & Designer",
    period: "May 2024 to Present",
    location: "Remote, US",
    points: [
      "Design and develop across a portfolio of 30 branded WordPress websites, taking each from Figma concept to launch with pixel accurate UI, 90+ Lighthouse scores and full cross browser responsiveness.",
      "Develop custom PHP plugins and bespoke Elementor widgets, packaged as reusable components deployed across the portfolio.",
      "Own the lead capture pipeline, integrating website forms with enterprise CRM through a message queue so 100% of submissions are captured, saving 10+ hours of manual entry weekly.",
      "Integrate WordPress with Iterable for marketing automation, populating custom form widgets with live depot data from the Iterable API behind a transient cache, and standing up new brand spaces.",
      "Run GA4, Google Tag Manager and technical SEO portfolio wide, cutting crawl errors by 40% and lifting organic traffic 25% on average.",
    ],
  },
  {
    company: "Performance Physical Therapy & Fitness",
    role: "In House Web Developer & Designer",
    period: "Jul 2020 to Apr 2024",
    location: "Remote, US",
    points: [
      "Architected and launched 3 core company websites from the ground up using custom WordPress and front end development.",
      "Built monthly landing page campaigns that lifted lead conversions by 50% through technical precision and UI/UX refinement.",
      "Maintained all company sites for performance, accessibility and search visibility, sustaining 99.9% uptime.",
      "Partnered with marketing and content specialists to translate complex requirements into intuitive user journeys.",
    ],
  },
  {
    company: "DXC Technology",
    role: "Technology Consultant, Blue Prism RPA Developer",
    period: "Earlier career",
    location: "Enterprise automation",
    points: [
      "Led development of a new Blue Prism automation for P&G, streamlining Return Sales Order creation and reducing manual effort by 30%.",
      "Enhanced pallet label printing automation and maintained Blue Prism processes for the Nestlé account to keep operations stable 24/7.",
    ],
  },
];

export const skills = [
  {
    title: "Design",
    items: ["Figma", "UI/UX design", "Responsive, mobile first layouts", "Design systems", "Wireframing & prototyping", "Multi brand consistency"],
  },
  {
    title: "CMS & Development",
    items: ["WordPress (custom themes, hooks, filters)", "PHP", "Custom plugin development", "Elementor custom widgets", "ACF", "WooCommerce", "Contact Form 7", "WP REST API", "MySQL"],
  },
  {
    title: "Front End",
    items: ["HTML5", "CSS3 / SCSS", "JavaScript", "Next.js & React (current focus)", "Cross browser QA", "Figma to code"],
  },
  {
    title: "Integrations & Performance",
    items: ["Iterable (API, brand spaces, automation)", "NetSuite lead pipelines", "Azure Service Bus", "REST APIs & caching", "Core Web Vitals", "CDN & NitroPack", "Python scripting"],
  },
  {
    title: "Analytics & Workflow",
    items: ["Google Analytics 4", "Google Tag Manager", "Technical SEO", "Git & GitHub", "Staging & deployment", "Jira, ClickUp, Trello"],
  },
];

export const process = [
  { step: "01", title: "Design", text: "Wireframes and high fidelity Figma designs built around the visitor's journey and the business goal." },
  { step: "02", title: "Build", text: "Custom WordPress themes, plugins and Elementor widgets, engineered for speed and easy editing." },
  { step: "03", title: "Integrate", text: "Forms connected to CRM and marketing automation, so every lead lands where the team works." },
  { step: "04", title: "Measure", text: "GA4 and GTM tracking, Core Web Vitals and SEO health, then continuous improvement." },
];

export const education = {
  degree: "BS Computer Engineering",
  school: "Polytechnic University of the Philippines",
  certifications: ["Blue Prism Certified Developer", "SAP Certified Associate, Design Thinking"],
};
