// DO NOT REMOVE - Examples Registry Guide
/**
 * This file registers examples for the PrismUI registry.
 * Each example must follow this structure to be properly displayed in the documentation.
 *
 * Example Registration Schema:
 * {
 *   name: "component-demo",          // Name of the example (must be unique)
 *   type: "examples",                // Type must be "examples"
 *   component: ComponentDemo,        // The actual React component
 *   code: ComponentDemoSource,       // Import the source code directly from the file
 *   dependencies: ["@/components/prismui/component"] // Required component imports
 * }
 *
 * IMPORTANT:
 * - Import the source code directly from the demo file to avoid duplication
 * - Include all necessary imports in the demo file
 * - Use proper formatting and comments in the code
 * - List all dependencies that the example requires
 * - Follow the design system color tokens (e.g., text-primary, bg-secondary)
 */

import { type RegistryItem } from "./schema";
import ExpandableCardBasic, {
  demoSource as ExpandableCardBasicSource,
} from "./example/expandable-card-basic";
import ExpandableCardDemo, {
  demoSource as ExpandableCardDemoSource,
} from "./example/expandable-card-demo";
import ChatInputBasic, { demoSource as ChatInputBasicSource } from "./example/chat-input-basic";
import ChatInputDemo, { demoSource as ChatInputDemoSource } from "./example/chat-input-demo";

export const examples: RegistryItem[] = [
  {
    name: "expandable-card-basic",
    type: "examples",
    component: ExpandableCardBasic,
    code: ExpandableCardBasicSource,
    dependencies: ["@/components/prismui/expandable-card"],
  },
  {
    name: "expandable-card-demo",
    type: "examples",
    component: ExpandableCardDemo,
    code: ExpandableCardDemoSource,
    dependencies: ["@/components/prismui/expandable-card"],
  },
  {
    name: "chat-input-basic",
    type: "examples",
    component: ChatInputBasic,
    code: ChatInputBasicSource,
    dependencies: [
      "@/components/prismui/chat-input",
      "@/components/ui/button",
      "lucide-react"
    ],
  },
  {
    name: "chat-input-demo",
    type: "examples",
    component: ChatInputDemo,
    code: ChatInputDemoSource,
    dependencies: [
      "@/components/prismui/chat-input",
      "@/components/ui/button",
      "@/components/ui/card",
      "lucide-react"
    ],
  },
];
