export const siteConfig = {
  name: "Shadcn AI",
  description: "AI Components with Shadcn UI",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["Shadcn UI", "AI", "Next.js", "React", "Tailwind CSS"],
  links: {
    email: "franciscoemoretti@gmail.com",
    twitter: "https://twitter.com/franmoretti_",
    github: "https://github.com/FranciscoMoretti/shadcn-ai",
  },
  header: [
    {
      href: "/docs",
      label: "Docs",
    },
    {
      href: "/docs/components/expandable-card",
      label: "Components",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
