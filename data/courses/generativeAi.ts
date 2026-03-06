import { Course } from "../../types/courses";

export const generativeAi: Course = {
    _id: "generative-ai-with-aws-bedrock",
    title: "[B][R]Generative AI with AWS Bedrock[/R][/B]",
    slug: "generative-ai-with-aws-bedrock",
    rating: 4.8,
    totalRatings: 420,
    duration: "Intermediate",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    hours: "8+",
    price: 4500,
    originalPrice: 15000,
    enrolledStudents: 18200,
    category: "Artificial Intelligence",
    shortDescription: "Industry Relevant & Recognized Training | Gain Hands-On Experience | Best-In-Class Content | Real-World Use Cases",
    paymentLink: "https://rzp.io/rzp/1vdzrsR",
    backgroundImage: "/assets/FactsAndFigure/gen-ai.png",

learningOutcomes: [
"AWS Bedrock Console: Master AWS Bedrock for AI workflows.",

"Amazon Bedrock Architecture: Learn Bedrocks scalable architecture.",

"Enterprise Use Cases: Apply Bedrock to real-world business problems.",

"Build Scalable AI Apps: Learn to build and scale generative AI applications.",

"AWS Service Integration: Deploy and integrate with AWS services,",
"And much more…"

    ],

features: [
    "Lifetime Access to Training Materials & Updates",
    "Technical Support for 90 days",
    "Premium AWS Bedrock Community Membership",
 ],

    skills: [
        "AWS CodeSuite (CodeBuild, CodePipeline, CodeDeploy)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Docker & Kubernetes on AWS",
        "Serverless CI/CD with Lambda",
        "Security & Compliance (AWS Config, GuardDuty)",
        "Cost optimization strategies"
    ],

    requirements: [
        "Basic AWS knowledge (EC2, S3, IAM)",
        "Familiarity with Linux commands",
        "Understanding of DevOps principles"
    ],

    level: "Intermediate",
    language: "English",
    lastUpdated: "2024-07",

    module: [
        
    
            {
              id: 1,
              title: "Introduction to AWS Bedrock and Generative AI",
              description: "Understand the fundamental concepts of generative AI and Amazon Bedrock's role in scalable AI application development.",
              content: [
                "Introduction to Generative AI and Bedrock",
                "Difference between ChatGPT and Google AI",
                "Bedrock vs Other AI Models",
                "Use Cases of AWS Bedrock",
                "Large Language Models (LLMs) Overview"
              ]
            },
            {
              id: 2,
              title: "Setting Up AWS Bedrock and Accessing Models",
              description: "Hands-on setup of Bedrock, model access using Anthropic Claude 3, Python, and AWS CLI.",
              content: [
                "Accessing Bedrock Models",
                "Bedrock Console Overview",
                "Setting up AWS Bedrock via Boto3",
                "Using Python for Bedrock Integration",
                "Bedrock Runtime Services and JSON Module",
                "Inference Parameters and Their Role"
              ]
            },
            {
              id: 3,
              title: "Advanced Model Configuration and Orchestration",
              description: "Explore agent orchestration, RAG implementations, and secure AI infrastructure with AWS services.",
              content: [
                "Orchestration with Agents",
                "RAG Concepts and Implementation",
                "Embeddings Models and Their Importance",
                "Using S3 and OpenSearch for Data Management",
                "Creating Tokens and Vector Database",
                "IAM User Creation for Security Management"
              ]
            },
            {
              id: 4,
              title: "Building and Deploying Agents",
              description: "Build agents integrated with Lambda and securely deploy them using ARN and API schemas.",
              content: [
                "Agent Setup and Action Groups",
                "Lambda Integration with Agent",
                "API Schema and Endpoint Setup",
                "API Calls and Parameters for Agent Deployment",
                "Working with ARN IDs for Secure Deployments"
              ]
            },
            {
              id: 5,
              title: "Deploying AI in Real-World Applications",
              description: "Deploy and optimize generative AI solutions in production using AWS Bedrock and related services.",
              content: [
                "Building Generative AI Applications",
                "Model Fine-tuning and Evaluation",
                "Deploying to Production with AWS Services",
                "Troubleshooting and Optimizing AI Models"
              ]
            }
    
          
              
              
    ],

    highlights: [
        { number: "5", description: "Hands-On Modules" },
        { number: "8+", description: " Hours" },
        { number: "2", description: "Capstone Projects" }
    ],

    certificateImage: "/assets/certificate/Generative Al with AWS Bedrock Training.jpg",

    project: [
        {
            icon: "/assets/icons/cicd.svg",
            title: "Multi-Stage CI/CD Pipeline",
            description: "Build a secure pipeline with CodeBuild and CodeDeploy",
            skills: ["CodePipeline", "IAM Roles", "Canary Testing"]
        },
        {
            icon: "/assets/icons/terraform.svg",
            title: "Infrastructure Automation",
            description: "Provision a VPC with Terraform modules",
            skills: ["Terraform", "Modules", "DRY Principles"]
        },
        {
            icon: "/assets/icons/kubernetes.svg",
            title: "EKS Cluster with GitOps",
            description: "Deploy apps using ArgoCD on EKS",
            skills: ["Kubernetes", "GitOps", "Helm Charts"]
        }
    ],

    programFor: [
        // { src: "/assets/cources/courseDetails/shell-scripting/DevOps Engineers.jpg", alt: "DevOps Engineers", text: "Digital Marketers" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "Startup Founders –", text: "Data Scientists" },
        { src: "/assets/cources/courseDetails/mongodb/System Administrators.jpg", alt: "System Administrators", text: "System Administrators" },
        { src: "/assets/cources/courseDetails/terraform/Infrastructure Engineers.jpg", alt: "Solopreneurs ", text: "AI/ML Engineers" },
        { src: "/assets/cources/courseDetails/terraform/Software Developers.jpg", alt: "Software Developers", text: "Software Developers" },
        { src: "/assets/cources/courseDetails/terraform/Site Reliability Engineers (SRE).jpg", alt: "Product Managers ", text: "Students & Researchers " },
        { src: "/assets/cources/courseDetails/terraform/Technical Co-Founders.jpg", alt: "Technical Managers", text: "Data Analytics Specialist" },
        { src: "/assets/cources/courseDetails/shell-scripting/Cloud Administrators.jpg", alt: "Cloud Architects", text: "Cloud Architects" },
        { src: "/assets/cources/courseDetails/terraform/IT Professionals seeking to enhance their DevOps skills.png", alt: "Working IT Professionals", text: "Tech Entrepreneurs" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "College Students", text: "DevOps Professionals" }
    ],

    toolsData: {
        sectionTitle: "AWS Bedrock Training",
        category: "",
        toolsCount: " ",
        displayImage: "/assets/tools1/8.png",
        tools: [
            
                {
                  id: "bedrock-console",
                  icon: "TrendingUp",
                  title: "AWS Bedrock Console: Manage AI models in one place."
                },
                {
                  id: "foundation-models",
                  icon: "BarChart",
                  title: "Foundation Models: Work with AI models from AI21 Labs, Anthropic, Cohere, Meta."
                },
                {
                  id: "boto3-cli",
                  icon: "Cpu",
                  title: "Boto3 & AWS CLI: Programmatically manage AWS services."
                },
                {
                  id: "vector-rag",
                  icon: "TrendingUp",
                  title: "Vector Databases & Embeddings: Handle vector embeddings for AI models."
                },
                {
                  id: "rag",
                  icon: "BarChart",
                  title: "RAG (Retrieval-Augmented Generation): Optimize models with RAG."
                },
                {
                  id: "lambda-api",
                  icon: "Cpu",
                  title: "Lambda & API: Use Lambda functions and API calls for integration."
                },
                {
                  id: "iam-roles",
                  icon: "TrendingUp",
                  title: "IAM & Roles: Secure management of roles and permissions."
                }
              
              
        ]
    },
    programBy: "Vimal Daga"
};