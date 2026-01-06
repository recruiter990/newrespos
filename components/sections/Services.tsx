"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Instagram, Mail, ShoppingBag, MapPin, Camera, TrendingUp } from "lucide-react";
import Card from "@/components/ui/Card";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, typeof Instagram> = {
  "social-media": Instagram,
  "cold-email": Mail,
  "delivery": ShoppingBag,
  "gmb": MapPin,
  "content": Camera,
  "consulting": TrendingUp,
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">I Nostri Servizi</span>
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Soluzioni complete per far crescere il tuo business digitale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id] || TrendingUp;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="glass" hover className="h-full flex flex-col group">
                  <div className="p-4 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-dark dark:text-light">
                    {service.title}
                  </h3>
                  <p className="text-gray mb-4 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Scopri di più
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

