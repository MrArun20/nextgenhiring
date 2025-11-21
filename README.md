# NextGen Hiring Solutions

A modern, responsive website for NextGen Hiring Solutions - a staffing and workforce delivery partner specializing in logistics and enterprise talent across India.

## Features

- **Multi-page Application**: Home, Services, Industries, Jobs, Clients, About, Contact, Privacy, Terms, and 404 pages
- **Dynamic Content**: All features, industries, testimonials, jobs, and case studies loaded from JSON
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Animations**: Framer Motion page transitions, scroll animations, and micro-interactions
- **Accessibility**: Respects prefers-reduced-motion, ARIA labels, keyboard navigation
- **Forms**: React Hook Form with Zod validation for job applications and contact forms
- **SEO Optimized**: Dynamic meta tags, Open Graph, and Twitter Cards
- **Modern Stack**: React 18, TypeScript, Vite, Tailwind CSS

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Brand Colors

- Primary: `#1E3A8A` (Deep Blue)
- Secondary: `#0EA5A8` (Teal)
- Accent: `#22D3EE` (Cyan)
- Background: `#0B1220` (Dark Navy)
- Surface: `#0F172A` (Slate)

## Project Structure

```
src/
├── api/              # API client and data fetching
├── assets/           # Static assets
├── components/
│   ├── ui/          # Reusable UI components (Button, FormInput, etc.)
│   ├── features/    # Feature-specific components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── FloatingWhatsApp.tsx
├── content/         # JSON data files
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── routes/          # Page components

public/
└── content/         # JSON content files
    ├── features.json
    ├── industries.json
    ├── testimonials.json
    ├── jobs.json
    └── case-studies.json
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` and set:
- `VITE_WA_PHONE`: WhatsApp phone number (e.g., 919876543210)
- `VITE_WA_DEFAULT_TEXT`: Default WhatsApp message

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Key Features

### WhatsApp Integration
- Floating WhatsApp button opens chat in new tab
- Configurable phone number and default message via environment variables
- Respects reduced motion preferences

### Dynamic Job Board
- Filter by city, shift, and search query
- Quick apply modal with form validation
- Real-time client-side filtering

### Case Studies & Testimonials
- Carousel with navigation
- Detailed metrics with before/after comparisons
- Star ratings and client information

### Contact Form
- Multi-field validation
- Role selection dropdown
- Privacy consent checkbox
- Success notifications

### SEO & Performance
- Dynamic meta tags per page
- Lazy-loaded routes
- Code splitting
- Optimized images
- Google Fonts preloaded

## Customization

### Update Content
All content is in `public/content/*.json` files. Edit these to change:
- Features
- Industries served
- Client testimonials
- Job listings
- Case studies

### Styling
Brand colors and theme are in `tailwind.config.js`. Update the `extend.colors` section to change the color scheme.

### Forms
Form schemas are defined with Zod in each component. Update the schema to add/remove fields or change validation rules.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The build produces optimized bundles with:
- Code splitting by route
- Tree shaking
- Minification
- CSS purging

## Deployment

Build the project and deploy the `dist` folder to any static hosting service:

```bash
npm run build
```

Recommended hosts:
- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront

## License

Copyright © 2025 NextGen Hiring Solutions. All rights reserved.
