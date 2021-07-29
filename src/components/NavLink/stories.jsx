/* eslint-disable import/no-anonymous-default-export */
import { NavLink } from '.';
import links from './mock';

export default {
  title: 'NavLink',
  component: NavLink,
  args: {
    links: links,
  },
};

export const Template = (args) => {
  return <NavLink {...args} />;
};
