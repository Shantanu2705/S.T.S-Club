"use client";

import { motion } from "framer-motion";
import { clubInfo } from "@/data/club";

const stats = [
  { label: "Years of Legacy", value: `${clubInfo.stats.yearsOfLegacy}+` },
  { label: "Active Members", value: clubInfo.stats.activeMembers },
  { label: "Total Members", value: clubInfo.stats.totalMembers },
  { label: "Established", value: clubInfo.established },
];

export default function LegacyStats() {
  return (
    <section className="py-24 bg-neutral-muted relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4 drop-shadow-sm">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-bold text-neutral-600 tracking-[0.2em] uppercase">
                {stat.label}
              </div>
              <div className="w-12 h-1 bg-gold mt-6 rounded-full opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
