import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  arg: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Maxime officia cupiditate cum 
    quisquam laborum atque, sapiente pariatur deserunt iure, facere eius dicta 
    reiciendis nostrum adipisci nulla soluta unde dolorum tenetur.`,
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
