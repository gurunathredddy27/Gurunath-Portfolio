"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AboutHighlights } from "./AboutHighlights";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="01 · About"
          title={
            <>
              Turning raw data into{" "}
              <span className="text-gradient">reliable platforms</span>
            </>
          }
        />

        <div className="grid gap-14 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="flex flex-col gap-5 lg:col-span-5"
          >
            <motion.p variants={fadeUp} className="text-base leading-relaxed text-muted">
              I&apos;m a Data Engineer with <span className="font-semibold text-fg">4+ years</span> of
              experience designing and delivering scalable data solutions. My
              day-to-day lives in <span className="font-semibold text-fg">Python, PySpark, SQL, Apache
              Spark, and Apache Airflow</span> — running pipelines that process
              millions of records every day across Azure and AWS.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base leading-relaxed text-muted">
              I&apos;ve built ETL/ELT pipelines that ingest from APIs, databases, and SFTP,
              architected <span className="font-semibold text-fg">data lake storage layers</span>,
              and modelled analytics-ready datasets — always with data quality,
              validation, and monitoring built in from the first line of code.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base leading-relaxed text-muted">
              Whether it&apos;s a governed Azure lakehouse or a serverless AWS data lake,
              my goal stays the same: <span className="font-semibold text-fg">
              make data accurate, accessible, and fast</span> for the people who make
              decisions on it.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-3 flex flex-wrap gap-2">
              {["Python", "PySpark", "SQL", "Apache Spark", "Apache Airflow", "Azure", "AWS", "ETL / ELT", "Lakehouse"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-[11.5px] text-muted transition-colors duration-300 hover:border-line-strong hover:text-fg"
                  >
                    {tag}
                  </span>
                ),
              )}
            </motion.div>
          </motion.div>

          <div className="lg:col-span-7">
            <AboutHighlights />
          </div>
        </div>
      </div>
    </section>
  );
}