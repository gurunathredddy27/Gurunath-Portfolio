import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "customer-ticketing-trend",
    index: "01",
    title: "Customer Ticketing Trend System",
    tagline: "Enterprise lakehouse for ticketing analytics on Azure",
    role: "Data Engineer",
    company: "Intenso Tech Solution Private Limited",
    description:
      "Designed and delivered an end-to-end Azure data pipeline that ingests millions of ticketing records daily from APIs, databases, and SFTP — transforms them with PySpark into a governed Bronze → Silver → Gold lakehouse, and serves KPI-ready models to Azure SQL Database and Azure Synapse Analytics for trend and performance reporting.",
    tech: [
      "Python",
      "PySpark",
      "Apache Airflow",
      "Azure Data Factory",
      "Azure Data Lake Storage",
      "Azure Databricks",
      "Azure SQL Database",
      "Azure Synapse Analytics",
      "Azure Functions",
    ],
    responsibilities: [
      "Built and orchestrated data pipelines with Apache Airflow and Azure Data Factory.",
      "Ingested data from APIs, relational databases, and SFTP sources with incremental loading.",
      "Processed and transformed raw data with Azure Databricks (PySpark) into Bronze, Silver, and Gold layers.",
      "Developed analytics-ready data models in Azure Synapse Analytics powering KPI dashboards.",
      "Enforced schema validation, data quality checks, and monitoring to guarantee accurate delivery.",
    ],
    achievements: [
      "Automated 50+ data workflows sustaining 99.9% pipeline reliability.",
      "Reduced pipeline processing time up to 20% via optimized Spark workloads and clustering.",
      "Improved query performance up to 25% through data modeling and performance tuning.",
    ],
    architecture: [
      {
        label: "Sources",
        description: "Raw ticketing events from REST APIs, relational databases, and SFTP file drops.",
        tech: ["APIs", "Databases", "SFTP"],
      },
      {
        label: "Ingestion",
        description: "Scheduled, incrementally-loaded ingestion orchestrated end to end.",
        tech: ["Apache Airflow", "Azure Data Factory"],
      },
      {
        label: "Storage",
        description: "Central landing zone holding raw and curated data at scale.",
        tech: ["Azure Data Lake Storage"],
      },
      {
        label: "Bronze Layer",
        description: "Raw, immutable copy of ingested ticketing data.",
        tech: ["Azure Databricks · PySpark"],
      },
      {
        label: "Silver Layer",
        description: "Cleansed, validated, deduplicated conformed datasets.",
        tech: ["PySpark ETL", "Data Validation"],
      },
      {
        label: "Gold Layer",
        description: "Business-level aggregations and KPI-ready models.",
        tech: ["Synapse SQL", "Data Modelling"],
      },
      {
        label: "Serving",
        description: "Reporting and analytics over hosted relational warehouse.",
        tech: ["Azure SQL Database", "Azure Synapse Analytics"],
      },
    ],
    accent: "from-emerald-400/25 via-emerald-600/15 to-transparent",
  },
  {
    id: "data-lake-automation",
    index: "02",
    title: "Data Lake Automation with Python & AWS",
    tagline: "Self-serve cloud analytics on a fully automated lake",
    role: "Data Engineer",
    company: "RacEnergy",
    description:
      "Built an automated data lake on AWS that ingests multi-source data with Python, lands it cost-effectively on Amazon S3, transforms and catalogs it with AWS Glue, and unlocks serverless analytics through Amazon Athena — making data self-service and operations hands-free.",
    tech: [
      "Python",
      "SQL",
      "Pandas",
      "Amazon S3",
      "AWS Glue",
      "AWS Glue Data Catalog",
      "Amazon Athena",
    ],
    responsibilities: [
      "Designed and implemented a scalable, cost-effective data lake architecture on Amazon S3.",
      "Built ETL workflows with AWS Glue to ingest, transform, and catalog data from multiple sources.",
      "Optimized serverless querying and analysis with Amazon Athena for fast SQL access.",
      "Automated data validation, monitoring, and error-handling for reliable, unattended pipelines.",
    ],
    achievements: [
      "Automated the full ingestion-to-analytics journey with zero manual intervention.",
      "Enabled direct, serverless SQL analytics over the lake — no infrastructure to manage.",
      "Cut storage overhead with a lifecycle-managed S3 layout and columnar-friendly partitioning.",
    ],
    architecture: [
      {
        label: "Data Sources",
        description: "Operational systems, APIs, and flat files feeding the platform.",
        tech: ["APIs", "CSV / Flat Files", "Operational Systems"],
      },
      {
        label: "Python Ingestion",
        description: "Lightweight Python + Pandas ETL pulling and staging raw data.",
        tech: ["Python", "Pandas"],
      },
      {
        label: "Data Lake",
        description: "Secure, versioned object storage with lifecycle policies.",
        tech: ["Amazon S3"],
      },
      {
        label: "ETL & Catalog",
        description: "Serverless transforms with a searchable, governed catalog.",
        tech: ["AWS Glue", "Glue Data Catalog"],
      },
      {
        label: "Query Engine",
        description: "Serverless SQL directly over the data lake.",
        tech: ["Amazon Athena"],
      },
      {
        label: "Analytics",
        description: "Dashboards and BI consuming lake data on demand.",
        tech: ["Dashboards", "BI & Reporting"],
      },
    ],
    accent: "from-emerald-500/20 via-emerald-700/10 to-transparent",
  },
];