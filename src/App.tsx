import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '@theme';
import { RootComponent } from '@components';

export const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<RootComponent />
		</ThemeProvider>
	);
};
