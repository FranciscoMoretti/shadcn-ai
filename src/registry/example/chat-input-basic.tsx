"use client";

import { useState } from "react";
import { ChatInput, ChatInputField, ChatInputActions } from "@/components/prismui/chat-input";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

export default function ChatInputBasic() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Submitted:", value);
      setValue("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <ChatInput>
      <ChatInputField
        value={value}
        onChange={setValue}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <ChatInputActions>
        <Button
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
          disabled={!value || isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? "..." : <SendIcon className="h-3 w-3 sm:h-4 sm:w-4" />}
        </Button>
      </ChatInputActions>
    </ChatInput>
  );
}

export const demoSource = `
"use client";

import { useState } from "react";
import { ChatInput, ChatInputField, ChatInputActions } from "@/components/prismui/chat-input";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

export default function ChatInputBasic() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Submitted:", value);
      setValue("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <ChatInput>
      <ChatInputField
        value={value}
        onChange={setValue}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <ChatInputActions>
        <Button
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
          disabled={!value || isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? "..." : <SendIcon className="h-3 w-3 sm:h-4 sm:w-4" />}
        </Button>
      </ChatInputActions>
    </ChatInput>
  );
}
`; 