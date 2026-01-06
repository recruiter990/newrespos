import { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Contatti | Richiedi una Consulenza Gratuita",
  description: "Contattaci per una consulenza gratuita e scopri come possiamo far crescere il tuo business digitale.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">Contattaci</span>
          </h1>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Siamo qui per aiutarti. Richiedi una consulenza gratuita e scopri come possiamo trasformare il tuo business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card variant="glass" className="p-8">
              <h2 className="text-2xl font-heading font-semibold mb-6 text-dark dark:text-light">
                Invia una Richiesta
              </h2>
              <ContactForm />
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card variant="glass" className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-6 text-dark dark:text-light">
                Informazioni di Contatto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-dark dark:text-light mb-1">Email</p>
                    <a href="mailto:info@digitalagency.it" className="text-gray hover:text-primary transition-colors">
                      info@digitalagency.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-dark dark:text-light mb-1">Telefono</p>
                    <a href="tel:+393491234567" className="text-gray hover:text-primary transition-colors">
                      +39 349 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-dark dark:text-light mb-1">Indirizzo</p>
                    <p className="text-gray">Ancona, Italia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-dark dark:text-light mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/393491234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray hover:text-primary transition-colors"
                    >
                      Scrivici su WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="glass" className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-4 text-dark dark:text-light">
                Orari di Lavoro
              </h3>
              <div className="space-y-2 text-gray">
                <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                <p>Sabato: 10:00 - 14:00</p>
                <p>Domenica: Chiuso</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

