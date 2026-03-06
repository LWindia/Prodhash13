// src/data/menuData.tsx
import { specialisationInMongoDB } from '../courses/specialisation-in-mongodb';
import { specialisationInAnsible } from '../courses/specialisation-in-ansible';
import { MenuKey, MenuData } from '../../types/Navbar';

export const menuData: Record<MenuKey, MenuData> = {
  workingProfessionals: {
    categories: {
      DevOps: {
        mentorshipPrograms: [
          {
            title: "Specialisation in DevOps",
            mentor: "by Vimal Daga",
            duration: "310 Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:"/courses/specialisation-in-devops"
          },
          {
            title: "Mastering Prometheus & Grafana",
            mentor: "by Vimal Daga",
            duration: "16+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/grafana/promethes-and-grafana.jpg",
            slug:"/courses/specialisation-in-prometheus-grafana"
          },
          {
            title: "Docker Certified Associate",
            mentor: "by Vimal Daga",
            duration: "20+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:"/courses/docker-certified-associate-2024"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Bash Shell Scripting",
            mentor: "by Vimal Daga",
            duration: "16+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/shell-scripting/shell-scripting.jpg",
            slug:"/courses/specialisation-in-shell-scripting"
          },
          {
            title: "CI/CD Pipeline with Jenkins",
            mentor: "by Vimal Daga",
            duration: "30+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/jenkkins/jenkins.jpg",
            slug:"/courses/specialisation-in-jenkins"
          },
          {
            title: "Automation with Ansible",
            mentor: `by ${specialisationInAnsible.programBy}`,
            duration: specialisationInAnsible.hours,
            status: "Active",
            type: "Recorded",
            image:specialisationInAnsible.backgroundImage,
            slug:`/courses/${specialisationInAnsible.slug}`
          }
        ]
      },
      Programming: {
        mentorshipPrograms: [
          {
            title: "Java Core Programming",
            mentor: "by Vimal Daga",
            duration: "20+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/java/java.jpg",
            slug:"/courses/specialisation-in-java"
          },
          {
            title: "Bash Shell Scripting",
            mentor: "by Vimal Sir",
            duration: "16+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/shell-scripting/shell-scripting.jpg",
            slug:"/courses/specialisation-in-shell-scripting"
          },
       
        ],
        selfPacedPrograms: [
          // {
          //   title: "Kubernetes Basics",
          //   mentor: "by Bruce Banner",
          //   duration: "Self-paced",
          //   status: "Available Now",
          //   type: "Recorded",
          //   image:"/assets/cources/courseDetails/Hero.jpeg",
          //   slug:""
          // },
          // {
          //   title: "AWS Fundamentals",
          //   mentor: "by Clark Kent",
          //   duration: "Self-paced",
          //   status: "Available Now",
          //   type: "Recorded",
          //   image:"/assets/cources/courseDetails/Hero.jpeg",
          //   slug:""
          // }
        ]
      },
      Databases: {
        mentorshipPrograms: [
          {
            title: "MongoDB Basic to Advance",
            mentor: "by Vimal Daga",
            duration: "16+ Hours",
            status: "Active",
            type: "Recorded",
            image: specialisationInMongoDB.backgroundImage,
            slug:"/courses/specialisation-in-mongodb"
          },
        
        ],
        selfPacedPrograms: [
          // {
          //   title: "Goal Setting",
          //   mentor: "by Natasha Romanoff",
          //   duration: "Self-paced",
          //   status: "Available Now",
          //   type: "Recorded",
          //   image:"/assets/cources/courseDetails/Hero.jpeg",
          //   slug:""
          // },
          // {
          //   title: "Time Management",
          //   mentor: "by Steve Rogers",
          //   duration: "Self-paced",
          //   status: "Available Now",
          //   type: "Recorded",
          //   image:"/assets/cources/courseDetails/Hero.jpeg",
          //   slug:""
          // }
        ]
      },
      Monitoring: {
        mentorshipPrograms: [
          {
            title: "Mastering Prometheus & Grafana",
            mentor: "by Vimal Daga",
            duration: "16+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/grafana/promethes-and-grafana.jpg",
            slug:"/courses/specialisation-in-prometheus-grafana"
          },
          {
            title: "Complete Splunk Administration",
            mentor: "by Vimal Daga",
            duration: "16+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/splunk/splunk.jpg",
            slug:"/courses/specialisation-in-splunk"
          }
        ],
        selfPacedPrograms: [
          // {
          //   title: "Adobe Creative Suite",
          //   mentor: "by Mary Jane",
          //   duration: "Self-paced",
          //   status: "Available Now",
          //   type: "Recorded",
          //   image:"/assets/cources/courseDetails/Hero.jpeg",
          //   slug:""
          // },
          // {
          //   title: "Design Principles",
          //   mentor: "by Wade Wilson",
          //   duration: "Self-paced",
          //   status: "Available Now",
          //   type: "Recorded",
          //   image:"/assets/cources/courseDetails/Hero.jpeg",
          //   slug:""
          // }
        ]
      },

    }
  },
  collegeStudents: {
    categories: {
      DevOps: {
        mentorshipPrograms: [
          {
            title: "Specialisation in DevOps",
            mentor: "by Vimal Daga",
            duration: "310 Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:"/courses/specialisation-in-devops"
          },
          {
            title: "Mastering Prometheus & Grafana",
            mentor: "by Vimal Daga",
            duration: "16+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/grafana/promethes-and-grafana.jpg",
            slug:"/courses/specialisation-in-prometheus-grafana"
          },
          {
            title: "Docker Certified Associate",
            mentor: "by Vimal Daga",
            duration: "20+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:"/courses/docker-certified-associate-2024"
          }
        ],
        selfPacedPrograms: [
          {
            title: "Bash Shell Scripting",
            mentor: "by Vimal Daga",
            duration: "16+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/shell-scripting/shell-scripting.jpg",
            slug:"/courses/specialisation-in-shell-scripting"
          },
          {
            title: "CI/CD Pipeline with Jenkins",
            mentor: "by Vimal Daga",
            duration: "30+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/jenkkins/jenkins.jpg",
            slug:"/courses/specialisation-in-jenkins"
          }
        ]
      },
      Programming: {
        mentorshipPrograms: [
          {
            title: "Java Core Programming",
            mentor: "by Vimal Daga",
            duration: "20+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/java/java.jpg",
            slug:"/courses/specialisation-in-java"
          },
          {
            title: "Bash Shell Scripting",
            mentor: "by Vimal Sir",
            duration: "16+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/shell-scripting/shell-scripting.jpg",
            slug:"/courses/specialisation-in-shell-scripting"
          },
       
        ],
        selfPacedPrograms: [
          // {
          //   title: "Kubernetes Basics",
          //   mentor: "by Bruce Banner",
          //   duration: "Self-paced",
          //   status: "Available Now",
          //   type: "Recorded",
          //   image:"/assets/cources/courseDetails/Hero.jpeg",
          //   slug:""
          // },
          // {
          //   title: "AWS Fundamentals",
          //   mentor: "by Clark Kent",
          //   duration: "Self-paced",
          //   status: "Available Now",
          //   type: "Recorded",
          //   image:"/assets/cources/courseDetails/Hero.jpeg",
          //   slug:""
          // }
        ]
      },
      Databases: {
        mentorshipPrograms: [
          {
            title: "MongoDB Basic to Advance",
            mentor: "by Vimal Daga",
            duration: "16+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/mongodb/MongoDB.jpg",
            slug:"/courses/specialisation-in-mongodb"
          },
        
        ],
        selfPacedPrograms: [
          // {
          //   title: "Goal Setting",
          //   mentor: "by Natasha Romanoff",
          //   duration: "Self-paced",
          //   status: "Available Now",
          //   type: "Recorded",
          //   image:"/assets/cources/courseDetails/Hero.jpeg",
          //   slug:""
          // },
          // {
          //   title: "Time Management",
          //   mentor: "by Steve Rogers",
          //   duration: "Self-paced",
          //   status: "Available Now",
          //   type: "Recorded",
          //   image:"/assets/cources/courseDetails/Hero.jpeg",
          //   slug:""
          // }
        ]
      },
      Monitoring: {
        mentorshipPrograms: [
          {
            title: "Mastering Prometheus & Grafana",
            mentor: "by Vimal Daga",
            duration: "16+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/grafana/promethes-and-grafana.jpg",
            slug:"/courses/specialisation-in-prometheus-grafana"
          },
          {
            title: "Complete Splunk Administration",
            mentor: "by Vimal Daga",
            duration: "16+ Hours",
            status: "Active",
            type: "Recorded",
            image:"/assets/cources/courseDetails/splunk/splunk.jpg",
            slug:"/courses/specialisation-in-splunk"
          }
        ],
        selfPacedPrograms: [
          // {
          //   title: "Adobe Creative Suite",
          //   mentor: "by Mary Jane",
          //   duration: "Self-paced",
          //   status: "Available Now",
          //   type: "Recorded",
          //   image:"/assets/cources/courseDetails/Hero.jpeg",
          //   slug:""
          // },
          // {
          //   title: "Design Principles",
          //   mentor: "by Wade Wilson",
          //   duration: "Self-paced",
          //   status: "Available Now",
          //   type: "Recorded",
          //   image:"/assets/cources/courseDetails/Hero.jpeg",
          //   slug:""
          // }
        ]
      },

    }
  },
  more: {
    categories: {
      AI: {
        mentorshipPrograms: [
          {
            title: "AI Fundamentals",
            mentor: "by Chris Green",
            duration: "12 Weeks",
            status: "Coming Soon",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:""
          },
          {
            title: "Deep Learning",
            mentor: "by Vision",
            duration: "14 Weeks",
            status: "Available Now",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:""
          }
        ],
        selfPacedPrograms: [
          {
            title: "Machine Learning Basics",
            mentor: "by Tony Stark",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:""
          },
          {
            title: "Neural Networks",
            mentor: "by Bruce Banner",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:""
          }
        ]
      },
      Robotics: {
        mentorshipPrograms: [
          {
            title: "Robotics Engineering",
            mentor: "by Victor Stone",
            duration: "16 Weeks",
            status: "Coming Soon",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:""
          },
          {
            title: "Automation",
            mentor: "by Reed Richards",
            duration: "12 Weeks",
            status: "Available Now",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:""
          }
        ],
        selfPacedPrograms: [
          {
            title: "Arduino Programming",
            mentor: "by Diana Prince",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:""
          },
          {
            title: "Robotics Basics",
            mentor: "by Peter Quill",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:""
          }
        ]
      },
      Blockchain: {
        mentorshipPrograms: [
          {
            title: "Blockchain Fundamentals",
            mentor: "by Sarah White",
            duration: "10 Weeks",
            status: "Coming Soon",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:""
          },
          {
            title: "Smart Contracts",
            mentor: "by Stephen Strange",
            duration: "8 Weeks",
            status: "Available Now",
            type: "Live",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:""
          }
        ],
        selfPacedPrograms: [
          {
            title: "Cryptocurrency Basics",
            mentor: "by Clark Kent",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:""
          },
          {
            title: "Web3 Development",
            mentor: "by Matt Murdock",
            duration: "Self-paced",
            status: "Available Now",
            type: "Recorded",
            image:"/assets/cources/courseDetails/Hero.jpeg",
            slug:""
          }
        ]
      }
    }
  }
};