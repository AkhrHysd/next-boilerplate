import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Test } from './test'


export default {
  title: 'test',
  component: Test,
} as ComponentMeta<typeof Test>

export const Default: ComponentStoryObj<typeof Test> = {
  name: 'Default',
}
