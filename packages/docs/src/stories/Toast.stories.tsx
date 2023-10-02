import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Toast, ToastProps } from '@danieldcc-ignite-ui/react'

export default {
    title: 'Form/Toast',
    component: Toast,
    args: {
      title: 'Agendamento realizado',
      description: 'Quarta-feira, 23 de Outubro às 16h',
      open: true
    },
    // decorators: [
    //     (Story) => {
    //       return (
    //         <Box
    //           as="label"
    //           css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
    //         >
    //           {Story()}
    //           <Text size="sm" css={{ color: '$white', fontFamily: '$default' }}>
    //             Accept terms of use
    //             vai Toast
    //           </Text>
    //         </Box>
    //       )
    //     },
    //   ],

}as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
    args:{
      title: 'Agendamento realizado',
      description: 'Quarta-feira, 23 de Outubro às 16h',
      defaultOpen: true,

      swipeDirection:"right"
    },
}