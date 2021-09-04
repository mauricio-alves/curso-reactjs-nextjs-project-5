import { Heading, HeadingProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
    light: false,
  },
  argTypes: {
    children: { types: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Light: Story<HeadingProps> = (args) => <Heading {...args} />;
export const Dark: Story<HeadingProps> = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texto está claro',
  colorDark: false,
};
