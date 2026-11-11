export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  highlights: string[];
  codeSnippet?: string;
}

export interface RoadmapStep {
  year: string;
  phase: string;
  status: 'current' | 'upcoming' | 'future';
  milestones: string[];
  focus: string;
}

export const INITIAL_PROFILE = {
  name: "Avinash Pasuluru",
  tagline: "B.Tech 1st Year Computer Science & Engineering · Aspiring AI Engineer",
  bio: "First-year Computer Science undergraduate passionate about the frontier of Artificial Intelligence and Large Language Models. Building solid engineering foundations across Python, modern web development, and generative AI systems with the ultimate goal of designing autonomous, reliable AI agents.",
  department: "Computer Science & Engineering",
  academicYear: "1st Year Undergraduate (B.Tech)",
  careerGoal: "AI Engineer & Machine Learning Systems Architect",
  email: "avinashpasuluru9@gmail.com",
  github: "https://github.com/avinashpasuluru9-pixel",
  linkedin: "https://www.linkedin.com/in/avinashpasuluru", // customizable in UI
  location: "India",
  primarySkills: [
    { name: "Python", level: "Beginner - Intermediate", icon: "Code2", desc: "Core syntax, data structures, scripting, OOP, and scientific computing basics." },
    { name: "Web Development", level: "Foundational", icon: "Layout", desc: "HTML5, CSS3, Tailwind CSS, JavaScript basics, and modern responsive UI components." },
    { name: "Generative AI", level: "Emerging Practitioner", icon: "Sparkles", desc: "Prompt engineering, Google AI Studio, Gemini API paradigms, and LLM reasoning." }
  ]
};

export const ROADMAP_DATA: RoadmapStep[] = [
  {
    year: "Year 1 (Current)",
    phase: "Core Foundations & GenAI Curiosity",
    status: "current",
    focus: "C/Python syntax, discrete mathematics, object-oriented principles, and building first GenAI apps using Google AI Studio.",
    milestones: [
      "Master Python programming fundamentals & problem solving",
      "Build responsive web applications with HTML, CSS & React",
      "Explore prompt engineering & Gemini API integration",
      "Maintain active GitHub repositories and open-source learning"
    ]
  },
  {
    year: "Year 2",
    phase: "Data Structures, Math for ML & Deep Learning",
    status: "upcoming",
    focus: "Data Structures & Algorithms, Linear Algebra, Calculus, Probability, and PyTorch / TensorFlow fundamentals.",
    milestones: [
      "Data Structures & Algorithms proficiency (LeetCode / CodeChef)",
      "Mathematical foundations of Machine Learning",
      "Implement classic neural network architectures from scratch",
      "Train first computer vision and NLP models on public datasets"
    ]
  },
  {
    year: "Year 3",
    phase: "Advanced LLMs, RAG & Autonomous Agents",
    status: "future",
    focus: "Retrieval-Augmented Generation (RAG), Vector Databases, LangChain / LlamaIndex, fine-tuning, and multi-agent coordination.",
    milestones: [
      "Build production RAG pipelines with Pinecone/Qdrant",
      "Experiment with parameter-efficient fine-tuning (LoRA/QLoRA)",
      "Deploy full-stack AI applications with FastAPI & Cloud Run",
      "Participate in AI Hackathons and open-source contributions"
    ]
  },
  {
    year: "Year 4",
    phase: "MLOps, Scalable AI Infrastructure & Capstone",
    status: "future",
    focus: "Production model serving, Docker/Kubernetes, CI/CD for ML, latency optimization, and industry internship.",
    milestones: [
      "End-to-end MLOps pipeline monitoring and model drift detection",
      "Comprehensive B.Tech Capstone AI Project",
      "Industry internship as Machine Learning / AI Engineering Intern",
      "Transition into full-time AI Engineer role"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "genai-prompt-sandbox",
    title: "AI Studio Prompt Architecture Lab",
    category: "Generative AI",
    description: "An interactive workbench for structuring, versioning, and testing high-fidelity prompts for Gemini models with role conditioning and output schemas.",
    longDescription: "Built as an exploratory lab to understand structured prompt synthesis, zero-shot vs few-shot paradigms, and temperature variations when interacting with Google Gemini models. Features live parameter sliders and exportable prompt templates.",
    technologies: ["Generative AI", "Prompt Engineering", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/avinashpasuluru9-pixel",
    highlights: [
      "System prompt template generator for AI Studio workflows",
      "Live token and parameter configuration analyzer",
      "Exportable formatted markdown and json payloads"
    ],
    codeSnippet: `# Python sample testing Gemini API structured prompt
from google import genai
from google.genai import types

client = genai.Client()
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Explain how gradient descent updates neural network weights for a 1st year CSE student.",
    config=types.GenerateContentConfig(
        temperature=0.3,
        system_instruction="You are an encouraging computer science professor."
    )
)
print(response.text)`
  },
  {
    id: "python-academic-tracker",
    title: "Python Academic GPA & Task Assistant",
    category: "Python Development",
    description: "A terminal and GUI utility crafted in Python to calculate semester credits, weighted SGPA/CGPA, and schedule study sessions for B.Tech CSE subjects.",
    longDescription: "Developed as a first-year programming milestone project utilizing Python object-oriented classes, file handling for persistent records, and algorithmic calculation of grade points across credit courses.",
    technologies: ["Python 3.x", "File I/O", "OOP", "Data Structures"],
    githubUrl: "https://github.com/avinashpasuluru9-pixel",
    highlights: [
      "Custom class-based course and student grade ledger",
      "CSV export and JSON snapshot recovery",
      "Interactive CLI with colored output and automated grade prediction"
    ],
    codeSnippet: `class AcademicCourse:
    def __init__(self, code: str, title: str, credits: int, grade_point: float):
        self.code = code
        self.title = title
        self.credits = credits
        self.grade_point = grade_point

    def weighted_score(self) -> float:
        return self.credits * self.grade_point

def compute_sgpa(courses: list[AcademicCourse]) -> float:
    total_credits = sum(c.credits for c in courses)
    total_points = sum(c.weighted_score() for c in courses)
    return round(total_points / total_credits, 2) if total_credits > 0 else 0.0`
  },
  {
    id: "personal-portfolio-hub",
    title: "Personal Engineering Portfolio & Roadmap",
    category: "Web Development",
    description: "A high-craft web portfolio showcasing academic progress, Python fundamentals, Generative AI projects, and an integrated prompt generator.",
    longDescription: "Engineered with React, TypeScript, and modern styling guidelines. Built to serve as the single source of truth for Avinash's developer journey, housing real-time links to GitHub and LinkedIn.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    githubUrl: "https://github.com/avinashpasuluru9-pixel",
    highlights: [
      "Strict 60-30-10 color discipline and zero-pill typography",
      "Interactive Prompt Builder for Google AI Studio",
      "Responsive layout optimized for 1440px desktop & mobile"
    ]
  },
  {
    id: "genai-summarizer-prototype",
    title: "CSE Lecture Notes & Concept Clarifier",
    category: "Generative AI & Web",
    description: "A prototype interface allowing first-year students to input dense computer science theory and receive bulleted summaries with Python code analogies.",
    longDescription: "Experiments with model temperature and step-by-step reasoning prompts to break down complex first-year syllabus concepts such as Big-O notation, recursion, and memory pointers.",
    technologies: ["Python", "Gemini API", "HTML/JS", "Prompt Design"],
    githubUrl: "https://github.com/avinashpasuluru9-pixel",
    highlights: [
      "One-click concept summarization with code examples",
      "Quiz generation mode for self-assessment",
      "Designed specifically for B.Tech 1st year foundational subjects"
    ]
  }
];

export function generateStudioPrompt(options: {
  name: string;
  academicYear: string;
  department: string;
  targetRole: string;
  skills: string;
  githubUrl: string;
  linkedinUrl: string;
  extraDetails?: string;
}): string {
  return `### SYSTEM ROLE & IDENTITY
You are an expert full-stack web developer and modern UI/UX design engineer. Your task is to build a modern, high-craft, professional personal portfolio web application for:
- Student Name: ${options.name}
- Education: ${options.academicYear}, ${options.department}
- Career Goal: ${options.targetRole}
- Current Tech Skills: ${options.skills}
- Social / Code Repositories:
  * GitHub: ${options.githubUrl}
  * LinkedIn: ${options.linkedinUrl || "https://www.linkedin.com/in/avinashpasuluru"}
${options.extraDetails ? `- Additional Focus: ${options.extraDetails}` : ""}

---

### DESIGN REQUIREMENTS & ARCHITECTURE
1. **Visual Style**:
   - Clean, modern, developer-first dark mode aesthetic (deep slate/obsidian canvas, clean structural borders, and electric sapphire/cobalt accents).
   - Strict adherence to professional typography (display headings with clean tracking, monospace font for code snippets and metrics).
   - Zero-pill discipline: unboxed metadata using subtle separators (· or /), no loud rounded candy badges.

2. **Core Sections**:
   - **Header / Top Bar**: Minimalist 3-zone contract with the student's name, clean single-line navigation links (About, Skills, Roadmap, Projects, Contact), and a primary action button ("View Resume" / "Connect").
   - **Hero Section**: Strong introductory statement highlighting Avinash's position as a 1st Year B.Tech CSE student dedicated to growing into an AI Engineer. Clear CTAs to view projects, open GitHub profile (${options.githubUrl}), and connect on LinkedIn.
   - **About Me**: Authentic journey of starting computer science engineering, excitement for mathematical foundations and neural networks, and dedication to continuous daily coding.
   - **Skills Matrix & 4-Year AI Roadmap**:
     * Current Foundation: Python programming, basic web development, and foundational Generative AI / prompt engineering.
     * Roadmap Timeline: Detailed Year 1 (Foundations) through Year 4 (Production AI & MLOps) trajectory to becoming an industry-ready AI Engineer.
   - **Featured Projects**:
     * Clean cards with project overview, tech tags, GitHub repository links, and interactive preview modals.
     * Highlight Python scripting, basic web tools, and exploratory GenAI / LLM prototypes.
   - **Interactive AI Prompt Studio & Playground**:
     * A built-in feature allowing visitors and Avinash to generate, customize, and copy structured prompts for Google AI Studio.
   - **Contact & Connect**:
     * Direct working link to GitHub: ${options.githubUrl}
     * Direct working link to LinkedIn: ${options.linkedinUrl || "https://www.linkedin.com/in/avinashpasuluru"}
     * Interactive contact message form with local storage persistence.

3. **Engineering Integrity**:
   - Written in React + TypeScript with Tailwind CSS.
   - Fully interactive controls with working state handlers (no dead buttons or non-functional stubs).
   - Responsive layout designed for desktop (1440px) down to mobile screens.`;
}
