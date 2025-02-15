export interface DocsConfig {
  sidebarNav: {
    title: string;
    items: {
      title: string;
      href: string;
      disabled?: boolean;
      isNew?: boolean;
      isPro?: boolean;
    }[];
  }[];
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
      ],
    },
    {
      title: "Templates",
      items: [
        {
          title: "Prism Homepage",
          href: "/docs/templates/prismui-homepage",
          isNew: true,
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Chat Input",
          href: "/docs/components/chat-input",
          isNew: true,
        },
        {
          title: "Expandable Card",
          href: "/docs/components/expandable-card",
        }
      ],
    }  ],
} as const;
