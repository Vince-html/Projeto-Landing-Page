import { render } from '@testing-library/react';
import Home from './index';

describe('<Home/>', () => {
  it('should render home', () => {
    render(<Home />);
  });
});
