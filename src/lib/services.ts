/* Services, prices and funnel copy for /portfolio/.
   Prices are Hazik's own starting prices, shown as "from", never as fixed market rates. */

export const whatsappNumber = "919995803434";
export function whatsappLink(text: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}
export const formEndpoint = "https://formspree.io/f/meeyjedo";

/* Options for "What do you need?". `key` is what buttons and ?need= use to preselect. */
export const needs = [
  { key: "launch", value: "Website Launch", label: "A new website (Website Launch)" },
  { key: "grow", value: "Website Conversion Upgrade", label: "More enquiries from my website (Conversion Upgrade)" },
  { key: "app", value: "Business app or internal tool", label: "A business app or internal tool" },
  { key: "product", value: "Custom web or mobile app", label: "A custom web or mobile app" },
  { key: "audit", value: "Website Growth Audit (₹999)", label: "Website Growth Audit (₹999)" },
  { key: "unsure", value: "Not sure yet", label: "Not sure yet" },
] as const;
export type NeedKey = (typeof needs)[number]["key"];

export const needForGroup: Record<string, NeedKey> = {
  websites: "launch",
  business: "app",
  products: "product",
};

export const groups = [
  { key: "all", label: "All" },
  { key: "websites", label: "Websites" },
  { key: "business", label: "Business apps" },
  { key: "products", label: "Apps & AI" },
] as const;

export const groupLabel: Record<string, string> = {
  websites: "Website",
  business: "Business app",
  products: "App & AI product",
};

export const paths = [
  { q: "“I need a proper website.”", offer: "Website Launch", price: "from ₹15,000", href: "#pkg-launch" },
  { q: "“My website doesn’t bring enquiries.”", offer: "Conversion Upgrade", price: "from ₹10,000", href: "#pkg-grow" },
  { q: "“We run on Excel, WhatsApp and notebooks.”", offer: "Business App", price: "from ₹30,000", href: "#pkg-scale" },
];

export type Package = {
  id: string;
  tier: string;
  name: string;
  forWhom: string;
  from: string;
  range: string;
  includes: string[];
  proof: { label: string; slug: string }[];
  cta: string;
  need: NeedKey;
  main?: boolean;
};

export const packages: Package[] = [
  {
    id: "pkg-launch",
    tier: "Start",
    name: "Website Launch",
    forWhom: "For businesses that need a professional website people can trust and act on.",
    from: "₹15,000",
    range: "Most small-business sites: ₹15,000–₹25,000",
    includes: [
      "Custom design, not a template",
      "Built for phones first",
      "WhatsApp and call buttons",
      "An enquiry form that emails you",
      "Basic SEO: titles, descriptions and your business details for Google",
      "Visitor analytics",
      "Launched on your domain",
    ],
    proof: [
      { label: "Dijoo Afghan Cap House", slug: "dijoo-afghan-cap-house" },
      { label: "Deepika Brown Makeovers", slug: "deepika-brown-makeovers" },
    ],
    cta: "Start a website",
    need: "launch",
    main: true,
  },
  {
    id: "pkg-grow",
    tier: "Grow",
    name: "Website Conversion Upgrade",
    forWhom: "For businesses whose website gets visits but not enough enquiries.",
    from: "₹10,000",
    range: "Typical range: ₹10,000–₹25,000",
    includes: [
      "UX and conversion review",
      "Clearer headlines and messaging",
      "Stronger, better-placed calls to action",
      "Mobile fixes",
      "Lead capture: forms, WhatsApp, call buttons",
      "Landing-page improvements",
    ],
    proof: [{ label: "the enquiry and payments backend for a coaching site", slug: "altitude-backend" }],
    cta: "Upgrade my website",
    need: "grow",
  },
  {
    id: "pkg-scale",
    tier: "Scale",
    name: "Business App or Internal Tool",
    forWhom: "For businesses running on Excel, WhatsApp threads, notebooks or software that doesn’t talk to each other.",
    from: "₹30,000",
    range: "Priced by scope after a first conversation",
    includes: [
      "Billing, stock, bookings, customer records or dashboards",
      "We map how you work today before anything is built",
      "A first version you can click through early",
      "Staff logins and roles",
      "Offline-first where the signal is weak",
      "Handover and training for your team",
    ],
    proof: [
      { label: "U Wear HANI", slug: "uwear-hani" },
      { label: "Farm Ledger", slug: "farm-ledger" },
      { label: "Barb-e-Crew", slug: "barb-e-crew" },
    ],
    cta: "Discuss a business app",
    need: "app",
  },
];

export const steps = [
  { title: "Understand", text: "Your business, your customers and what isn’t working today." },
  { title: "Plan", text: "A written scope, price and timeline, agreed before work starts." },
  { title: "Design", text: "Layouts for phone and desktop, including empty, error and loading states." },
  { title: "Build", text: "In working slices you can click through early, not one reveal at the end." },
  { title: "Test", text: "On real phones and browsers, with forms, payments and edge cases checked." },
  { title: "Launch", text: "On your domain, with analytics set up and a handover of how it all works." },
  { title: "Support", text: "Fixes and changes afterwards, with an optional monthly plan if you want one." },
];

export const carePlans = [
  {
    name: "Website Care",
    price: "₹1,500–₹3,000",
    items: ["Hosting, domain and SSL kept running", "Security and software updates", "Monthly backup", "Small content changes: text, photos, prices"],
  },
  {
    name: "Growth",
    price: "₹5,000–₹10,000",
    items: [
      "Everything in Website Care",
      "A monthly look at visits and enquiries, with a short written summary",
      "One improvement shipped each month: a new section, a landing page or a clearer call to action",
      "Google Business Profile and search listing updates",
    ],
  },
  {
    name: "Software Support",
    price: "₹3,000–₹10,000",
    items: ["Bug fixes", "Updates, backups and monitoring", "Small changes to screens, fields and reports", "Priority replies on WhatsApp"],
  },
];

export const faqs = [
  {
    q: "How much does a website cost?",
    a: "Website Launch starts from ₹15,000, and most small-business sites land between ₹15,000 and ₹25,000. The price depends on the number of pages, whether your photos and text are ready, and any extra features. You get a written quote for your scope before any work starts.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the scope, so the timeline is part of the written proposal. You know when to expect the first version and the launch before you pay anything.",
  },
  {
    q: "What do I get with the ₹999 Website Growth Audit?",
    a: "A written review of your website covering design, mobile use, messaging, calls to action and lead capture, with 5 to 10 specific improvements in priority order, plus a short call to go through them. Request it with the form; I confirm I can help and send a Razorpay payment link before I start.",
  },
  {
    q: "Do I have to take a monthly support plan?",
    a: "No. Support plans are optional. Take one if you want someone looking after the site or app after launch; skip it if you don’t.",
  },
  {
    q: "Who will I be working with?",
    a: "With me, Hazik Fayaz. I design and build each project myself, from the first conversation to launch, so you talk to the person doing the work.",
  },
  {
    q: "How do I pay?",
    a: "Through Razorpay, which accepts UPI, cards and net banking. The amounts and when they are due are set out in the proposal.",
  },
];

export const checklist: { title: string; checks: { text: string; why?: string }[] }[] = [
  {
    title: "First impression",
    checks: [
      { text: "Someone new can tell what you do, and for whom, within five seconds of landing.", why: "If the headline is your business name or “Welcome”, visitors have to work it out." },
      { text: "There is one obvious next step above the fold: call, WhatsApp, book or enquire.", why: "Several equal buttons, or none, and most people do nothing." },
      { text: "The page loads in about three seconds on mobile data.", why: "Test it on your own phone with Wi-Fi off. Heavy photos are the usual cause." },
      { text: "Photos are real: your work, your place, your team.", why: "Stock photos make a small business look like everyone else." },
    ],
  },
  {
    title: "On a phone",
    checks: [
      { text: "A call or WhatsApp button is visible without scrolling.", why: "Most local customers are on a phone and want to tap, not type." },
      { text: "Text is readable without zooming, and nothing spills off the side of the screen." },
      { text: "Buttons and links are big enough to tap without hitting the wrong one." },
      { text: "Phone numbers and addresses are tappable: tap to call, tap for directions." },
    ],
  },
  {
    title: "Trust",
    checks: [
      { text: "Your address or service area is on the site.", why: "People want to know you are real and nearby." },
      { text: "Real reviews or examples of your work are shown, with names where you have permission." },
      { text: "Prices, or at least a starting price, are visible.", why: "“Call for price” puts off people who are only comparing." },
      { text: "Opening hours and contact details are current." },
    ],
  },
  {
    title: "Getting in touch",
    checks: [
      { text: "The contact form asks only what you really need.", why: "Every extra field loses some people." },
      { text: "After sending the form, the visitor sees a clear “thanks, here’s what happens next” message." },
      { text: "You get every enquiry. You have sent yourself a test in the last month.", why: "Broken forms are common and silent." },
      { text: "Every page ends with a way to get in touch, not a dead end." },
    ],
  },
  {
    title: "Found on Google",
    checks: [
      { text: "Each page has its own title that says what you do and where.", why: "For example “Bridal makeup in Kochi”, not “Home”." },
      { text: "Your Google Business Profile is claimed, and it links to your website." },
      { text: "You can see how many people visit and where they come from (analytics)." },
      { text: "When your link is shared on WhatsApp, it shows a proper title and image preview." },
    ],
  },
];
