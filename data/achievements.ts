import type { AchievementMetric } from "@/types";

export const metrics: AchievementMetric[] = [
  {
    value: 4,
    suffix: "+",
    label: "Years of Data Engineering Experience",
    icon: "timer",
  },
  {
    display: "Millions",
    suffix: "+",
    label: "Records Processed Daily",
    icon: "database",
  },
  {
    value: 50,
    suffix: "+",
    label: "Automated Data Workflows",
    icon: "workflow",
  },
  {
    value: 99.9,
    decimals: 1,
    suffix: "%",
    label: "Pipeline Reliability",
    icon: "shield",
  },
  {
    value: 20,
    suffix: "%",
    label: "Processing Efficiency Improvement",
    prefix: "up to",
    icon: "gauge",
  },
  {
    value: 25,
    suffix: "%",
    label: "Query Performance Improvement",
    prefix: "up to",
    icon: "trending",
  },
];

export const journeyStages = [
  {
    step: "01",
    label: "Data Sources",
    description: "Raw business data from everywhere your systems live.",
    tech: ["APIs", "SFTP", "Databases"],
    icon: "source",
  },
  {
    step: "02",
    label: "Ingestion",
    description: "Scheduled, resumable, incrementally-loaded pipelines.",
    tech: ["Apache Airflow", "Azure Data Factory"],
    icon: "ingest",
  },
  {
    step: "03",
    label: "Storage",
    description: "Scalable, governed lake storage for raw and curated data.",
    tech: ["Azure Data Lake", "Amazon S3"],
    icon: "storage",
  },
  {
    step: "04",
    label: "Transformation",
    description: "Distributed compute turning raw events into clean tables.",
    tech: ["Databricks", "AWS Glue", "Spark"],
    icon: "transform",
  },
  {
    step: "05",
    label: "Data Quality",
    description: "Bronze → Silver → Gold with validation at every hop.",
    tech: ["Lake Layers", "Validation", "Monitoring"],
    icon: "quality",
  },
  {
    step: "06",
    label: "Data Modeling",
    description: "Star and dimensional models built for fast answers.",
    tech: ["Synapse SQL", "Amazon Athena", "SQL"],
    icon: "model",
  },
  {
    step: "07",
    label: "Analytics",
    description: "Dashboards and KPIs consumed by product and business teams.",
    tech: ["Dashboards", "KPI Reporting"],
    icon: "analytics",
  },
  {
    step: "08",
    label: "Business Insights",
    description: "Decisions backed by trusted, timely data.",
    tech: ["Intelligence", "Decision-Making"],
    icon: "insights",
  },
];