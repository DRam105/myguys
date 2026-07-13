/**
 * Renders a JSON-LD <script> for structured data (SEO).
 * Pass any schema.org object as `data`.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, first-party content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
