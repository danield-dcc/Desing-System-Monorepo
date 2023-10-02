import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, Tooltip, TooltipProps } from "@danieldcc-ignite-ui/react";

export default {
  title: "Form/Tooltip",
  component: Tooltip,
  args: {
    content: (
      <Box
        css={{
          background: "$gray600",
          width: "$3",
          height: "$3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          border: "1px solid $gray400",
        }}
      >
        <Text css={{ color: "$gray100", fontFamily: "$default" }}>26</Text>
      </Box>
    ),
    title: "26 de Outubro - Indisponível",
  },

} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {
  args: {
    
    title: "21 de Outubro - Indisponível",
  },
};
