/* eslint-disable import/no-anonymous-default-export */
import { Menu } from '.';

import linksmock from '../NavLink/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksmock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '300vh', background: 'gray' }}>
      <Menu {...args} />
    </div>
  );
};
