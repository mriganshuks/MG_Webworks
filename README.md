# MG Webworks

A premium digital agency website built with Next.js, featuring dark futuristic design, neon green accents, glassmorphism, and smooth animations.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Secure Lead Management Setup

The contact form now uses a secure server-side workflow to capture all inquiries, persist them, and send professional emails without exposing private details on the client.

### Required environment variables

Create a `.env.local` file in the project root with:

```bash
BUSINESS_EMAIL=mgwebworksglobal@gmail.com
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL="MG Webworks <onboarding@resend.dev>"
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### What happens on submission

1. The form validates every required field on the server.
2. The lead is stored in Supabase when configured, otherwise it is appended to a local JSONL file for development.
3. A formatted notification email is sent to mgwebworksglobal@gmail.com.
4. A confirmation email is sent to the client.
5. The workflow uses AI-assisted categorization, urgency detection, and priority scoring internally.

### Deployment note

Add the same environment variables to your Vercel or hosting platform settings before deployment.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Don't forget to add your EmailJS environment variables in your Vercel project settings for production deployment.
