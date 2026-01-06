import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-dark text-light border-t border-white/10">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                DM
              </div>
              <span className="text-xl font-heading font-bold">Digital Agency</span>
            </div>
            <p className="text-gray text-sm">
              Trasformiamo il tuo business locale in un successo digitale attraverso social media, email marketing e strategie di crescita.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#social-media" className="text-gray hover:text-primary transition-colors text-sm">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services#cold-email" className="text-gray hover:text-primary transition-colors text-sm">
                  Cold Email Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#delivery" className="text-gray hover:text-primary transition-colors text-sm">
                  Setup Delivery
                </Link>
              </li>
              <li>
                <Link href="/services#gmb" className="text-gray hover:text-primary transition-colors text-sm">
                  Google My Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@digitalagency.it" className="text-gray hover:text-primary transition-colors text-sm">
                  info@digitalagency.it
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+393491234567" className="text-gray hover:text-primary transition-colors text-sm">
                  +39 349 123 4567
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray text-sm">
                  Ancona, Italia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray text-sm">
            © {currentYear} Digital Agency. Tutti i diritti riservati.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray hover:text-primary transition-colors">
              Termini di Servizio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

