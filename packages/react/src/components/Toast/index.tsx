import React, { ComponentProps, ReactNode } from "react";
import {
  TitleWrapper,
  ToastAction,
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from "./styles";

export type ToastProps = {
  title: string;
  description: string;
  action: ReactNode;
} & ComponentProps<typeof ToastContainer> &
  ComponentProps<typeof ToastRoot>;

export function Toast({ action, title, description, ...props }: ToastProps) {
  return (
    <ToastContainer {...props}>
      <ToastRoot {...props}>
        <TitleWrapper>
          <ToastTitle>{title}</ToastTitle>
          <ToastClose>X</ToastClose>
        </TitleWrapper>

        <ToastDescription>{description}</ToastDescription>
        {!!action && <ToastAction altText="">{action}</ToastAction>}
      </ToastRoot>

      <ToastViewport />
    </ToastContainer>
  );
}

Toast.displayName = "Toast";
