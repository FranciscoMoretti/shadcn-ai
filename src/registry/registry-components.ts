// DO NOT REMOVE - Component Registry Guide
/**
 * This file registers UI components for the PrismUI registry.
 * To add a new component:
 * 1. Create the component in src/components/prismui/[component-name].tsx
 * 2. Add a new entry to the components array below
 * 3. Run `pnpm build:registry` to update the registry
 *
 * Each component must follow this structure to be properly displayed in the documentation.
 *
 * Component Registration Schema:
 * {
 *   name: "component-name",          // Name of the component (must be unique)
 *   type: "registry:ui",             // Type must be "registry:ui"
 *   category: "components",          // Category for documentation organization
 *   subcategory: "display",          // Subcategory (display|layout|form|navigation|etc)
 *   code: `"use client";            // The component source code that will be displayed
 *
 *     import { cn } from "@/lib/utils";
 *
 *     interface ComponentProps {
 *       // Props definition
 *     }
 *
 *     export default function Component({ ...props }: ComponentProps) {
 *       return (
 *         // Component implementation
 *       );
 *     }`,
 *   files: [{                       // Component file information
 *     path: "components/prismui/component-name.tsx",
 *     type: "registry:ui"
 *   }],
 *   cli: {                          // REQUIRED: CLI installation commands
 *     npm: "npx prismui@latest add component-name",
 *     pnpm: "pnpm dlx prismui@latest add component-name",
 *     yarn: "yarn dlx prismui@latest add component-name",
 *     bun: "bunx prismui@latest add component-name"
 *   },
 *   dependencies: ["@/lib/utils"]    // Required component dependencies
 * }
 *
 * IMPORTANT:
 * - Always include CLI commands for all package managers (npm, pnpm, yarn, bun)
 * - Use proper TypeScript types and interfaces
 * - Follow the design system color tokens and styling
 * - Include all necessary imports and dependencies
 * - Add detailed comments for complex logic
 * - Use consistent naming conventions
 */

import { type RegistryItem } from "./schema";

export const components: RegistryItem[] = [
  {
    name: "expandable-card",
    type: "registry:ui",
    category: "components",
    subcategory: "display",
    code: `"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  GitBranch,
  Github,
  MessageSquare,
  StepForwardIcon as Progress,
  Star,
  Users,
  CheckCircle2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { useState, useCallback } from "react";
import { useSpring } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


interface ProjectStatusCardProps {
  title: string;
  progress: number;
  dueDate: string;
  contributors: Array<{ name: string; image?: string }>;
  tasks: Array<{ title: string; completed: boolean }>;
  githubStars: number;
  openIssues: number;
}

export function useExpandable(initialState = false) {
  const [isExpanded, setIsExpanded] = useState(initialState);

  const springConfig = { stiffness: 300, damping: 30 };
  const animatedHeight = useSpring(0, springConfig);

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return { isExpanded, toggleExpand, animatedHeight };
}


export function ProjectStatusCard({
  title,
  progress,
  dueDate,
  contributors,
  tasks,
  githubStars,
  openIssues,
}: ProjectStatusCardProps) {
  const { isExpanded, toggleExpand, animatedHeight } = useExpandable();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      animatedHeight.set(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, animatedHeight]);

  return (
    <Card
      className="w-full max-w-md cursor-pointer transition-all duration-300 hover:shadow-lg"
      onClick={toggleExpand}
    >
      <CardHeader className="space-y-1">
        <div className="flex justify-between items-start w-full">
          <div className="space-y-2">
            <Badge
              variant="secondary"
              className={
                progress === 100
                  ? "bg-green-100 text-green-600"
                  : "bg-blue-100 text-blue-600"
              }
            >
              {progress === 100 ? "Completed" : "In Progress"}
            </Badge>
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View on GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <ProgressBar value={progress} className="h-2" />
          </div>

          <motion.div
            style={{ height: animatedHeight }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div ref={contentRef}>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 pt-2"
                  >
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Due {dueDate}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-400" />
                          <span>{githubStars}</span>
                        </div>
                        <div className="flex items-center">
                          <GitBranch className="h-4 w-4 mr-1" />
                          <span>{openIssues} issues</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Contributors
                      </h4>
                      <div className="flex -space-x-2">
                        {contributors.map((contributor, index) => (
                          <TooltipProvider key={index}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Avatar className="border-2 border-white">
                                  <AvatarImage
                                    src={
                                      contributor.image ||
                                      \`/placeholder.svg?height=32&width=32&text=\${contributor.name[0]}\`
                                    }
                                    alt={contributor.name}
                                  />
                                  <AvatarFallback>
                                    {contributor.name[0]}
                                  </AvatarFallback>
                                </Avatar>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{contributor.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Recent Tasks</h4>
                      {tasks.map((task, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-gray-600">{task.title}</span>
                          {task.completed && (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        View Discussion
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex items-center justify-between w-full text-sm text-gray-600">
          <span>Last updated: 2 hours ago</span>
          <span>{openIssues} open issues</span>
        </div>
      </CardFooter>
    </Card>
  );
}`,
    files: [
      {
        path: "components/prismui/expandable-card.tsx",
        type: "registry:ui",
      },
    ],
    cli: {
      npm: 'npx shadcn@latest add "https://www.prismui.tech/r/styles/default/expandable-card.json"',
      pnpm: 'pnpm dlx shadcn@latest add "https://www.prismui.tech/r/styles/default/expandable-card.json"',
      yarn: 'yarn dlx shadcn@latest add "https://www.prismui.tech/r/styles/default/expandable-card.json"',
      bun: 'bunx shadcn@latest add "https://www.prismui.tech/r/styles/default/expandable-card.json"',
    },
    dependencies: ["framer-motion", "lucide-react"],
  },
  {
    name: "chat-input",
    type: "registry:ui",
    category: "components",
    subcategory: "form",
    code: `"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SendIcon } from "lucide-react";
import * as React from "react";

interface ChatInputProps {
  className?: string;
  children?: React.ReactNode;
}

interface ChatInputFieldProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  isLoading?: boolean;
  className?: string;
}

interface ChatInputActionsProps {
  className?: string;
  children?: React.ReactNode;
}

const ChatInput = React.forwardRef<HTMLDivElement, ChatInputProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex h-full w-full max-w-full flex-1 items-center cursor-text rounded-3xl border p-1 sm:p-1.5 shadow-[0_9px_9px_0px_rgba(0,0,0,0.01),_0_2px_5px_0px_rgba(0,0,0,0.06)] transition-colors dark:border-none dark:shadow-none dark:bg-[#303030]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ChatInput.displayName = "ChatInput";

const ChatInputField = React.forwardRef<HTMLInputElement, ChatInputFieldProps>(
  ({ value, onChange, onSubmit, isLoading, className, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey && onSubmit && value && !isLoading) {
        e.preventDefault();
        onSubmit();
      }
    };

    return (
      <Input
        ref={ref}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        onKeyDown={handleKeyDown}
        placeholder="Your Article Title..."
        className={cn(
          "w-full ml-1 border-0 bg-transparent p-1 sm:p-2 focus-visible:ring-0 shadow-none outline-none",
          className
        )}
        style={{
          WebkitBoxShadow: "none",
          MozBoxShadow: "none",
          boxShadow: "none",
        }}
        {...props}
      />
    );
  }
);
ChatInputField.displayName = "ChatInputField";

const ChatInputActions = React.forwardRef<
  HTMLDivElement,
  ChatInputActionsProps
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex items-center", className)} {...props}>
      {children}
    </div>
  );
});
ChatInputActions.displayName = "ChatInputActions";

export {
  ChatInput,
  ChatInputActions,
  ChatInputField,
  type ChatInputActionsProps,
  type ChatInputFieldProps,
  type ChatInputProps,
};`,
    files: [
      {
        path: "components/prismui/chat-input.tsx",
        type: "registry:ui",
      },
    ],
    cli: {
      npm: 'npx shadcn@latest add "https://www.prismui.tech/r/styles/default/chat-input.json"',
      pnpm: 'pnpm dlx shadcn@latest add "https://www.prismui.tech/r/styles/default/chat-input.json"',
      yarn: 'yarn dlx shadcn@latest add "https://www.prismui.tech/r/styles/default/chat-input.json"',
      bun: 'bunx shadcn@latest add "https://www.prismui.tech/r/styles/default/chat-input.json"',
    },
    dependencies: ["lucide-react", "@/components/ui/button", "@/components/ui/input"],
  },
];
