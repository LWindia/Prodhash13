import { Course } from "../../types/courses";

export const awsEksMastery: Course = {
    _id: "master-aws-eks",
    title: "[B][R]AWS EKS Mastery: Kubernetes in Production[/R][/B]",
    slug: "master-aws-eks",
    rating: 4.9,
    totalRatings: 342,
    duration: "Intermediate to Advanced",
    globalStatus: "AWS AUTHORIZED TRAINING PROGRAM",
    hours: "24+",
    price: 8999,
    originalPrice: 19999,
    enrolledStudents: 15600,
    category: "Cloud Computing",
    shortDescription: "Master production-grade Kubernetes on AWS with hands-on labs, real-world projects, and expert-led training for DevOps professionals.",
    paymentLink: "https://rzp.io/l/aws-eks-june2025",
    backgroundImage: "/assets/tools1/EKS.jpg",

    learningOutcomes: [
        "Design production-grade EKS clusters",
        "Implement CI/CD pipelines for Kubernetes",
        "Secure clusters with IAM and RBAC",
        "Auto-scale workloads efficiently",
        "Troubleshoot complex EKS deployments",
        "Integrate with AWS services (RDS, S3, CloudWatch)"
    ],

    features: [
        "Hands-on labs with real AWS infrastructure",
        "90-day post-training support",
        "AWS Community Partner Network access",
        "Exam voucher for AWS Certified Kubernetes"
    ],

    skills: [
        "Terraform for EKS provisioning",
        "Helm chart deployments",
        "Kubernetes networking (CNI, Ingress)",
        "Cluster autoscaling (Karpenter)",
        "Service mesh (Istio/App Mesh)",
        "Disaster recovery strategies"
    ],

    requirements: [
        "Basic Kubernetes concepts (pods, deployments, services)",
        "AWS fundamentals (EC2, IAM, VPC)",
        "CLI experience (kubectl, AWS CLI)"
    ],

    level: "Intermediate",
    language: "English",
    lastUpdated: "2024-06",

    module: [
        {
            id: 1,
            title: "AWS EKS Fundamentals",
            description: "Architecture, components, and AWS integration patterns",
            content: [
                "EKS control plane vs worker nodes",
                "Comparison with ECS, Fargate, and self-managed K8s",
                "AWS networking for Kubernetes (VPC CNI)",
                "IAM integration for cluster security"
            ]
        },
        {
            id: 2,
            title: "Cluster Provisioning",
            description: "Infrastructure as Code approaches for EKS",
            content: [
                "Terraform EKS module deep dive",
                "eksctl configurations for production",
                "Node groups vs managed node groups",
                "Bottlerocket OS optimization"
            ]
        },
        {
            id: 3,
            title: "Advanced Networking",
            description: "Implementing scalable network architectures",
            content: [
                "ALB/NLB Ingress controllers",
                "Calico network policies",
                "VPC peering for hybrid clouds",
                "Service mesh integration patterns"
            ]
        },
        {
            id: 4,
            title: "Security Hardening",
            description: "Defense-in-depth strategies for EKS",
            content: [
                "Pod identity with IAM Roles for Service Accounts",
                "Secrets management with AWS Secrets Manager",
                "Runtime security with Falco",
                "CIS benchmark compliance"
            ]
        },
        {
            id: 5,
            title: "CI/CD Pipelines",
            description: "GitOps workflows for Kubernetes",
            content: [
                "ArgoCD deployments on EKS",
                "CodePipeline integration patterns",
                "Canary deployments with Flagger",
                "Image scanning with ECR"
            ]
        },
        {
            id: 6,
            title: "Monitoring & Logging",
            description: "Observability at scale",
            content: [
                "Prometheus/Grafana on EKS",
                "CloudWatch Container Insights",
                "Distributed tracing with X-Ray",
                "Log aggregation with OpenSearch"
            ]
        },
        {
            id: 7,
            title: "Production Case Studies",
            description: "Real-world implementation patterns",
            content: [
                "Multi-tenant cluster strategies",
                "Disaster recovery with EKS across regions",
                "Cost optimization techniques",
                "Spot instance integration"
            ]
        }
    ],

    highlights: [
        { number: "7", description: "Intensive Modules" },
        { number: "15+", description: "Hands-on Labs" },
        { number: "4", description: "Real-World Projects" }
    ],

    certificateImage: "/assets/tools1/AWSEKS.jpg",

    project: [
        {
            icon: "/assets/icons/kubernetes.svg",
            title: "Auto-scaling Microservice Platform",
            description: "Deploy a fault-tolerant application with HPA and Karpenter",
            skills: ["Karpenter", "Horizontal Pod Autoscaler", "Custom Metrics"]
        },
        {
            icon: "/assets/icons/istio.svg",
            title: "Service Mesh Implementation",
            description: "Configure Istio for canary deployments and traffic management",
            skills: ["Istio", "Canary Releases", "mTLS"]
        },
        {
            icon: "/assets/icons/argo.svg",
            title: "GitOps Pipeline",
            description: "Build CI/CD with ArgoCD and GitHub Actions",
            skills: ["ArgoCD", "GitOps", "Self-Healing Deployments"]
        }
    ],

    programFor: [
        { src: "/assets/cources/courseDetails/shell-scripting/DevOps Engineers.jpg", alt: "DevOps Engineers", text: "Digital Marketers" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "Startup Founders –", text: "Startup Founders" },
        { src: "/assets/cources/courseDetails/mongodb/System Administrators.jpg", alt: "System Administrators", text: "System Administrators" },
        { src: "/assets/cources/courseDetails/terraform/Infrastructure Engineers.jpg", alt: "Solopreneurs ", text: "Solopreneurs " },
        { src: "/assets/cources/courseDetails/terraform/Software Developers.jpg", alt: "Software Developers", text: "Software Developers" },
        { src: "/assets/cources/courseDetails/terraform/Site Reliability Engineers (SRE).jpg", alt: "Product Managers ", text: "Product Managers " },
        { src: "/assets/cources/courseDetails/terraform/Technical Co-Founders.jpg", alt: "Technical Managers", text: "Data Analytics Specialist" },
        { src: "/assets/cources/courseDetails/shell-scripting/Cloud Administrators.jpg", alt: "Cloud Architects", text: "Artificial Intelligence Consultant" },
        { src: "/assets/cources/courseDetails/terraform/IT Professionals seeking to enhance their DevOps skills.png", alt: "Working IT Professionals", text: "Working IT Professionals" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "College Students", text: "Natural Language Engineer" }
    ],

    toolsData: {
        sectionTitle: "AWS EKS Professional Program",
        category: "Production-Grade Kubernetes on AWS",
        toolsCount: "15+",
        displayImage: "/assets/tools1/AWS EKS Professional Program.png",
        tools: [
            {
                id: "eksctl",
                icon: "TrendingUp",
                title: "Cluster creation with eksctl"
            },
            {
                id: "terraform",
                icon: "Cpu",
                title: "Infrastructure as Code with Terraform"
            },
            {
                id: "helm",
                icon: "BarChart",
                title: "Application packaging with Helm"
            },
            {
                id: "karpenter",
                icon: "Shield",
                title: "Cost-efficient scaling with Karpenter"
            },
            {
                id: "istio",
                icon: "Network",
                title: "Service mesh implementation"
            }
        ]
    },
    programBy: "Vimal Daga"
};