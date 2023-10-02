import React, { ComponentProps, ReactNode } from "react";
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipTriggerContent,
} from "./styles";

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  content?: any;
  title: string;
}

export function Tooltip({ content, title, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <TooltipTriggerContent>{content}</TooltipTriggerContent>
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent sideOffset={5} {...props}>
            {title}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
}

Tooltip.displayName = "Tooltip";
