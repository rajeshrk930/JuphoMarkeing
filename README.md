# Jupho — Next.js + Tailwind Starter

## What this contains
A minimal Next.js + TypeScript + Tailwind landing page scaffold for Jupho (Performance Marketing Agency).

Sections included:
- Header with logo + nav
- Hero with WhatsApp CTA
- Services
- Why Choose Us
- Testimonials
- FAQ
- About
- Footer

## Important placeholders you must replace
1. **Logo file**  
   The code currently references your uploaded local path for testing:
   `/mnt/data/583841cb-e186-4e3d-950c-8ada7094e51a.jfif`  
   **Before deploying** upload your logo to the project `public/assets/logo.png` and replace the image import path in `components/Header.tsx` or `app/page.tsx` as instructed in the file.

2. **WhatsApp phone number**  
   Search for `919000000000` in the code and replace with your number in international format (no `+`, e.g. `919812345678`).

## Local dev
1. Install packages:
```bash
npm install
