import { ThemeProvider } from 'styled-components';

import { theme } from '@theme';

export const App = (): JSX.Element => {
	return <ThemeProvider theme={theme}>Hello</ThemeProvider>;
};
