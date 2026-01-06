"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section-padding bg-white/50 dark:bg-dark-light/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Come Lavoriamo</span>
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Un processo strutturato per garantirti risultati concreti
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary" />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start space-x-6"
              >
                {/* Step Number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-heading font-semibold mb-2 text-dark dark:text-light">
                    {step.title}
                  </h3>
                  <p className="text-gray text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

