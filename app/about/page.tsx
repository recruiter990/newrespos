import { Metadata } from "next";
import Card from "@/components/ui/Card";
import { Target, Eye, Heart, Award, CheckCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Chi Siamo | La Tua Agenzia di Marketing Digitale",
  description: "Scopri la nostra storia, missione e valori. Siamo esperti in marketing digitale per business locali.",
};

const values = [
  {
    icon: Target,
    title: "Risultati",
    description: "Ci concentriamo su risultati concreti e misurabili per il tuo business.",
  },
  {
    icon: Eye,
    title: "Trasparenza",
    description: "Report chiari e comunicazione diretta su ogni aspetto del lavoro.",
  },
  {
    icon: Heart,
    title: "Passione",
    description: "Amore per quello che facciamo e dedizione al successo dei nostri clienti.",
  },
  {
    icon: Award,
    title: "Eccellenza",
    description: "Standard elevati in ogni progetto e costante ricerca dell'eccellenza.",
  },
];

const achievements = [
  "150+ Clienti Soddisfatti",
  "300% Crescita Media Vendite",
  "50M+ Impressioni Social",
  "Certificati Meta Business",
  "Partner Google",
];

export default function AboutPage() {
  return (
    <div className="pt-20 section-padding">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">Chi Siamo</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Siamo un'agenzia di marketing digitale specializzata nel far crescere business locali attraverso strategie innovative e risultati concreti.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-dark dark:text-light">
                La Nostra Storia
              </h2>
              <div className="space-y-4 text-gray text-lg">
                <p>
                  Siamo nati dalla passione per il marketing digitale e dalla consapevolezza che molti business locali 
                  faticano a trovare la loro voce nel mondo digitale.
                </p>
                <p>
                  Con anni di esperienza nel settore, abbiamo aiutato centinaia di ristoranti, negozi e tabaccherie 
                  a crescere online, aumentare le vendite e costruire una presenza digitale solida.
                </p>
                <p>
                  La nostra missione è semplice: trasformare ogni business locale in un successo digitale, 
                  un cliente alla volta.
                </p>
              </div>
            </div>
            <Card variant="glass" className="p-8">
              <div className="aspect-video rounded-lg bg-gradient-primary/20 flex items-center justify-center">
                <Target className="h-24 w-24 text-primary/50" />
              </div>
            </Card>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="glass" className="p-8">
              <div className="p-4 rounded-xl bg-primary/10 w-fit mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-dark dark:text-light">
                Missione
              </h3>
              <p className="text-gray text-lg">
                Aiutare ogni business locale a raggiungere il suo pieno potenziale digitale attraverso 
                strategie personalizzate, contenuti di qualità e risultati misurabili.
              </p>
            </Card>

            <Card variant="glass" className="p-8">
              <div className="p-4 rounded-xl bg-secondary/10 w-fit mb-6">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-dark dark:text-light">
                Visione
              </h3>
              <p className="text-gray text-lg">
                Essere il partner digitale di riferimento per i business locali, creando un ecosistema 
                dove ogni azienda può prosperare online e offline.
              </p>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-dark dark:text-light">
            I Nostri Valori
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} variant="glass" hover className="text-center">
                  <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-dark dark:text-light">
                    {value.title}
                  </h3>
                  <p className="text-gray">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-dark dark:text-light">
            Perché Scegliere Noi
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="glass" className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-dark dark:text-light">
                Esperienza Locale
              </h3>
              <p className="text-gray">
                Conosciamo il mercato di Ancona e comprendiamo le sfide dei business locali.
              </p>
            </Card>
            <Card variant="glass" className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-dark dark:text-light">
                Approccio Orientato ai Risultati
              </h3>
              <p className="text-gray">
                Ogni strategia è progettata per generare risultati concreti e misurabili.
              </p>
            </Card>
            <Card variant="glass" className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-dark dark:text-light">
                Report Trasparenti
              </h3>
              <p className="text-gray">
                Report chiari e dettagliati su ogni aspetto delle performance.
              </p>
            </Card>
            <Card variant="glass" className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-dark dark:text-light">
                Nessun Contratto a Lungo Termine
              </h3>
              <p className="text-gray">
                Flessibilità totale. Puoi interrompere quando vuoi.
              </p>
            </Card>
            <Card variant="glass" className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-dark dark:text-light">
                Comunicazione Diretta
              </h3>
              <p className="text-gray">
                Accesso diretto al team, senza intermediari o call center.
              </p>
            </Card>
            <Card variant="glass" className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-dark dark:text-light">
                Risultati Garantiti
              </h3>
              <p className="text-gray">
                Risultati garantiti o rimborsati. La tua soddisfazione è la nostra priorità.
              </p>
            </Card>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <Card variant="gradient" className="p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 text-dark dark:text-light">
              I Nostri Risultati
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {achievements.map((achievement, index) => (
                <Badge key={index} variant="primary" className="text-base px-4 py-2">
                  <CheckCircle className="h-4 w-4 mr-2 inline" />
                  {achievement}
                </Badge>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}

