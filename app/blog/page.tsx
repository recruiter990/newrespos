import { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog | Guide e Consigli di Marketing Digitale",
  description: "Scopri guide, consigli e strategie di marketing digitale per far crescere il tuo business locale.",
};

const blogPosts = [
  {
    id: 1,
    title: "5 Errori che Uccidono il Tuo Instagram",
    excerpt: "Scopri gli errori più comuni che commettono i business locali su Instagram e come evitarli per aumentare engagement e vendite.",
    category: "Social Media",
    date: "15 Marzo 2024",
    readTime: "5 min",
    image: "/images/blog-1.jpg",
  },
  {
    id: 2,
    title: "Come Scrivere Email che Convertono",
    excerpt: "Guida completa per creare campagne email efficaci che trasformano i lead in clienti fedeli.",
    category: "Email Marketing",
    date: "10 Marzo 2024",
    readTime: "8 min",
    image: "/images/blog-2.jpg",
  },
  {
    id: 3,
    title: "Guida Completa al Delivery Online",
    excerpt: "Tutto quello che devi sapere per portare il tuo ristorante su Glovo, Deliveroo e JustEat e aumentare le vendite.",
    category: "Delivery",
    date: "5 Marzo 2024",
    readTime: "12 min",
    image: "/images/blog-3.jpg",
  },
  {
    id: 4,
    title: "Google My Business: La Guida Definitiva",
    excerpt: "Come ottimizzare il tuo profilo Google My Business per apparire in cima alle ricerche locali.",
    category: "SEO",
    date: "1 Marzo 2024",
    readTime: "10 min",
    image: "/images/blog-4.jpg",
  },
  {
    id: 5,
    title: "Strategie di Crescita per Ristoranti",
    excerpt: "Tecniche avanzate per aumentare le vendite del tuo ristorante attraverso il marketing digitale.",
    category: "Business",
    date: "25 Febbraio 2024",
    readTime: "7 min",
    image: "/images/blog-5.jpg",
  },
  {
    id: 6,
    title: "Content Marketing per Business Locali",
    excerpt: "Come creare contenuti che attirano clienti e aumentano la visibilità del tuo business.",
    category: "Content",
    date: "20 Febbraio 2024",
    readTime: "6 min",
    image: "/images/blog-6.jpg",
  },
];

const categories = ["Tutti", "Social Media", "Email Marketing", "Delivery", "SEO", "Business", "Content"];

export default function BlogPage() {
  return (
    <div className="pt-20 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Guide, consigli e strategie di marketing digitale per far crescere il tuo business
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "Tutti" ? "primary" : "default"}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} variant="glass" hover className="flex flex-col h-full">
              <div className="aspect-video rounded-lg bg-gradient-primary/20 mb-4 flex items-center justify-center">
                <Calendar className="h-16 w-16 text-primary/50" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">{post.category}</Badge>
              </div>
              <h2 className="text-xl font-heading font-semibold mb-2 text-dark dark:text-light">
                {post.title}
              </h2>
              <p className="text-gray mb-4 flex-grow">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-primary font-medium hover:translate-x-1 transition-transform"
              >
                Leggi di più
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Card variant="gradient" className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark dark:text-light">
            Rimani Aggiornato
          </h2>
          <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
            Iscriviti alla nostra newsletter per ricevere guide esclusive e consigli di marketing digitale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/50 dark:bg-dark-light/50 border border-gray/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-dark dark:text-light"
            />
            <Button>Iscriviti</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

