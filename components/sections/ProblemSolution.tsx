"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Search, Users, TrendingDown, CheckCircle, Mail, ShoppingBag, BarChart3 } from "lucide-react";
import Card from "@/components/ui/Card";

const problems = [
  {
    icon: Search,
    text: "Nessuno ti trova online?",
  },
  {
    icon: Users,
    text: "I social non portano clienti?",
  },
  {
    icon: TrendingDown,
    text: "Non sai come fare marketing?",
  },
];

const solutions = [
  {
    icon: BarChart3,
    title: "Gestione Social Media Completa",
    description: "Contenuti coinvolgenti che attirano e convertono",
  },
  {
    icon: Mail,
    title: "Campagne Email che Convertono",
    description: "Trasforma sconosciuti in clienti fedeli",
  },
  {
    icon: ShoppingBag,
    title: "Setup Delivery Online",
    description: "Porta il tuo business su tutte le piattaforme",
  },
];

export default function ProblemSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section-padding bg-white/50 dark:bg-dark-light/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Problems */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark dark:text-light">
              Ti Riconosci in Questi Problemi?
            </h2>
            <div className="space-y-4">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 rounded-lg bg-red-500/10 text-red-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-lg text-dark dark:text-light">{problem.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient">
              Le Nostre Soluzioni
            </h2>
            <div className="space-y-4">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card variant="glass" className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-1 text-dark dark:text-light">
                          {solution.title}
                        </h3>
                        <p className="text-gray">{solution.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

