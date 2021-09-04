import { TextComponent, TextComponentProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quasi repellendus perspiciatis sequi nemo eligendi, eveniet ab, neque, recusandae dolore enim. Atque, dolorum illum. Repellendus ex in tempore temporibus natus.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
