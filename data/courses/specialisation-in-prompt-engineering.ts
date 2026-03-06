import { Course } from "../../types/courses";

export const promptEngineeringMasterclass: Course = {
    _id: "prompt-engineering-masterclass",
    title: "[B] [R]Prompt Engineering Masterclass[/R] [/B] | Master ChatGPT, GPT4, LLMs",
    slug: "prompt-engineering-masterclass",
    rating: 5,
    totalRatings: 10,
    duration: "Basic to Advance",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    programBy: "Vimal Daga",
    hours: "8+",
    price: 1950,
    originalPrice: 20000,
    enrolledStudents: 350000,
    category: "Artificial Intelligence",
    shortDescription: "Explore the technologies behind ChatGPT, GPT4, LLMs & much more",
    paymentLink: "https://rzp.io/rzp/promptEngineering",
    backgroundImage: "/assets/cources/courseDetails/6course/prompt1-ezgif.com-webp-to-jpg-converter.jpg",

    learningOutcomes: [
        "Master Prompt Engineering fundamentals",
        "Learn LLM technologies",
        "Understand ChatGPT and GPT4",
        "Create effective prompts",
        "Implement practical industry use cases"
    ],

    features: [
        "Most Relevant Prompt Engineering Tips & Tricks",
        "Technical Support for 90 days",
        "Prompt Engineering Related Industry Use Cases",
        "Premium #13 Prompt Engineering Community"
    ],

    skills: [
        "Prompt Design",
        "LLM Integration",
        "API Implementation",
        "LangChain",
        "Prompt Optimization"
    ],

    requirements: [
        "Basic computer knowledge",
        "Interest in AI and Machine Learning"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-07",

    module: [
        {
            id: 1,
            title: "Introduction to Prompt Engineering",
            description: "Foundation concepts of prompt engineering and language models",
            content: [
                "Understanding Language Generation Models",
                "Overview of Transformer Architecture",
                "Role of Attention Mechanisms",
                "Significance of Prompts in Language Generation",
                "Influence on Model Outputs",
                "Limitations of Unprompted Generation",
                "Applications and Use Cases of Prompt Engineering",
                "Text Completion",
                "Summarization",
                "Dialogue Generation"
            ]
        },
        {
            id: 2,
            title: "Fundamentals of Prompt Design",
            description: "Core principles of designing effective prompts",
            content: [
                "Anatomy of a Well-Designed Prompt",
                "Starting Phrases and Context",
                "Incorporating Constraints and Conditions",
                "Principles of Effective Prompt Formulation",
                "Clarity and Specificity",
                "Relevance to Task Objectives"
            ]
        },
        {
            id: 3,
            title: "Strategies for Prompt Construction",
            description: "Advanced techniques for building effective prompts",
            content: [
                "Task-Specific Prompt Templates",
                "Template Structures for Different Tasks (e.g., Translation, Summarization)",
                "Template Examples and Variations",
                "Adjusting Prompt Length and Complexity",
                "Impact on Model Understanding and Performance",
                "Strategies for Simplification or Expansion"
            ]
        },
        {
            id: 4,
            title: "Fine-Tuning Prompt Parameters",
            description: "Optimization techniques for prompt parameters",
            content: [
                "Exploring Temperature and Top-p Sampling",
                "Balancing Diversity and Coherence",
                "Effect on Output Novelty and Relevance",
                "Customizing Prompt Settings for Desired Outputs",
                "Tuning Parameters for Specific Use Cases",
                "Optimization Strategies for Model Performance"
            ]
        },
        {
            id: 5,
            title: "Evaluating Prompt Effectiveness",
            description: "Methods and metrics for assessing prompt quality",
            content: [
                "Metrics for Assessing Output Quality",
                "BLEU Score for Translation",
                "ROUGE Score for Summarization",
                "Human Evaluation Methods and Considerations",
                "Iterative Refinement of Prompts",
                "Incorporating Feedback and Iterating Prompt Designs",
                "Continuous Improvement Strategies"
            ]
        },
        {
            id: 6,
            title: "Advanced Prompt Engineering Techniques",
            description: "Advanced concepts and implementations in prompt engineering",
            content: [
                "Conditional Generation with Prompts",
                "Incorporating Contextual Conditions for Targeted Outputs",
                "Examples and Applications in Dialogue Systems",
                "Incorporating Domain-Specific Knowledge",
                "Knowledge Prompts for Niche Subjects or Industries",
                "Integration with External Data Sources"
            ]
        },
        {
            id: 7,
            title: "Applications of Prompt Engineering",
            description: "Real-world applications and implementation scenarios",
            content: [
                "Text Completion and Continuation",
                "Generating Text from Partial Prompts",
                "Applications in Creative Writing and Storytelling",
                "Language Translation and Multilingual Generation",
                "Adapting Prompts for Multilingual Output",
                "Challenges and Solutions in Cross-Language Generation"
            ]
        }
    ],

    highlights: [
        {
            number: "7",
            description: "Modules"
        },
        {
            number: "8+",
            description: "Hours of learning"
        },
        {
            number: "90",
            description: "Days of support"
        }
    ],

    programFor: [
        { src: "/assets/courses/programFor/it.jpg", alt: "IT Professionals", text: "IT professionals" },
        { src: "/assets/courses/programFor/dev.jpg", alt: "Developers", text: "Software Developers" },
        { src: "/assets/courses/programFor/ml.jpg", alt: "ML Enthusiasts", text: "Machine Learning Enthusiast" },
        { src: "/assets/courses/programFor/data.jpg", alt: "Data Scientists", text: "Data Science Enthusiasts" },
        { src: "/assets/courses/programFor/fresh.jpg", alt: "Freshers", text: "Freshers aspiring for an IT role" },
        { src: "/assets/courses/programFor/analyst.jpg", alt: "Analysts", text: "Data analysts" },
        { src: "/assets/courses/programFor/student.jpg", alt: "Students", text: "College pursuing students" },
        { src: "/assets/courses/programFor/manager.jpg", alt: "Managers", text: "Managers & Team Leaders" },
        { src: "/assets/courses/programFor/founder.jpg", alt: "Founders", text: "Technical Co-Founders" },
        { src: "/assets/courses/programFor/professor.jpg", alt: "Professors", text: "College HOD & Professors" }
    ],

    certificateImage: "/assets/certificate/prompt.jpg",

    toolsData: {
        sectionTitle: "Comprehensive Prompt Engineering Program",
        category: "AI & Machine Learning",
        toolsCount: "5+",
        displayImage: "public/assets/tools1/3.png",
        tools: [
            {
                id: "llm",
                icon: "TrendingUp",
                title: "Large Language Models: GPT-4, ChatGPT"
            },
            {
                id: "frameworks",
                icon: "BarChart",
                title: "Frameworks: LangChain"
            },
            {
                id: "apis",
                icon: "Cpu",
                title: "APIs: OpenAI API Integration"
            }
        ]
    }
};