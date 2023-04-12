import styled from 'styled-components';

import type { RootBackground } from './interfaces';

export const Layout = styled.div<RootBackground>`
	display: grid;
	grid-template-areas: '. . .' '. main .' '. . .';
	grid-template-columns: auto minmax(0, ${({ theme }) => theme.width[1]}px) auto;
	grid-template-rows: auto auto auto;

	background: url(${({ background }) => background}) repeat;
	background-size: 100%;

	width: ${({ theme }) => theme.width[2]}vw;
	min-height: ${({ theme }) => theme.height[2]}vh;
`;

export const ContentWrapper = styled.main`
	grid-area: main;
	row-gap: ${({ theme }) => theme.gaps[5]}px;

	display: grid;
	grid-template-areas:
		'clock search'
		'calendar .'
		'calendar .'
		'todayswitcher forecastswitch'
		'weather weather';

	background-color: ${({ theme }) => theme.colors.transparentWhite};
	backdrop-filter: blur(${({ theme }) => theme.blur[0]}px);

	padding: ${({ theme }) => theme.padding[0]}px;
`;

export const WeatherWrapper = styled.div`
	grid-area: weather;
	display: grid;
	grid-template-columns: minmax(0px, 200px) 1fr;

	background-color: ${({ theme }) => theme.colors.transparentWhite};
	border-radius: ${({ theme }) => theme.borderRadius[1]}px;
	padding: ${({ theme }) => theme.padding[3]}px;

	grid-template-areas: 'today forecast';
`;
