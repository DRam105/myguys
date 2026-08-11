import { z } from "zod";

/** Shared field pieces. */
const name = z.string().min(2, "Please enter your name");
const email = z.string().email("Enter a valid email address");
const phone = z
  .string()
  .min(10, "Enter a valid phone number")
  .regex(/^[0-9()+\-.\s]+$/, "Enter a valid phone number");
const zip = z.string().regex(/^\d{5}$/, "Enter a valid 5-digit ZIP code");

/** Contact form (used on /contact). */
export const contactSchema = z.object({
  name,
  email,
  phone,
  message: z.string().min(10, "Please tell us a bit more (10+ characters)"),
  smsConsent: z.boolean().optional(),
});
export type ContactValues = z.infer<typeof contactSchema>;

/** Quick quote form (footer modal). */
export const quickQuoteSchema = z.object({
  name,
  email,
  phone,
  issue: z.string().min(3, "Please tell us the pest issue you're having"),
  smsConsent: z.boolean().optional(),
});
export type QuickQuoteValues = z.infer<typeof quickQuoteSchema>;

/** Multi-step quote form (used on /quote). Split per step for validation. */
export const quoteStep1Schema = z.object({
  pestProblem: z.string().min(1, "Please choose a pest problem"),
  propertyType: z.enum(["residential", "commercial"], {
    message: "Please choose a property type",
  }),
});

export const quoteStep2Schema = z.object({
  address: z.string().min(5, "Please enter your street address"),
  zip,
  preferredTime: z.enum(["morning", "afternoon", "evening", "any"], {
    message: "Please choose a preferred time",
  }),
});

export const quoteStep3Schema = z.object({
  name,
  email,
  phone,
  notes: z.string().optional(),
  smsConsent: z.boolean().optional(),
});

/** Full quote payload = all steps combined. */
export const quoteSchema = quoteStep1Schema
  .and(quoteStep2Schema)
  .and(quoteStep3Schema);
export type QuoteValues = z.infer<typeof quoteSchema>;

export const pestProblemOptions = [
  "Ants",
  "Termites",
  "Rodents (mice/rats)",
  "Cockroaches",
  "Bed bugs",
  "Mosquitoes & ticks",
  "Spiders",
  "Wasps / stinging insects",
  "Multiple / not sure",
] as const;
