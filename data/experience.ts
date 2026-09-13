import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "MathCO",
    role: "Cloud Engineer II",
    period: "September 2026 — Present",
    location: "Bangalore, India",
    isCurrent: true,
    summary:
      "Designing, building, and maintaining secure and scalable cloud platforms — automating infrastructure, deployments, and monitoring so engineering teams ship reliably and the platform runs hands-free.",
    highlights: [
      "Design and implement cloud architectures on AWS and/or Azure — networking, storage, compute, and security.",
      "Automate infrastructure provisioning, configuration, and CI/CD pipelines with Infrastructure as Code.",
      "Containerize and orchestrate workloads with Docker and Kubernetes for scalable, resilient deployments.",
      "Build monitoring, alerting, and observability so issues are caught before they reach users.",
      "Partner with data and platform teams to keep environments secure, cost-efficient, and compliant.",
    ],
    tech: [
      "AWS",
      "Azure",
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "Bash",
      "Python",
    ],
  },
  {
    company: "Intenso Tech Solution Private Limited",
    role: "Data Engineer",
    period: "June 2023 — August 2026",
    location: "Bangalore, India",
    isCurrent: false,
    summary:
      "Designing and delivering enterprise data engineering solutions on Microsoft Azure — orchestrating ETL/ELT pipelines that process millions of records a day for the Customer Ticketing Trend System.",
    highlights: [
      "Built end-to-end ETL/ELT pipelines with Apache Airflow and Azure Data Factory, ingesting millions of records daily from APIs, databases, and SFTP sources.",
      "Processed and transformed data with Azure Databricks (PySpark) across Bronze, Silver, and Gold lakehouse layers.",
      "Developed analytics-ready data models in Azure Synapse Analytics for KPI reporting and trend analysis.",
      "Implemented incremental loading, schema validation, and monitoring frameworks, lifting pipeline reliability to 99.9%.",
      "Optimized Spark workloads and queries, improving processing efficiency by up to 20% and query performance by up to 25%.",
    ],
    tech: [
      "Python",
      "PySpark",
      "Apache Airflow",
      "Azure Data Factory",
      "Azure Data Lake Storage",
      "Azure Databricks",
      "Azure Synapse Analytics",
      "Azure SQL Database",
      "Azure Functions",
    ],
  },
  {
    company: "RacEnergy",
    role: "Data Engineer",
    period: "October 2021 — May 2023",
    location: "Hyderabad, India",
    isCurrent: false,
    summary:
      "Engineered a fully automated cloud data lake on AWS — unifying scattered sources into a governed, queryable platform that made analytics self-service and operations hands-free.",
    highlights: [
      "Designed and implemented a scalable, cost-effective data lake architecture on Amazon S3.",
      "Built ETL workflows with AWS Glue to ingest, transform, and catalog data from multiple sources.",
      "Enabled serverless analytics with Amazon Athena, allowing fast SQL queries directly over the data lake.",
      "Automated data validation, monitoring, and error-handling so pipelines ran reliably without manual intervention.",
    ],
    tech: [
      "Python",
      "SQL",
      "Pandas",
      "Amazon S3",
      "AWS Glue",
      "AWS Glue Data Catalog",
      "Amazon Athena",
    ],
  },
];