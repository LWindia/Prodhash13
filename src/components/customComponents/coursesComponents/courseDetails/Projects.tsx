"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import dockerLogo from "../../../../../public/assets/Projects/Azure-&-GCP-Cloud.png"
import Image from "next/image";


const projectData = [
  {
    icon: "/assets/Projects/Setting-up-a-Multi-Tier-Application-in-Containers.png",
    title: "Setting up a Multi-Tier Application in Containers",
    description:
      "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
    skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
  },
  {
    icon: "/assets/Projects/Integrating-Docker-files-with-Docker-Compose.png",
    title: "Integrating Docker files with Docker Compose",
    description:
      "Create Dockerfiles for different application components. Using Docker Compose to manage multi-container Docker applications.",
    skills: ["Docker", "Docker Compose", "Microservices", "Networking", "Container Management"],
  },
  {
    icon: "/assets/Projects/Integrating-Kubernetes-with-Docker.png",
    title: "Integrating Kubernetes with Docker",
    description:
      "Deploying containerized applications using Kubernetes. Use Kubernetes to manage container orchestration and scaling.",
    skills: ["Kubernetes", "Container Orchestration", "Docker", "Scaling", "Cluster Management"],
  },
  {
    icon: "/assets/Projects/Configuring-Jenkins-Master-Slave-Architecture-in-Docker.png",
    title: "Configuring Jenkins Master-Slave Architecture in Docker",
    description:
      "Setting up Jenkins master and slave nodes in Docker containers. Implementing distributed builds using Jenkins agents.",
    skills: ["Jenkins", "Docker", "Distributed Builds", "CI/CD", "Automation"],
  },
  {
    icon: "/assets/Projects/Integrating-Prometheus-with-Grafana.png",
    title: "Integrating Prometheus with Grafana",
    description:
      "Setting up Prometheus for monitoring application metrics. Visualize metrics with Grafana dashboards.",
    skills: ["Prometheus", "Grafana", "Monitoring", "Visualization", "Metrics Management"],
  },
  {
    icon: "/assets/Projects/Integrating-GitLab-with-Kubernetes.png",
    title: "Integrating GitLab with Kubernetes",
    description:
      "Using GitLab CI/CD for continuous integration and deployment. Deploying applications to Kubernetes clusters from GitLab.",
    skills: ["GitLab", "CI/CD", "Kubernetes", "DevOps", "Automation"],
  },
  {
    icon: "/assets/Projects/terraform.png",
    title: "Infrastructure as Code (IaC)",
    description:
      "Using Terraform to define and provision infrastructure. Managing infrastructure changes through version control.",
    skills: ["Terraform", "Infrastructure as Code", "Version Control", "Cloud Infrastructure", "Automation"],
  },
  {
    icon: "/assets/Projects/Building-a-CICD-Pipeline.png",
    title: "Building a CI/CD Pipeline",
    description:
      "Implementing a continuous integration and deployment pipeline using Jenkins or GitLab CI. Automating testing, building, and deployment processes.",
    skills: ["CI/CD", "Jenkins", "GitLab", "Automation", "Testing"],
  },
  {
    icon: "/assets/Projects/AWS-DevOps-Services.png",
    title: "AWS DevOps Services",
    description:
      "Master AWS DevOps: CI/CD pipelines, IaC, serverless, monitoring, containerization, security, and cost optimization.",
    skills: ["CDK", "EKS", "CloudWatch", "CloudTrail", "Beanstalk","Fargate","IAM"],
  },
  {
    icon: "/assets/Projects/Azure-&-GCP-Cloud.png",
    title: "Azure & GCP Cloud",
    description:
      "Master Azure and GCP: compute, storage, networking, security, serverless, and hands-on cloud platform comparisons.",
    skills: ["GCP", "GKE", "AAD", "CosmosDB", "VNet","CosmosDB","RBAC"],
  },

  {
    icon: "/assets/Projects/gitlab (1).png",
    title: "Gitlab ",
    description:
      "Master GitLab DevOps: CI/CD pipelines, automation, GitOps, IaC, security, scaling, and high-availability setups..",
    skills: ["Git", "workflows", "conflicts", "GitHub", "Bitbucket","merging "],
  },

  {
    icon: "/assets/Projects/shell.png",
    title: "Shell Scripting",
    description:
      "Master Shell Scripting: automation, APIs, debugging, CI/CD tasks, cloud resources, and performance optimization.",
    skills: ["Bash", "Zsh", "Fish", "stderr","CI/CD"],
  },
];
export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(0);
  console.log(dockerLogo)
  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50" id="projects">
      <div className="w-full max-w-6xl mx-auto p-6 md:px-8 px-2 lg:px-8">
        <div className="space-y-6">
          <div className="max-w-6xl  mx-auto">
            <h2 className="text-sm font-semibold text-gray-700 mb-2 text-center">
              Capstone Projects
            </h2>
            <div className="flex justify-center text-center gap-2 mt-2">
              <h2 className="text-black px-2 py-1 text-3xl font-bold text-center">
                Learn by Doing : <span className="text-[#ff0000] font-bold text-center">20+ Industry Level Projects </span>
              </h2>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Regular project cards */}
              {projectData.slice(0, -1).map((project, index) => {
                const isExpanded = expanded === index;
                const visibleSkills = isExpanded
                  ? project.skills
                  : project.skills.slice(0, 3);
                const showMore = project.skills.length > 3 && !isExpanded;

                return (
                  <Card
                    key={index}
                    className="border-t-0 border-r-1 border-b-1 border-l-1 border-gray-100 overflow-hidden transform transition-transform duration-300 hover:scale-105"
                  >
                    <CardHeader>
                      <div className="w-36 h-16 bg-white rounded-lg flex items-center justify-center mb-2">
                        <Image 
                          alt="icon" 
                          src={project.icon.toString()}
                          width={144}
                          height={64}
                        />
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Skills learned</p>
                        <div className="flex flex-wrap gap-2">
                          {visibleSkills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-zinc-100 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                          {showMore && (
                            <button
                              onClick={() => setExpanded(index)}
                              className="px-3 py-1 bg-zinc-100 rounded-full text-sm text-blue-500"
                            >
                              + More
                            </button>
                          )}
                          {isExpanded && (
                            <button
                              onClick={() => setExpanded(null)}
                              className="px-3 py-1 bg-zinc-100 rounded-full text-sm text-red-500"
                            >
                              Show Less
                            </button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* "Many More" card */}
              <Card className="border-t-0 border-r-1 border-b-1 border-l-1 border-gray-100 overflow-hidden transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-center text-[#ff0000]">And Many More...</h3>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}