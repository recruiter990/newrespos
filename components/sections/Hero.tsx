"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import FloatingShapes from "@/components/3d/FloatingShapes";
import { STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <FloatingShapes />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass text-sm font-medium"
          >
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>Trasformiamo Business Locali in Successi Digitali</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight"
          >
            <span className="text-gradient">
              Trasformiamo il Tuo Business
            </span>
            <br />
            <span className="text-dark dark:text-light">
              in un Successo Digitale
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray max-w-2xl mx-auto"
          >
            Social Media • Cold Email • Crescita Clienti
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Richiedi Consulenza Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">Scopri i Risultati</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-16"
          >
            {STATS.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gradient">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-gray">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, repeat: Infinity, repeatType: "reverse", duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

