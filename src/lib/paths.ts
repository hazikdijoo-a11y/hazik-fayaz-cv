export const basePath = process.env.NODE_ENV === "production" ? "/hazik-fayaz-cv" : "";

export function withBase(path: string) {
  return `${basePath}${path}`;
}

export const cvPath = "/cv/Hazik-Fayaz-Cabin-Crew-Trainer-CV.pdf";
