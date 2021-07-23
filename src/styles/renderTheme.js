import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const renderTheme = () => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
