<div align="center">

# BuiltByKunal – Portfolio (Next.js 15, React 19, Tailwind CSS 4)

Frontend‑focused full‑stack portfolio showcasing projects, experience, and a production‑ready contact API backed by MongoDB.

</div>

## Overview

This is a modern portfolio built with the Next.js App Router. It features a responsive UI with desktop and mobile navigation, dark mode styles, SEO metadata, and API routes for health checks and a rate‑limited contact form persisted in MongoDB via Mongoose.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS v4
- **Database**: MongoDB via Mongoose 8
- **Language**: TypeScript

## Features

- **Responsive layout** with `DesktopNavbar` and `MobileNavbar`
- **Dark mode** styles out of the box
- **SEO-ready** metadata and OpenGraph in `src/app/layout.tsx`
- **Contact form API** with validation, rate limiting (5 msgs/hour/email), and persistence
- **Health endpoint** to check app and DB connectivity
- **Deployed on Vercel** compatible configuration

## Project Structure

```text
src/
  app/
    (profile)/
      home/page.tsx
      work/page.tsx
      projects/page.tsx
      contact/page.tsx
        _components/ContactForm.tsx
    admin/page.tsx
    api/
      health/route.ts
      contact/
        _model.ts
        route.ts
    globals.css
    layout.tsx
    page.tsx
  components/
    navbar/{DesktopNavbar.tsx, MobileNavbar.tsx}
    custom/{CustomButton.tsx, CustomNotification.tsx}
  lib/mongodbConfig.ts
public/
  images/, documents/
```

## Requirements

- Node.js 18+ (recommended 20+)
- A MongoDB connection string

### Environment Variables

Create `.env.local` in the project root with:

```bash
MONGODB_URI="your-mongodb-connection-string"
```

`src/lib/mongodbConfig.ts` requires `MONGODB_URI` and will throw if missing. It also caches connections for serverless environments.

## Scripts

```bash
# Start dev server (Turbopack)
npm run dev

# Build production
npm run build

# Start production
npm run start

# Lint
npm run lint
```

## Getting Started (Local)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Add `.env.local` with `MONGODB_URI`.
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`.

## API Reference

### Health Check
- **Endpoint**: `GET /api/health`
- **Response**:
  ```json
  {
    "status": "ok",
    "database": "connected" | "disconnected",
    "timestamp": "2025-01-01T00:00:00.000Z"
  }
  ```

### Contact Form
- **Endpoint**: `POST /api/contact`
- **Body**:
  ```json
  { "name": "John Doe", "email": "john@example.com", "message": "Hello!" }
  ```
- **Validation**:
  - All fields required
  - `name` ≤ 100 chars
  - `message` ≤ 1000 chars
  - Valid email format
  - Rate limit: max 5 messages/hour per email
- **Successful Response**: `201`
  ```json
  {
    "success": true,
    "message": "Message sent successfully!",
    "data": {
      "id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "remainingMessages": 4
    }
  }
  ```
- **Error Responses**:
  - `400` invalid input
  - `429` too many messages
  - `503` DB connection issue
  - `500` generic failure

## Deployment

- Set `MONGODB_URI` in your hosting provider (e.g., Vercel Project Settings → Environment Variables)
- Build command: `npm run build`
- Start command (if not serverless): `npm run start`

## Notes

- SEO metadata and OpenGraph are defined in `src/app/layout.tsx`.
- Tailwind CSS v4 is configured via PostCSS (`postcss.config.mjs`). No separate tailwind config file is required.
- `next.config.ts` may include custom dev origin settings; adjust as needed for your environment.

