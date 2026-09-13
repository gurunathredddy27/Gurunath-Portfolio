import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Gurunath — Data Engineer",
  description:
    "Data Engineer with 4+ years of experience building scalable cloud data platforms, ETL/ELT pipelines, and modern analytics solutions with Azure, AWS, Apache Spark, and Airflow.",
  keywords: [
    "Data Engineer",
    "Python",
    "PySpark",
    "Apache Airflow",
    "Azure Data Factory",
    "Azure Databricks",
    "AWS Glue",
    "ETL",
    "Data Lake",
    "Gurunath",
  ],
  openGraph: {
    title: "Gurunath — Data Engineer",
    description:
      "Building scalable cloud data platforms and modern data pipelines in Azure, AWS, and Big Data.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}