import React, { ComponentProps, forwardRef, ElementRef } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";
import { VariantProps } from '@stitches/react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  containerProps?: ComponentProps<typeof TextInputContainer>
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, containerProps, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    );
  }
);

TextInput.displayName = "TextInput";
