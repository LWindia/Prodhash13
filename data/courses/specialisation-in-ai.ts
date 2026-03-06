import { Course } from "../../types/courses";

export const specialisationInAI: Course = {
    _id: "specialisation-in-ai-ml",
    title: "[B][R]Specialisation in AI & Machine Learning [/R][/B]| Supporting India AI Mission",
    slug: "specialisation-in-ai-ml",
    rating: 5,
    totalRatings: 10,
    duration: "Beginner to Advance",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    hours: "32+",
    // startDate: "Starting On 22nd March (Weekend Batch)",
    price: 8000,
    originalPrice: 20000,
    enrolledStudents: 12000,
    category: "Artificial Intelligence",
    shortDescription: " Starting On 22nd March (Weekend Batch)",
    paymentLink: " https://rzp.io/rzp/575updp ",
    backgroundImage: "/assets/AI (1).jpg",

learningOutcomes: [
    "AI & ML Foundations",
    "Python for AI",
    "Data Preprocessing",
    "ML Algorithms",
    "Deep Learning & CNNs",
    "NLP & AI Applications",
    "Model Deployment"
],

features: [
    "Real-World Projects",
    "Technical Support for 90 Days",
    "Premium #13 AI Community"
],

    skills: [
        "Infrastructure as Code",
        "Cloud Automation",
        "AWS Resource Management",
        "State Management",
        "Module Development",
        "Configuration Management",
        "Version Control",
        "CI/CD Integration"
    ],

    requirements: [
        "Basic understanding of cloud concepts",
        "Familiarity with command line interface",
        "Basic programming knowledge"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",


    module: [
        {
            id: 1,
            title: "Introduction to AI & Machine Learning",
            description: "Understand AI fundamentals, types, applications, and ethical concerns.",
            content: [
                "AI vs. ML vs. Deep Learning",
                "Key AI milestones & real-world applications",
                "AI in healthcare, finance, and education",
                "Ethical concerns: Bias, transparency, regulations",

                ]
        },
        {
            id: 2,
            title: "Python for AI & ML",
            description: "Master Python tools for AI development.",
            content: [
                "Python setup: Jupyter, IDEs",
                "Libraries (NumPy, Pandas, Matplotlib)",
                "Data manipulation with Pandas & NumPy",
                "Basic data visualization techniques",

            ]
        },
        {
            id: 3,
            title: "Data Preprocessing & Feature Engineering",
            description: "Clean, preprocess, and optimize data for AI models.",
content: [
    "Handling missing values & outliers",
    "Encoding categorical data",
    "Feature scaling",
    "Selection techniques"
]
        },
        {
            id: 4,
            title: "Supervised Learning",
            description: " Learn regression and classification techniques.",
content: [
    "Linear Regression",
    "Logistic Regression",
    "Decision Trees",
    "Random Forest",
    "SVM",
    "Model evaluation: Accuracy, Precision, Recall, F1-score"
]
        },
        {
            id: 5,
            title: " Unsupervised Learning",
            description: "Understand clustering and anomaly detection.",
content: [
    "K-Means, Hierarchical clustering",
    "Principal Component Analysis (PCA)",
    "t-SNE for dimensionality reduction",
    "Fraud detection & anomaly detection techniques"
]
        },
        {
            id: 6,
            title: "Deep Learning & Neural Networks",
            description: "Build and optimize deep learning models.",
content: [
    "Neural networks & perceptrons",
    "Activation functions",
    "Loss functions",
    "Backpropagation & weight optimization"
]
        },
        {
            id: 7,
            title: "Convolutional Neural Networks (CNNs)",
            description: " Learn image recognition techniques.",
content: [
    "Convolutional layers, filters & pooling",
    "Padding, strides, feature maps",
    "Transfer learning",
    "Fine-tuning"
]
        },
        {
            id: 8,
            title: "Natural Language Processing (NLP)",
            description: "Work with text data and sentiment analysis.",
content: [
    "Tokenization",
    "Lemmatization",
    "Stopwords",
    "Word embeddings: Word2Vec, GloVe, BERT",
    "Text classification",
    "Sentiment analysis"
]
        },
        {
            id: 9,
            title: "AI for Real-world Applications",
            description: "Explore AI applications across industries.",
content: [
    "AI in healthcare, finance, e-commerce",
    "Basics of reinforcement learning",
    "AI for edge devices (TinyML)"
]
        },
//         {
//             id: 10,
//             title: "AI Model Deployment & MLOps",
//             description: " Deploy and manage AI models efficiently.",
// content: [
//     "Model deployment with Flask/FastAPI",
//     "Docker & Kubernetes for AI models",
//     "CI/CD automation for AI pipelines"
// ]
//         }
    ],

    highlights: [
        {
            number: "10",
            description: "Modules"
        },
        {
            number: "32+",
            description: "Hours of learning"
        },
        {
            number: "3+",
            description: "Capstone Projects"
        }
    ],

    certificateImage: "/assets/certificate/Specialisation-in-AI-&-Machine-Learning.jpg",

    project: [
        {
            icon: "",
            title: "Multi-Tier AWS Infrastructure",
            description: "Build a complete multi-tier application infrastructure on AWS",
            skills: ["Terraform", "AWS", "Infrastructure as Code"]
        },
        {
            icon: "",
            title: "Auto-Scaling Environment",
            description: "Create an auto-scaling environment with load balancing",
            skills: ["Auto Scaling", "Load Balancing", "High Availability"]
        },
        {
            icon: "",
            title: "Multi-Environment Setup",
            description: "Implement a multi-environment infrastructure using workspaces",
            skills: ["Workspace Management", "Environment Configuration", "State Management"]
        }
    ],

    programFor: [
        { src: "/assets/cources/courseDetails/shell-scripting/DevOps Engineers.jpg", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "Cloud Engineers", text: "Cloud Computing Engineers" },
        { src: "/assets/cources/courseDetails/mongodb/System Administrators.jpg", alt: "System Administrators", text: "System Administrators" },
        { src: "/assets/cources/courseDetails/terraform/Infrastructure Engineers.jpg", alt: "Infrastructure Engineers", text: "Infrastructure Engineers" },
        { src: "/assets/cources/courseDetails/terraform/Software Developers.jpg", alt: "Software Developers", text: "Software Developers" },
        { src: "/assets/cources/courseDetails/terraform/Site Reliability Engineers (SRE).jpg", alt: "SRE Engineers", text: "Site Reliability Engineers" },
        { src: "/assets/cources/courseDetails/terraform/Technical Co-Founders.jpg", alt: "Technical Managers", text: "Data Analytics Specialist" },
        { src: "/assets/cources/courseDetails/shell-scripting/Cloud Administrators.jpg", alt: "Cloud Architects", text: "Artificial Intelligence Consultant" },
        { src: "/assets/cources/courseDetails/terraform/IT Professionals seeking to enhance their DevOps skills.png", alt: "Working IT Professionals", text: "Working IT Professionals" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "College Students", text: "Natural Language Engineer" }
    ],

    toolsData: {
        sectionTitle: "Complete AI Program",
        category: " AI & ML  for Real-World Applications",
        toolsCount: "10+",
        displayImage: "/assets/certificate/AI.jpg",
        tools: [
            {
                id: "basics",
                icon: "TrendingUp",
                title: "Understand key AI/ML metrics, model logs, and performance traces."
            },
            {
                id: "aws",
                icon: "BarChart",
                title: "Learn Python-based data preprocessing, feature engineering, and model evaluation."
            },
            
            {
                id: "modules",
                icon: "TrendingUp",
                title: "Create regression and classification models, including Linear Regression, Decision Trees, Random Forest, and SVM."
            },
            {
                id: "automation",
                icon: "BarChart",
                title: "Monitor ML model performance, track accuracy, precision, recall, and drift detection."
            },
            {       
                id: "state",
                icon: "Cpu",
                title: "Study AI applications in healthcare, finance, and e-commerce. Get an introduction to Reinforcement Learning and Edge AI."
            },
        ]
    },
    programBy: "Vimal Daga"
}