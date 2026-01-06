"use client";

import { useState } from "react";
import { Metadata } from "next";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { TrendingUp, Users, DollarSign, Calendar } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const caseStudies = [
  {
    id: 1,
    title: "Come abbiamo aumentato le vendite di un ristorante del 250%",
    client: "Ristorante da Marco",
    industry: "Ristorante",
    service: "Social Media Management",
    challenge: "Bassa visibilità online, pochi clienti, nessuna presenza sui social media.",
    solution: "Abbiamo creato una strategia social completa con contenuti coinvolgenti, gestione delle recensioni e campagne mirate.",
    results: {
      sales: 250,
      followers: 5000,
      revenue: 15000,
      timeline: "3 mesi",
    },
    testimonial: "Grazie alla loro strategia, abbiamo triplicato le vendite in soli 3 mesi!",
    image: "/images/case-study-1.jpg",
  },
  {
    id: 2,
    title: "Da 0 a 5000 follower in 3 mesi per una tabaccheria",
    client: "Tabaccheria Centrale",
    industry: "Tabaccheria",
    service: "Social Media Management",
    challenge: "Nessuna presenza digitale, clienti solo offline, necessità di espandere il business.",
    solution: "Setup completo social media, content strategy mirata, community building e engagement.",
    results: {
      sales: 180,
      followers: 5000,
      revenue: 8000,
      timeline: "3 mesi",
    },
    testimonial: "Da zero follower a una community attiva di 5000 persone. Incredibile!",
    image: "/images/case-study-2.jpg",
  },
  {
    id: 3,
    title: "Setup delivery: +€15,000/mese per una pizzeria",
    client: "Pizzeria Napoli",
    industry: "Ristorante",
    service: "Setup Delivery",
    challenge: "Nessuna presenza sulle piattaforme di delivery, perdita di potenziali clienti.",
    solution: "Setup completo su Glovo, Deliveroo e JustEat, ottimizzazione menu, foto professionali, strategia pricing.",
    results: {
      sales: 300,
      followers: 3000,
      revenue: 15000,
      timeline: "1 mese",
    },
    testimonial: "Il setup delivery ha cambiato tutto. +€15,000 al mese solo dalle app!",
    image: "/images/case-study-3.jpg",
  },
];

const industries = ["Tutti", "Ristorante", "Tabaccheria", "Retail"];
const services = ["Tutti", "Social Media Management", "Setup Delivery", "Email Marketing"];

export default function PortfolioPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("Tutti");
  const [selectedService, setSelectedService] = useState("Tutti");

  const filteredCaseStudies = caseStudies.filter((study) => {
    const industryMatch = selectedIndustry === "Tutti" || study.industry === selectedIndustry;
    const serviceMatch = selectedService === "Tutti" || study.service === selectedService;
    return industryMatch && serviceMatch;
  });

  return (
    <div className="pt-20 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Storie di successo da business locali che hanno scelto di crescere con noi
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div>
            <label className="block text-sm font-medium mb-2 text-dark dark:text-light">
              Settore
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/50 dark:bg-dark-light/50 border border-gray/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-dark dark:text-light"
            >
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-dark dark:text-light">
              Servizio
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/50 dark:bg-dark-light/50 border border-gray/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-dark dark:text-light"
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="glass" hover className="h-full flex flex-col">
                <div className="aspect-video rounded-lg bg-gradient-primary/20 mb-6 flex items-center justify-center">
                  <TrendingUp className="h-16 w-16 text-primary/50" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="primary">{study.industry}</Badge>
                  <Badge variant="secondary">{study.service}</Badge>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-dark dark:text-light">
                  {study.title}
                </h3>
                <p className="text-gray mb-4 flex-grow">{study.challenge}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="text-sm text-gray">Crescita</p>
                      <p className="font-semibold text-dark dark:text-light">{study.results.sales}%</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray">Follower</p>
                      <p className="font-semibold text-dark dark:text-light">{study.results.followers.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-gray">Revenue</p>
                      <p className="font-semibold text-dark dark:text-light">+€{study.results.revenue.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray">Timeline</p>
                      <p className="font-semibold text-dark dark:text-light">{study.results.timeline}</p>
                    </div>
                  </div>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray mb-4">
                  "{study.testimonial}"
                </blockquote>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/portfolio/${study.id}`}>Leggi il Case Study</Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray text-lg">Nessun case study trovato con questi filtri.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-24 text-center">
          <Card variant="gradient" className="p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark dark:text-light">
              Vuoi Essere il Prossimo Success Story?
            </h2>
            <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
              Contattaci oggi e inizia a trasformare il tuo business in un successo digitale.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Inizia Oggi</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

