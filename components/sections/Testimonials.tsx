"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Card from "@/components/ui/Card";

const testimonials = [
  {
    name: "Marco Rossi",
    role: "Proprietario Ristorante",
    business: "Ristorante da Marco",
    content: "Grazie alla loro strategia social, abbiamo aumentato le vendite del 250% in soli 3 mesi. Clienti nuovi ogni giorno!",
    rating: 5,
  },
  {
    name: "Laura Bianchi",
    role: "Titolare Tabaccheria",
    business: "Tabaccheria Centrale",
    content: "Da 0 a 5000 follower in 3 mesi. Ora abbiamo una community attiva che ci segue e compra regolarmente.",
    rating: 5,
  },
  {
    name: "Giuseppe Verdi",
    role: "Proprietario Pizzeria",
    business: "Pizzeria Napoli",
    content: "Il setup delivery ha cambiato tutto. +€15,000 al mese solo dalle app. Un investimento che si è ripagato in una settimana!",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Cosa Dicono i Nostri Clienti</span>
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Storie di successo da business locali che hanno scelto noi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="glass" hover className="h-full flex flex-col">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-gray mb-6 flex-grow italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-dark dark:text-light">{testimonial.name}</p>
                    <p className="text-sm text-gray">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.business}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

