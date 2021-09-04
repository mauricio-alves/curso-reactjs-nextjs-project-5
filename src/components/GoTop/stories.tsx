import { GoTop } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <GoTop {...args} />
    </div>
  );
};
