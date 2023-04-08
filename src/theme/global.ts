import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		margin: 0;
		padding: 0;
		font-family: var(--font-family);
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	button {
		border: none;
	}

	li {
		list-style-type: none; 
	}
	
	ul {
		margin-left: 0;
		padding-left: 0; 
	}

	:root {
		--font-family: "Helvetica Neue", sans-serif;
	}
`;
