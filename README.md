# Hazik Fayaz — Career Website

Personal career website / digital CV for a Cabin Crew Trainer application.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 (or the port shown in the terminal).

## Content

All resume content lives in one place: `src/lib/data.ts`. Edit that file to update copy,
experience, skills, etc. — every section imports from it, so there's a single source of truth.

## Adding your photo

Drop a photo at `public/images/hazik-fayaz.jpg` (3:4 portrait crop recommended). The hero
section (`src/components/Portrait.tsx`) automatically detects the file and swaps out the
placeholder initials — no code change needed.

## Regenerating the downloadable CV

The PDF at `public/cv/Hazik-Fayaz-Cabin-Crew-Trainer-CV.pdf` is a static file, generated from an
HTML template (not part of the Next.js build). To regenerate after editing `src/lib/data.ts`:

1. Update the matching content in the CV template (kept outside this repo during generation —
   ask Claude to regenerate it, or rebuild the HTML manually using `src/lib/data.ts` as the
   source of truth).
2. Render to PDF with headless Chrome:
   ```bash
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
     --headless --disable-gpu --no-pdf-header-footer \
     --print-to-pdf="public/cv/Hazik-Fayaz-Cabin-Crew-Trainer-CV.pdf" \
     "file:///path/to/cv.html"
   ```

## Internal notes

See `APPLICATION-STRATEGY.md` for the role-fit analysis, keyword targeting, and honest gaps to
address in interviews. Not published on the site.

## Build

```bash
npm run build
npm run start
```
