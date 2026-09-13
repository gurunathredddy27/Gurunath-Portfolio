import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description: "The languages I use to build data products end to end.",
    icon: "code",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "SQL" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Data Engineering",
    description: "Core engineering behind reliable, repeatable pipelines.",
    icon: "workflow",
    skills: [
      { name: "Apache Airflow" },
      { name: "Apache Spark" },
      { name: "PySpark" },
      { name: "ETL / ELT" },
      { name: "Data Pipelines" },
      { name: "Data Quality" },
      { name: "Data Validation" },
    ],
  },
  {
    title: "Azure Cloud",
    description: "Microsoft's lakehouse and orchestration stack.",
    icon: "cloud",
    skills: [
      { name: "Azure Data Factory" },
      { name: "Azure Data Lake Storage" },
      { name: "Azure Databricks" },
      { name: "Azure Synapse Analytics" },
      { name: "Azure Functions" },
      { name: "Azure SQL Database" },
    ],
  },
  {
    title: "AWS Cloud",
    description: "Serverless data engineering on Amazon Web Services.",
    icon: "server",
    skills: [
      { name: "Amazon S3" },
      { name: "AWS Glue" },
      { name: "Amazon Athena" },
      { name: "AWS Data Catalog" },
    ],
  },
  {
    title: "Databases",
    description: "Relational, document, and modern data stores.",
    icon: "database",
    skills: [
      { name: "SQL" },
      { name: "MongoDB" },
      { name: "Supabase" },
    ],
  },
  {
    title: "AI / Machine Learning",
    description: "From classic ML to deep learning and NLP.",
    icon: "brain",
    skills: [
      { name: "Machine Learning" },
      { name: "Classification" },
      { name: "Clustering" },
      { name: "Neural Networks" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "NLP" },
      { name: "BERT" },
    ],
  },
  {
    title: "Developer Tools",
    description: "The workflow that keeps everything shipping.",
    icon: "terminal",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Jupyter Notebook" },
      { name: "Docker" },
    ],
  },
];

export const techMarquee = [
  "Python",
  "PySpark",
  "Apache Spark",
  "Apache Airflow",
  "Azure Data Factory",
  "Azure Databricks",
  "Azure Synapse",
  "Azure SQL",
  "Amazon S3",
  "AWS Glue",
  "Amazon Athena",
  "MongoDB",
  "Pandas",
  "Docker",
  "TensorFlow",
  "REST APIs",
];