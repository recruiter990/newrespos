import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // TODO: Replace with actual email service (Resend, SendGrid, etc.)
    // For now, just log the data
    console.log("Contact form submission:", validatedData);

    // Example with Resend (uncomment and configure):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@digitalagency.it",
      subject: `Nuova richiesta da ${validatedData.businessName}`,
      html: `
        <h2>Nuova Richiesta di Contatto</h2>
        <p><strong>Nome:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Telefono:</strong> ${validatedData.phone || "N/A"}</p>
        <p><strong>Business:</strong> ${validatedData.businessName}</p>
        <p><strong>Tipo:</strong> ${validatedData.businessType}</p>
        <p><strong>Servizi:</strong> ${validatedData.services.join(", ")}</p>
        <p><strong>Budget:</strong> ${validatedData.budget || "N/A"}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${validatedData.message}</p>
      `,
    });
    */

    return NextResponse.json(
      { message: "Messaggio inviato con successo!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Errore nell'invio del messaggio" },
      { status: 500 }
    );
  }
}

