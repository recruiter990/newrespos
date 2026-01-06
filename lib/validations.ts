import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Email non valida"),
  phone: z.string().optional(),
  businessName: z.string().min(2, "Il nome del business è obbligatorio"),
  businessType: z.enum(["restaurant", "retail", "tobacco", "other"], {
    required_error: "Seleziona il tipo di business",
  }),
  services: z.array(z.string()).min(1, "Seleziona almeno un servizio"),
  message: z.string().min(20, "Il messaggio deve contenere almeno 20 caratteri"),
  budget: z.enum(["<500", "500-1000", "1000-2000", ">2000"]).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

