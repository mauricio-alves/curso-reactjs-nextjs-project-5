import { TextComponent } from '.';

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
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
