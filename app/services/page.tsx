import { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import Card from "@/components/ui/Card";
import { Instagram, Mail, ShoppingBag, MapPin, Camera, TrendingUp } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Servizi | Marketing Digitale per Business Locali",
  description: "Scopri tutti i nostri servizi: Social Media Management, Cold Email, Setup Delivery, Google My Business e molto altro.",
};

const iconMap: Record<string, typeof Instagram> = {
  "social-media": Instagram,
  "cold-email": Mail,
  "delivery": ShoppingBag,
  "gmb": MapPin,
  "content": Camera,
  "consulting": TrendingUp,
};

export default function ServicesPage() {
  return (
    <div className="pt-20 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">I Nostri Servizi</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Soluzioni complete e personalizzate per far crescere il tuo business digitale. 
            Dalla gestione social media alle campagne email, dal setup delivery alla consulenza strategica.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id] || TrendingUp;
            const isEven = index % 2 === 0;

            return (
              <section key={service.id} id={service.id} className="scroll-mt-20">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                  <div className={!isEven ? "lg:col-start-2" : ""}>
                    <div className="p-6 rounded-xl bg-primary/10 w-fit mb-6">
                      <Icon className="h-12 w-12 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark dark:text-light">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-secondary" />
                          </div>
                          <span className="text-gray text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild size="lg">
                      <Link href="/contact">
                        Richiedi Consulenza
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>

                  <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <Card variant="glass" className="p-8 h-full">
                      <div className="aspect-video rounded-lg bg-gradient-primary/20 flex items-center justify-center">
                        <Icon className="h-24 w-24 text-primary/50" />
                      </div>
                    </Card>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <Card variant="gradient" className="p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark dark:text-light">
              Non Trovi Quello che Cerchi?
            </h2>
            <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
              Contattaci per una consulenza personalizzata. Creiamo soluzioni su misura per le tue esigenze.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Parla con un Esperto</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

