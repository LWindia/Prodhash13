import { Course } from "../../types/courses";

export const gitOpswithArgo: Course = {
    _id: "gitops-with-argo",
    title: "[B][R]GitOps with ArgoCD: Kubernetes Deployment Automation[/R][/B]",
    slug: "gitops-with-argo",
    rating: 4.7,
    totalRatings: 315,
    duration: "Intermediate",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    hours: "20+",
    price:  6500  ,
    originalPrice: 22000,
    enrolledStudents: 9500,
    category: "DevOps",
    shortDescription: "Learn GitOps principles with ArgoCD to automate Kubernetes deployments, manage app configurations, and implement continuous delivery.",
    paymentLink: "https://rzp.io/rzp/h3mCGsv",
    backgroundImage: "/assets/tools1/Argocd.png",

learningOutcomes: [
    "GitOps Fundamentals & Hands-On with Argo CD",
    "Real-World Kubernetes App Deployments using Git Repositories",
    "Application Syncing, Rollbacks & Multi-Environment Workflows",
    "Secure Secrets Management with RBAC & Vault Integrations",
    "Helm Charts, Kustomize, and Manifest Customization in GitOps",
    "Advanced Monitoring, Diffing & Debugging Techniques",
    "And much more…"
],

    features: [
"Real-World GitOps Projects to Boost Your DevOps Portfolio",

"1-Year Access to All Training Materials, Labs & Updates",

"Dedicated Technical Support for 90 Days",

"Premium DevOps + GitOps Community Membership"



    ],

    skills: [
        "ArgoCD & Argo Workflows",
        "Kubernetes manifests & Helm",
        "Kustomize for configuration management",
        "Git-based deployment workflows",
        "Rollbacks & progressive delivery",
        "Multi-cluster management"
    ],

    requirements: [
        "Basic Kubernetes knowledge",
        "Familiarity with Git",
        "Understanding of CI/CD concepts"
    ],

    level: "Intermediate",
    language: "English",
    lastUpdated: "2024-06",

    module: [
            {
                id: 1,
                title: "Introduction to GitOps & Argo CD",
                description: "Understand GitOps principles and how Argo CD enables declarative continuous delivery.",
                content: [
                    "GitOps Principles and Workflow",
                    "Introduction to Argo CD",
                    "Key Features of Argo CD",
                    "Argo CD vs Other CD Tools",
                    "Argo CD Architecture Overview"
                ]
            },
            {
                id: 2,
                title: "Setting Up Argo CD",
                description: "Install and configure Argo CD in your Kubernetes environment.",
                content: [
                    "Argo CD Installation",
                    "Access via CLI and Web UI",
                    "Connecting Git Repositories",
                    "Configuring Namespaces in Argo CD",
                    "RBAC Setup and SSO with Dex & OAuth2"
                ]
            },
            {
                id: 3,
                title: "Managing Applications in Argo CD",
                description: "Deploy, sync, and manage Kubernetes applications using Git.",
                content: [
                    "Creating Applications from Git",
                    "Application Manifest Structure",
                    "Sync Options: Manual vs Auto",
                    "Best Practices for Application Structure",
                    "Rollback Mechanisms"
                ]
            },
            {
                id: 4,
                title: "Continuous Delivery & Rollbacks",
                description: "Implement delivery workflows and rollback strategies with Argo CD.",
                content: [
                    "CD Across Dev, Staging, Prod",
                    "Multi-Cluster Deployments",
                    "Promotion Workflows",
                    "Rollback with Version History"
                ]
            },
            {
                id: 5,
                title: "Syncing, Diffing, and Monitoring",
                description: "Use Argo CD’s tools to ensure application health and consistency.",
                content: [
                    "Auto-Sync and Health Checks",
                    "Viewing Git vs Live State Differences",
                    "Drift Detection and Resolution",
                    "Monitoring via Web UI",
                    "Setting Up Alerts and Notifications"
                ]
            },
            {
                id: 6,
                title: "Application Security & Best Practices",
                description: "Secure your Argo CD environment and manage secrets effectively.",
                content: [
                    "Securing Argo CD Installation",
                    "RBAC with Kubernetes Integration",
                    "Multi-Tenant Access Control",
                    "Secret Management (Vault, SOPS, Kubernetes)"
                ]
            },
            {
                id: 7,
                title: "Argo CD Customizations & Extensions",
                description: "Extend Argo CD using Helm, Kustomize, and CI/CD integrations.",
                content: [
                    "Managing Helm Charts & Kustomize",
                    "Environment-Specific Parameters",
                    "Deploying CRDs via Argo CD",
                    "CI/CD Integrations (Jenkins, GitLab, Tekton)",
                    "Using Webhooks for Auto-Deployments"
                ]
            },
            {
                id: 8,
                title: "Troubleshooting & Debugging",
                description: "Diagnose and resolve common issues in Argo CD application delivery.",
                content: [
                    "Common Sync & Diff Issues",
                    "Application Health Status",
                    "Debugging via Logs & CLI",
                    "Best Practices for Debugging"
                ]
            }
       
        
    ],

    highlights: [
        { number: "10", description: "Comprehensive Modules" },
        { number: "18+", description: "Hands-on Labs" },
        { number: "3", description: "Capstone Projects" }
    ],

    certificateImage: "/assets/certificate/GitOps with Argo CD Training.jpg",

    project: [
        {
            icon: "/assets/icons/gitops.svg",
            title: "Multi-Environment Deployment",
            description: "Build a GitOps pipeline for dev, staging, and production",
            skills: ["ArgoCD", "Kustomize", "Environment Management"]
        },
        {
            icon: "/assets/icons/kubernetes.svg",
            title: "Microservices Deployment",
            description: "Deploy a complete microservices application using GitOps",
            skills: ["App-of-Apps", "Helm", "Service Mesh"]
        }
    ],

    programFor: [
        { src: "/assets/cources/programFor/programfor9.jpg", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "/assets/cources/programFor/programfor8.jpg", alt: "Platform Engineers", text: "Platform Engineers" },
        { src: "/assets/cources/programFor/programfor7.jpg", alt: "Site Reliability Engineers", text: "Site Reliability Engineers" },
        { src: "/assets/cources/programFor/programfor1.jpg", alt: "Cloud Architects", text: "Cloud Architects" },
        { src: "/assets/cources/programFor/programfor.jpg", alt: "Kubernetes Administrators", text: "Kubernetes Administrators" },
        { src: "/assets/cources/programFor/programfor5.jpg", alt: "Software Developers", text: "Software Developers" },
        { src: "/assets/cources/programFor/programfor4.jpg", alt: "IT Managers", text: "IT Managers" },
        { src: "/assets/cources/programFor/programfor3.jpg", alt: "Cloud Engineers", text: "Cloud Engineers" }
    ],

    toolsData: {
        sectionTitle: "GitOps Toolchain",
        category: "Continuous Deployment",
        toolsCount: "8+",
        displayImage: "/assets/tools1/2.png",
        tools: [
    
                {
                  id: "gitops",
                  icon: "TrendingUp",
                  title: "GitOps: Git-based declarative continuous delivery"
                },
                {
                  id: "application-management",
                  icon: "BarChart",
                  title: "Application Management: Sync Kubernetes apps from Git repositories"
                },
                {
                  id: "kubernetes",
                  icon: "Cpu",
                  title: "Kubernetes: Container orchestration integrated with Argo CD"
                },
                {
                  id: "helm-kustomize",
                  icon: "TrendingUp",
                  title: "Helm & Kustomize: Manage app deployments and configurations"
                },
                {
                  id: "sync-strategies",
                  icon: "BarChart",
                  title: "Sync Strategies: Auto or manual sync to Git state"
                },
                {
                  id: "rbac-secrets",
                  icon: "Cpu",
                  title: "RBAC & Secrets: Role-based access and secure secret management"
                },
                {
                  id: "multi-cluster",
                  icon: "TrendingUp",
                  title: "Multi-Cluster: Manage apps across multiple clusters"
                }
              
              
        ]
    },
    programBy: "Vimal Daga"
};