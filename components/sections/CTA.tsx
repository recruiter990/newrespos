"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
            Pronto a Far Crescere il Tuo Business?
          </h2>
          <p className="text-xl text-white/90">
            Richiedi una consulenza gratuita e scopri come possiamo aiutarti a raggiungere i tuoi obiettivi
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="group bg-white text-primary hover:bg-white/90"
            >
              <Link href="/contact">
                Richiedi Consulenza Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="https://wa.me/393491234567" target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                Scrivici su WhatsApp
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

