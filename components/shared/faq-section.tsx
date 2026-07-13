import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/shared/json-ld";
import { faqSchema } from "@/lib/seo";
import type { FAQ } from "@/lib/services";

/** FAQ accordion + FAQPage structured data. */
export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  eyebrow = "FAQ",
  className = "bg-white",
}: {
  faqs: FAQ[];
  title?: string;
  eyebrow?: string;
  className?: string;
}) {
  if (!faqs.length) return null;
  return (
    <section className={`section ${className}`}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
