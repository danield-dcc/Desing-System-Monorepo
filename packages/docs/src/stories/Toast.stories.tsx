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


}as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
    args:{
      title: 'Agendamento realizado',
      description: 'Quarta-feira, 23 de Outubro às 16h',
      defaultOpen: true,

      swipeDirection:"right"
    },
}