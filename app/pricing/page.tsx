import { Metadata } from "next";
import { PRICING_PLANS } from "@/lib/constants";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Prezzi | Piani e Tariffe",
  description: "Scopri i nostri piani e tariffe per Social Media Management, Email Marketing e servizi one-time.",
};

export default function PricingPage() {
  return (
    <div className="pt-20 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">Prezzi Trasparenti</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Piani flessibili per ogni esigenza. Nessun contratto a lungo termine. 
            Risultati garantiti o rimborsati.
          </p>
        </div>

        {/* Social Media Pricing */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-dark dark:text-light">
            Social Media Management
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_PLANS.socialMedia.map((plan) => (
              <Card
                key={plan.name}
                variant={plan.popular ? "gradient" : "glass"}
                className={`relative ${plan.popular ? "scale-105" : ""}`}
              >
                {plan.popular && (
                  <Badge variant="accent" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Più Popolare
                  </Badge>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold mb-2 text-dark dark:text-light">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-heading font-bold text-gradient">
                      €{plan.price}
                    </span>
                    <span className="text-gray ml-2">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  <Link href="/contact">Inizia Oggi</Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Email Marketing Pricing */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-dark dark:text-light">
            Email Marketing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PRICING_PLANS.emailMarketing.map((plan) => (
              <Card
                key={plan.name}
                variant={plan.popular ? "gradient" : "glass"}
                className={plan.popular ? "scale-105" : ""}
              >
                {plan.popular && (
                  <Badge variant="accent" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Più Popolare
                  </Badge>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold mb-2 text-dark dark:text-light">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-heading font-bold text-gradient">
                      €{plan.price}
                    </span>
                    <span className="text-gray ml-2">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  <Link href="/contact">Inizia Oggi</Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* One-Time Services */}
        <section>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-dark dark:text-light">
            Servizi One-Time
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_PLANS.oneTime.map((service) => (
              <Card key={service.name} variant="glass">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold mb-2 text-dark dark:text-light">
                    {service.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-heading font-bold text-gradient">
                      €{service.price}
                    </span>
                    <span className="text-gray ml-2">/{service.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Richiedi Preventivo</Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Card variant="gradient" className="p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark dark:text-light">
              Hai Bisogno di un Piano Personalizzato?
            </h2>
            <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita e creiamo insieme un piano su misura per il tuo business.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Richiedi Consulenza Gratuita</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

