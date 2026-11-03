/**
 * Portfolio Data Configuration
 * Prem Kumar N – AWS & DevOps Engineer
 */

export const personalInfo = {
  name: "Prem Kumar N",
  title: "AWS & DevOps Engineer",
  tagline: "Building, automating, and managing secure, scalable, and reliable cloud infrastructure.",
  experienceYears: "3.5+",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91 9003098136",
  about: [
    "I am an AWS & DevOps Engineer with 3.5+ years of experience specializing in AWS cloud infrastructure, DevOps practices, Infrastructure as Code, and production support.",
    "My hands-on work focuses on provisioning cloud environments using Terraform, orchestrating containerized workloads on Kubernetes (EKS & ECS), and establishing automated CI/CD pipelines with Jenkins and GitHub Actions.",
    "Across client engagements including ABSA, FedEx, and Cigna, I maintain 99.9% production availability, streamline deployment cycles, enforce least-privilege cloud security, and drive operational efficiency.",
  ],
  stats: [
    { label: "3.5+ Years", detail: "Cloud & DevOps Experience" },
    { label: "40% Faster", detail: "CI/CD Release Cycles" },
    { label: "25% Reduced", detail: "Cloud Storage Expenditure" },
    { label: "99.9% Uptime", detail: "Production SLA Adherence" },
  ],
};

export const socialLinks = {
  email: "Premkumar.career163@gmail.com",
  phone: "+91 9003098136",
  linkedin: "https://www.linkedin.com/in/prem-kumar-5abba9321",
  github: "https://github.com/Premkumar-max",
  resumeUrl: "/Premkumar_Resume_CloudEngineer.pdf",
};

/**
 * Skills organized cleanly into the required 6 categories.
 * No percentage or progress bars.
 */
export const skillCategories = [
  {
    id: "cloud",
    title: "Cloud",
    skills: ["AWS"],
  },
  {
    id: "containers",
    title: "Containers & Orchestration",
    skills: ["Kubernetes", "EKS", "ECS", "Docker"],
  },
  {
    id: "iac",
    title: "Infrastructure as Code",
    skills: ["Terraform"],
  },
  {
    id: "cicd",
    title: "CI/CD",
    skills: ["Jenkins", "GitHub Actions", "AWS CodePipeline"],
  },
  {
    id: "aws",
    title: "AWS Services",
    skills: [
      "EC2",
      "S3",
      "IAM",
      "RDS",
      "Route 53",
      "Lambda",
      "ECR",
      "KMS",
      "CloudWatch",
      "Systems Manager",
      "CloudFront",
    ],
  },
  {
    id: "tools",
    title: "Tools & OS",
    skills: ["Git", "GitHub", "Linux"],
  },
];

export const experience = [
  {
    id: 1,
    role: "AWS & DevOps Engineer",
    company: "L&T",
    client: "Client: ABSA – AWS Cloud & DevOps Operations",
    duration: "07/2025 – Present",
    period: "Current",
    location: "Chennai, India",
    responsibilities: [
      "Managed real-time enterprise AWS cloud infrastructure requests and L2/L3 production support via Jira ticketing workflows.",
      "Diagnosed and resolved GoCD CI/CD pipeline build and deployment failures to ensure reliable application releases.",
      "Implemented Amazon ECS task monitoring and CloudWatch alarms for proactive incident detection and service stability.",
      "Executed automated AWS account decommissioning by validating live dependencies and performing controlled resource cleanup.",
      "Investigated AWS CloudTrail audit logs to trace IAM permission activities and maintain strict cloud security compliance.",
      "Standardized infrastructure provisioning and environment configurations using Terraform Infrastructure as Code.",
      "Coordinated operational readiness activities, dependencies, and environment health checks before deployment.",
    ],
    technologies: ["AWS", "ECS", "Terraform", "CloudWatch", "CloudTrail", "IAM", "GoCD", "Docker", "Linux"],
  },
  {
    id: 2,
    role: "AWS & DevOps Engineer",
    company: "Cognizant",
    client: "Client: FEDEX – AWS Cloud & CI/CD Automation",
    duration: "10/2022 – 06/2024",
    period: "1 yr 9 mos",
    location: "Chennai, India",
    responsibilities: [
      "Provisioned scalable multi-AZ AWS infrastructure using modular Terraform Infrastructure as Code (IaC).",
      "Automated end-to-end Jenkins CI/CD delivery pipelines, reducing software deployment cycle times by 40%.",
      "Deployed and operated containerized applications on Docker and managed Kubernetes clusters via Amazon EKS.",
      "Implemented blue-green and zero-downtime deployment strategies to maintain continuous application availability.",
      "Configured VPC networking, Site-to-Site VPN, VPC Peering, and IAM least-privilege security controls.",
      "Optimized enterprise storage costs by 25% by configuring automated Amazon S3 lifecycle and Glacier transition rules.",
      "Supported on-premises to AWS cloud migration initiatives, accelerating project delivery schedules by 20%.",
      "Set up CloudWatch dashboards, metric filters, and proactive alerting for real-time infrastructure visibility.",
    ],
    technologies: ["AWS", "Terraform", "Kubernetes", "EKS", "Docker", "Jenkins", "VPC", "IAM", "S3", "CloudWatch"],
  },
  {
    id: 3,
    role: "AWS & DevOps Engineer",
    company: "Cognizant",
    client: "Client: CIGNA – Linux Administration & AWS",
    duration: "08/2024 – 12/2024",
    period: "5 mos",
    location: "Chennai, India",
    responsibilities: [
      "Administered enterprise Linux servers (RHEL/CentOS) and AWS cloud compute workloads adhering to 99.9% uptime SLAs.",
      "Managed Kubernetes container workloads, cluster scaling, and application deployment release windows.",
      "Established centralized logging architectures using Fluentd and Splunk for audit compliance and rapid troubleshooting.",
      "Configured and hardened Nginx and Apache web servers, SSL/TLS certificates, and load balancing rules.",
      "Conducted backup verification and disaster recovery readiness procedures to safeguard business operations.",
      "Investigated critical production incidents, delivering fast resolution and root cause analysis.",
    ],
    technologies: ["Linux (RHEL)", "AWS", "Kubernetes", "Nginx", "Apache", "Splunk", "Fluentd"],
  },
];

export const projects = [
  {
    id: "eks-terraform-platform",
    title: "Production Amazon EKS Platform with Terraform IaC",
    overview: "Multi-AZ Kubernetes container platform provisioned via modular Terraform for automated scaling and zero-downtime releases.",
    objective: "Eliminate manual cloud provisioning and build a repeatable, highly available container infrastructure supporting microservice workloads.",
    contribution: [
      "Authored modular Terraform configurations provisioning VPC networking, private subnets, NAT gateways, and EKS managed node groups.",
      "Configured IAM Roles for Service Accounts (IRSA) and Kubernetes RBAC for least-privilege security.",
      "Implemented Horizontal Pod Autoscaler (HPA) and AWS Application Load Balancer (ALB) ingress controller for zero-downtime rollouts.",
    ],
    technologies: ["AWS", "Amazon EKS", "Terraform", "Docker", "Kubernetes", "IAM (IRSA)", "CloudWatch"],
    architecture: "Multi-AZ AWS VPC topology with public/private subnets, EKS Cluster, ALB Ingress Controller, and S3/DynamoDB remote state backend.",
    githubUrl: "https://github.com/Premkumar-max",
  },
  {
    id: "cicd-account-decommissioning",
    title: "Automated CI/CD Delivery & Cloud Account Decommissioning",
    overview: "End-to-end automated pipeline integrating build, test, container packaging, and automated cloud resource cleanup.",
    objective: "Streamline multi-environment deployments while automating cleanup of orphaned cloud infrastructure to control costs.",
    contribution: [
      "Engineered automated CI/CD delivery pipelines in Jenkins and GoCD with automated rollback triggers upon health check failure.",
      "Built automated decommissioning workflows to identify, validate, and safely tear down stale AWS resources.",
      "Configured Amazon ECR vulnerability scanning and automated container deployments to Amazon ECS.",
    ],
    technologies: ["Jenkins", "GoCD", "Amazon ECS", "ECR", "Terraform", "CloudTrail", "CloudWatch", "Docker"],
    architecture: "Git commit trigger → CI/CD pipeline → ECR container scan → ECS rolling deployment → Automated verification & CloudWatch telemetry.",
    githubUrl: "https://github.com/Premkumar-max",
  },
  {
    id: "cloud-observability-telemetry",
    title: "Centralized Cloud Observability & Proactive Alerting",
    overview: "Unified monitoring and alerting infrastructure enabling proactive detection and rapid incident triage across AWS workloads.",
    objective: "Establish comprehensive operational visibility across distributed services to reduce MTTR and uphold 99.9% uptime SLAs.",
    contribution: [
      "Configured custom CloudWatch metric alarms for ECS task health, CPU/memory thresholds, and load balancer error rates.",
      "Aggregated application and system logs using Fluentd and Splunk for centralized search and audit retention.",
      "Configured SNS notification pipelines to route prioritized alerts to engineering support channels.",
    ],
    technologies: ["AWS CloudWatch", "SNS", "ECS", "Fluentd", "Splunk", "Linux"],
    architecture: "CloudWatch Container Insights + Fluentd daemon → Centralized Splunk aggregation + SNS incident alerting.",
    githubUrl: "https://github.com/Premkumar-max",
  },
  {
    id: "hybrid-cloud-s3-tiering",
    title: "Secure Hybrid Networking & Cost-Optimized S3 Architecture",
    overview: "Enterprise hybrid cloud connectivity combined with automated S3 lifecycle tiering for long-term data archiving.",
    objective: "Establish secure network connectivity between corporate facilities and AWS while lowering cloud storage expenditure.",
    contribution: [
      "Configured dual-tunnel AWS Site-to-Site VPN and inter-VPC peering connections with non-overlapping IP schemes.",
      "Designed and implemented S3 lifecycle rules transitioning cold data to Glacier, cutting recurring storage costs by 25%.",
      "Applied AWS KMS customer-managed key encryption and strict bucket policies for data security.",
    ],
    technologies: ["AWS VPC", "Site-to-Site VPN", "VPC Peering", "Amazon S3", "AWS KMS", "Route 53", "Terraform"],
    architecture: "Hub-and-spoke VPC topology connected to on-premises via IPsec VPN tunnel with automated S3 Standard-to-Glacier lifecycle rules.",
    githubUrl: "https://github.com/Premkumar-max",
  },
];
