/* Testimonials for /portfolio/.
   Add a real quote here once you have one — only what the client actually
   said and approved, never written on their behalf. Leave the array empty
   until then: Testimonials.tsx returns null when it's empty, so nothing on
   the live page changes until a real entry lands here.

   `slug` is optional and links the quote to its matching case study at
   /portfolio/<slug>/ if the project that client is talking about is on the
   site. `rating` is optional too — only set it if the client actually gave
   a star rating (e.g. on Google), not as a default. */

export type Testimonial = {
  quote: string;
  name: string;
  business: string;
  role?: string;
  slug?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Testimonial[] = [];
