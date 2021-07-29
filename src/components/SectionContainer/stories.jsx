/* eslint-disable import/no-anonymous-default-export */
import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          corporis odit veritatis voluptas et explicabo. Itaque assumenda fuga
          iure nam hic placeat, magni sit tempore nobis tenetur accusamus.
          Nesciunt, sunt!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
