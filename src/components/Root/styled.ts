import styled from 'styled-components';

import { BackgroundImage } from '@assets';

export const Layout = styled.div`
	display: grid;
	grid-template-areas: '. . .' '. main .' '. . .';
	grid-template-columns: auto minmax(0, ${({ theme }) => theme.width[1]}px) auto;
	grid-template-rows: auto minmax(0, ${({ theme }) => theme.height[1]}px) auto;

	background: url(${BackgroundImage});

	width: ${({ theme }) => theme.width[2]}vw;
	height: ${({ theme }) => theme.height[2]}vh;
`;

export const ContentWrapper = styled.main`
	grid-area: main;

	display: grid;
	grid-template-areas:
		'clock search'
		'calendar .'
		'calendar switcher'
		'weather weather';

	background-color: ${({ theme }) => theme.colors.backgroundWhite};
	backdrop-filter: blur(${({ theme }) => theme.blur[0]}px);

	padding: ${({ theme }) => theme.padding[0]}px;
`;

export const WeatherWrapper = styled.div`
	grid-area: weather;
`;
