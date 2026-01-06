"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { CheckCircle, AlertCircle } from "lucide-react";

const businessTypes = [
  { value: "restaurant", label: "Ristorante" },
  { value: "retail", label: "Negozio/Retail" },
  { value: "tobacco", label: "Tabaccheria" },
  { value: "other", label: "Altro" },
];

const services = [
  { value: "social-media", label: "Social Media Management" },
  { value: "cold-email", label: "Cold Email Marketing" },
  { value: "delivery", label: "Setup Delivery" },
  { value: "gmb", label: "Google My Business" },
  { value: "content", label: "Content Creation" },
  { value: "consulting", label: "Business Consulting" },
];

const budgetOptions = [
  { value: "<500", label: "Meno di €500/mese" },
  { value: "500-1000", label: "€500 - €1,000/mese" },
  { value: "1000-2000", label: "€1,000 - €2,000/mese" },
  { value: ">2000", label: "Più di €2,000/mese" },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Nome *"
          {...register("name")}
          error={errors.name?.message}
          placeholder="Il tuo nome"
        />
        <Input
          label="Email *"
          type="email"
          {...register("email")}
          error={errors.email?.message}
          placeholder="tua@email.com"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Telefono"
          type="tel"
          {...register("phone")}
          error={errors.phone?.message}
          placeholder="+39 123 456 7890"
        />
        <Input
          label="Nome Business *"
          {...register("businessName")}
          error={errors.businessName?.message}
          placeholder="Nome del tuo business"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-dark dark:text-light">
          Tipo di Business *
        </label>
        <select
          {...register("businessType")}
          className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-dark-light/50 border border-gray/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-dark dark:text-light"
        >
          <option value="">Seleziona...</option>
          {businessTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.businessType && (
          <p className="mt-1 text-sm text-red-500">{errors.businessType.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-dark dark:text-light">
          Servizi di Interesse *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {services.map((service) => (
            <label key={service.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                value={service.value}
                {...register("services")}
                className="w-4 h-4 text-primary rounded focus:ring-primary"
              />
              <span className="text-sm text-dark dark:text-light">{service.label}</span>
            </label>
          ))}
        </div>
        {errors.services && (
          <p className="mt-1 text-sm text-red-500">{errors.services.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-dark dark:text-light">
          Budget (opzionale)
        </label>
        <select
          {...register("budget")}
          className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-dark-light/50 border border-gray/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-dark dark:text-light"
        >
          <option value="">Seleziona...</option>
          {budgetOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-dark dark:text-light">
          Messaggio *
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-dark-light/50 border border-gray/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-gray text-dark dark:text-light resize-none"
          placeholder="Raccontaci del tuo business e delle tue esigenze..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {submitStatus === "success" && (
        <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center space-x-2 text-secondary">
          <CheckCircle className="h-5 w-5" />
          <p>Messaggio inviato con successo! Ti contatteremo presto.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center space-x-2 text-red-500">
          <AlertCircle className="h-5 w-5" />
          <p>Errore nell'invio. Riprova più tardi o contattaci direttamente.</p>
        </div>
      )}

      <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full">
        Invia Richiesta
      </Button>
    </form>
  );
}

