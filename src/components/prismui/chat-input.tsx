import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
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
};
