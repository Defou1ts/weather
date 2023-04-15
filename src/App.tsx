import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '@theme';
import { Root } from '@components';

export const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Root />
		</ThemeProvider>
	);
};
