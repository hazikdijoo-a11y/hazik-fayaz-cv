export const profile = {
  name: "Hazik Fayaz",
  title: "Aviation Professional",
  tagline: "Cabin Leadership · Safety & Compliance · Service Excellence",
  location: "Bengaluru, Karnataka, India",
  coordinates: "12.9716° N, 77.5946° E — BLR",
  email: "hazikdijoo@gmail.com",
  phone: "+91 99958 03434",
  linkedin: "linkedin.com/in/hazik-fayaz-45a2aa70",
  linkedinUrl: "https://linkedin.com/in/hazik-fayaz-45a2aa70",
  nationality: "Indian",
  relocation: "Open to relocation",
  targetRole: "Cabin Crew Trainer",
};

export const summary =
  "Aviation professional with over 10 years of commercial cabin crew experience at SpiceJet, currently serving in a Line Check Cabin Crew role — a senior position responsible for crew briefings, SOP compliance, flight-deck coordination, and mentoring across the cabin. Experienced in leading onboard teams through emergency procedures, guest service recovery, and time-pressured situations, with an earlier foundation in front-office hospitality at Taj Hotels. Ready to move into cabin crew training, bringing operational discipline, a safety-first mindset, and hands-on coaching and line-check experience from the cabin.";

export const highlights = [
  { value: "10+", label: "Years in commercial aviation" },
  { value: "7", label: "Years as Senior Cabin Crew" },
  { value: "2", label: "Aircraft types operated — B737 & DHC Q400" },
  { value: "3", label: "Employers across aviation & hospitality" },
];

export const competencies = [
  {
    category: "Aviation Operations",
    items: ["Pre-flight safety checks", "Cabin readiness", "Emergency equipment checks", "Post-flight documentation"],
  },
  {
    category: "Safety & Compliance",
    items: ["DGCA SOP compliance", "Safety demonstrations", "Regulatory enforcement", "Incident reporting"],
  },
  {
    category: "Customer Experience",
    items: ["Inflight food & beverage service", "Special assistance requests", "Guest recovery", "Premium hospitality (Taj Hotels)"],
  },
  {
    category: "Team Coordination",
    items: ["Crew briefings & duty assignment", "Flight-deck coordination", "New crew mentoring", "Crew debriefings"],
  },
  {
    category: "Crisis Management",
    items: ["Inflight emergencies", "Medical situations", "Conflict resolution", "Composure under pressure"],
  },
  {
    category: "Communication",
    items: ["Cross-cultural communication", "Fluent English", "Arabic — reading & writing", "Guest-facing conflict resolution"],
  },
];

export type ExperienceEntry = {
  company: string;
  title: string;
  location: string;
  dates: string;
  responsibilities: string[];
  transferable: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "SpiceJet Ltd",
    title: "Line Check Cabin Crew",
    location: "India",
    dates: "Dec 2024 — Present",
    responsibilities: [
      "Hold a senior onboard role overseeing safety and service standards across the cabin on Boeing 737 and DHC Q400 aircraft.",
      "Conduct pre-flight crew briefings, assign duties, and enforce SOP compliance ahead of every departure.",
      "Perform cabin safety and security checks and coordinate with the flight deck on weather, service flow, and special instructions.",
      "Serve as the point of reference for crew during flights, handling inflight emergencies, medical situations, and conflict resolution.",
      "Mentor and coach cabin crew to maintain consistent safety and service standards; complete post-flight documentation and incident records.",
    ],
    transferable: ["Cabin team leadership", "SOP enforcement", "Flight-deck coordination", "Crew mentoring"],
  },
  {
    company: "SpiceJet Ltd",
    title: "Senior Cabin Crew",
    location: "India",
    dates: "Nov 2017 — Dec 2024",
    responsibilities: [
      "Delivered consistent passenger service on domestic and international flights across a 7-year tenure.",
      "Led cabin crew teams to ensure safe and efficient inflight operations, conducting pre-flight inspections to identify safety or maintenance issues.",
      "Supported new cabin crew through on-job coaching and guidance, and participated in debriefings to improve operational efficiency.",
      "Managed challenging passenger situations calmly and professionally while ensuring compliance with aviation regulations.",
    ],
    transferable: ["Onboard leadership", "On-job coaching", "Service consistency", "Regulatory compliance"],
  },
  {
    company: "SpiceJet Ltd",
    title: "Cabin Crew",
    location: "India",
    dates: "Jan 2016 — Nov 2017",
    responsibilities: [
      "Performed pre-flight safety checks and delivered onboard passenger service.",
      "Managed boarding, cabin readiness, and emergency equipment checks.",
    ],
    transferable: ["Safety procedures", "Cabin readiness", "Passenger service foundation"],
  },
  {
    company: "Taj Hotels",
    title: "Front Office Associate",
    location: "Srinagar, India",
    dates: "Jan 2014 — Mar 2015",
    responsibilities: [
      "Managed guest check-in/check-out and front desk operations for international guests.",
      "Handled guest queries and complaints with a customer-first approach.",
    ],
    transferable: ["Premium hospitality", "International guest service", "Front-desk service recovery"],
  },
];

export const relevance = [
  {
    experience: "Line Check Cabin Crew — SOP enforcement, crew briefings, flight-deck coordination",
    capability: "Onboard leadership & regulatory compliance",
    airline: "Crew Trainer: teaching and assessing SOP-compliant, safety-first cabin procedures",
  },
  {
    experience: "7 years as Senior Cabin Crew mentoring and coaching junior crew",
    capability: "Team development & consistency of standards",
    airline: "Crew Trainer: coaching new and existing crew to a consistent service and safety standard",
  },
  {
    experience: "Handling inflight emergencies, medical situations, and conflict resolution",
    capability: "Crisis management & composure under pressure",
    airline: "Crew Trainer: teaching emergency, medical and conflict-handling procedures from real experience",
  },
  {
    experience: "Front Office Associate, Taj Hotels — international guest service",
    capability: "Premium hospitality & cross-cultural guest care",
    airline: "Crew Trainer: training service standards for premium, international guests",
  },
  {
    experience: "Arabic — reading & writing",
    capability: "Regional language exposure",
    airline: "Crew Trainer: useful when working with Middle East operators and training material",
  },
];

export const journey = [
  { year: "2014", label: "Front Office Associate", org: "Taj Hotels, Srinagar" },
  { year: "2016", label: "Cabin Crew", org: "SpiceJet" },
  { year: "2017", label: "Senior Cabin Crew", org: "SpiceJet" },
  { year: "2024", label: "Line Check Cabin Crew", org: "SpiceJet" },
  { year: "Next", label: "Cabin Crew Trainer (target)", org: "Next role" },
];

export const achievements = [
  {
    title: "Line Check Authorisation",
    description:
      "Advanced from Cabin Crew to Senior Cabin Crew to Line Check Cabin Crew over an 8-year span at SpiceJet — a progression reserved for crew trusted to uphold and evaluate safety and service standards on behalf of the airline.",
    impact: "Now a designated reference point for crew compliance and in-flight decision-making.",
  },
  {
    title: "Crew of the Month",
    description: "Recognised for outstanding performance and teamwork among SpiceJet cabin crew.",
    impact: "Formal internal recognition of consistent service delivery.",
  },
  {
    title: "Spicy Fit Star — Annual & Quarterly Awards",
    description: "Recognised through SpiceJet's internal award programme for sustained performance standards.",
    impact: "Repeated recognition across award cycles, not a single instance.",
  },
];

export const education = [
  {
    institution: "Viinzs Academy, Srinagar",
    qualification: "One-Year Diploma in Aviation, Hospitality and Tourism",
    year: "Grade A",
    note: "",
  },
  {
    institution: "IHM Catering Technology & Applied Nutrition, Srinagar",
    qualification: "Diploma in Front Office",
    year: "Ministry of Tourism, Govt. of India",
    note: "",
  },
  {
    institution: "Tyndale Biscoe School, Srinagar",
    qualification: "High School Diploma",
    year: "",
    note: "",
  },
];

export const certifications = [
  { name: "NCC 'C' Certificate — Leadership & Discipline", issuer: "National Cadet Corps, India" },
];

export const skills = {
  professional: ["Onboard leadership", "Crew coordination", "Conflict resolution", "Crisis management", "Mentoring & coaching", "Post-flight documentation"],
  aviation: ["SOP compliance (DGCA)", "Pre-flight safety checks", "Emergency equipment checks", "Safety demonstrations", "Boeing 737 cabin operations", "DHC Q400 cabin operations"],
  digital: ["Incident reporting systems", "Crew scheduling coordination", "Standard office & communication tools"],
  languages: [
    { name: "English", level: "Fluent — written & spoken" },
    { name: "Arabic", level: "Reading & writing" },
  ],
};

export const whatIBring = [
  "Operational discipline built across 10+ years of DGCA-regulated flight operations",
  "A safety-first mindset, formalised through progression into a Line Check evaluator role",
  "Calm, decisive judgment in inflight emergencies, medical situations, and guest conflict",
  "Cross-cultural, guest-first service instinct grounded in hospitality (Taj Hotels) as well as aviation",
  "Proven ability to mentor and coach crew toward a consistent standard, not just meet it personally",
  "Arabic reading and writing ability, supporting service on Middle East routes",
];

export const recruiterSnapshot = {
  targetRole: "Cabin Crew Trainer",
  experience: "10+ years",
  industry: "Commercial Aviation",
  location: "Bengaluru, India",
  nationality: "Indian",
  availability: "Open to relocation",
  languages: "English (fluent), Arabic (reading & writing)",
  strengths: "Onboard safety leadership, crew mentoring, crisis management, guest service recovery",
};

export const secondaryRoles = [
  {
    role: "Cabin Crew Instructor",
    why: "Classroom and practical instruction of safety and service procedures, a step I am ready to take, building on on-job coaching of new crew.",
  },
  {
    role: "Cabin Crew Evaluator / Standards",
    why: "Line-check assessment of crew against SOPs, which is the core of the current Line Check Cabin Crew role.",
  },
];

export const gaps = [
  "No instructor experience yet — I am ready to become an instructor, and my coaching of new crew and line-check work are the foundation I would build on.",
  "Experience to date is on narrow-body aircraft (Boeing 737, DHC Q400); long-haul operations typically use wide-body aircraft.",
  "Arabic proficiency is reading & writing only, not yet conversational.",
];
