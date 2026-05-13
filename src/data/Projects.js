const projects = [
  {
  id: "prespace",
  number: "01",
  title: "Prespace",
  category: "Human-Centered AI • HCI",

  description:
    "An AI-powered navigation companion designed to reduce uncertainty in unfamiliar environments through guided flows, emotional check-ins, and accessibility-aware support.",

  accent: "from-[#7b2d4b] to-[#d48ba3]",

  path: "/projects/prespace",

  figma:
  "https://www.figma.com/design/iF4RdZqPE8kF4N5fFOSxJu/PreSpace?node-id=1-41&p=f&t=AEHCbGa40UNZUWZM-0",

  navi:
  "Navi is a soft, supportive River Hawk companion introduced in the hi-fi prototype to provide emotional reassurance, guided breathing interactions, and structured support during unfamiliar experiences.",

  overview:
    "Prespace is a human-centered navigation and preparation system designed to reduce anxiety and uncertainty during first-time experiences in unfamiliar environments.",

  problem:
    "Many people experience stress and cognitive overload when navigating unfamiliar spaces such as campuses, transit systems, museums, or large public environments. Existing navigation systems prioritize efficiency but often overlook emotional comfort and first-time user experience.",

  role:
    "UX researcher, interaction designer, and front-end developer.",

  process:
    "Conducted needfinding, developed user scenarios, created storyboards and lo-fi prototypes, gathered usability feedback, and iterated on interaction flows based on participant observations.",

  findings: [
    "Users needed more guidance between features and tasks.",
    "Some labels, including the original Calm feature, were unclear.",
    "Participants preferred step-by-step flows over open-ended navigation.",
    "Feedback messages helped users feel more confident after completing actions.",
   ],

  features: [
    "Guided first-visit navigation flows",
    "Emotional check-ins",
    "Accessibility-aware interface thinking",
    "Step-by-step interaction support",
    "Reduced cognitive overload through structured guidance",
  ],

  naviFeatures: [
  "Emotional check-ins",
  "Breathing guidance interactions",
  "Supportive conversational prompts",
  "Reduced anxiety during navigation",
  "Human-centered onboarding support",
  ],

  outcomes:
    "Participants preferred guided flows over map-only navigation and reported improved clarity after navigation restructuring and terminology refinement.",

  futureWork:
    "Future iterations could include adaptive AI recommendations, conversational assistance, stress-aware interfaces, and real-time environmental guidance.",
},

  {
  id: "sec-filing-intelligence",

  number: "02",

  title: "SEC Filing Intelligence",

  category: "NLP • Data Analytics",

  description:
    "A document intelligence pipeline for extracting and analyzing Critical Audit Matters from SEC filings using NLP and scalable text-processing methods.",

  accent: "from-[#3c2a35] to-[#9d4d6d]",

  path: "/projects/sec-filing-intelligence",

  overview:
    "A scalable NLP pipeline designed to extract, structure, and analyze Critical Audit Matter disclosures from multi-year SEC filings.",

  problem:
    "Financial filings contain large volumes of unstructured textual information that are difficult to analyze manually at scale. The project focused on automating extraction and preprocessing of Critical Audit Matter sections for downstream analysis.",
  
  tech: [
   "Python",
   "NLP",
   "Regex",
   "Text Processing",
   "Data Extraction",
   "Financial Documents",
   ],

  role:
    "Research intern responsible for NLP preprocessing, extraction workflows, data structuring, and analysis support.",

  process:
    "Developed automated extraction workflows for SEC filings, processed multi-year financial documents, cleaned and structured textual data, and explored scalable NLP-based approaches for identifying risk-related narratives.",

  features: [
    "Automated CAM extraction workflows",
    "Large-document text preprocessing",
    "Structured financial text analysis",
    "Scalable multi-file processing",
    "Research-oriented NLP pipeline",
  ],

  outcomes:
    "Reduced manual extraction effort and enabled more efficient analysis of financial disclosure narratives across multiple SEC filings.",

  futureWork:
    "Future improvements could include transformer-based semantic analysis, FinBERT integration, and risk classification using contextual embeddings.",
},

  {
  id: "traffic-pattern-prediction",

  number: "03",

  title: "Traffic Intelligence",

  category: "Machine Learning • Predictive Analytics",

  description:
    "A machine learning system for analyzing and predicting traffic volume patterns using temporal, weather, and environmental features.",

  accent: "from-[#5f4b55] to-[#d48ba3]",

  path: "/projects/traffic-pattern-prediction",

  overview:
    "A predictive analytics project exploring how machine learning models can identify traffic volume trends using weather conditions, time-based patterns, and seasonal behavior.",

  problem:
    "Traffic systems generate large amounts of time-sensitive data influenced by weather, holidays, and temporal patterns. The project focused on predicting traffic behavior and identifying meaningful trends through machine learning models.",

  role:
    "Data analyst and ML developer responsible for preprocessing, feature engineering, model evaluation, and visualization.",

  process:
    "Prepared and cleaned traffic datasets, explored temporal trends, engineered predictive features, trained machine learning models, and evaluated performance using analytical metrics and visualizations.",

  features: [
    "Traffic trend prediction",
    "Temporal feature engineering",
    "Weather-based analysis",
    "Model comparison workflows",
    "Data visualization and evaluation",
  ],

  outcomes:
    "Identified meaningful traffic behavior patterns and demonstrated how predictive models can support traffic forecasting and data-driven transportation analysis.",

  futureWork:
    "Future improvements could include real-time forecasting, explainable AI techniques, and integration with live transportation datasets.",

  tech: [
    "Python",
    "Pandas",
    "Scikit-learn",
    "Machine Learning",
    "Data Visualization",
    "Predictive Modeling",
  ],
},

  {
  id: "tastes-and-trails",

  number: "04",

  title: "Tastes & Trails",

  category: "UI Design • Front-End",

  description:
    "A warm travel and food storytelling website designed to create an inviting, visually rich browsing experience.",

  accent: "from-[#9d4d6d] to-[#e8a4a8]",

  path: "/projects/tastes-and-trails",

  overview:
    "A front-end storytelling website combining travel memories, food experiences, and warm visual design into an engaging digital journal.",

  problem:
    "The goal was to design a personal storytelling website that felt warm, easy to browse, and visually engaging without overwhelming users with cluttered layouts.",

  role:
    "UI designer and front-end developer responsible for visual direction, page structure, interaction design, and implementation.",

  process:
    "Designed the site structure, selected a warm visual style, built responsive page layouts, and implemented interactive sections to make travel and food stories feel immersive and easy to explore.",

  features: [
    "Warm editorial-style layout",
    "Responsive front-end design",
    "Travel and food content organization",
    "Interactive storytelling sections",
    "Consistent visual identity",
  ],

  outcomes:
    "Created a polished personal website that demonstrates visual design sense, front-end implementation, and user-friendly content structure.",

  futureWork:
    "Future improvements could include dynamic content management, filtering by location or cuisine, and richer storytelling interactions.",

  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
    "UI Design",
    "Interaction Design",
  ],
},
];

export default projects;