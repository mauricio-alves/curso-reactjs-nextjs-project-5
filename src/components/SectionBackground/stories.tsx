import { SectionBackground, SectionBackgroundProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur alias, voluptatibus ducimus
          necessitatibus odio excepturi, ad nulla eum minima laborum, cupiditate vel praesentium cumque hic repellendus
          nam recusandae debitis omnis?
        </p>
      </div>
    ),
  },
  argsTypes: {
    children: { type: '' },
  },
} as Meta;

export const Template: Story<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
