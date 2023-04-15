import styled from 'styled-components';

export const ForecastWeatherWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-template-rows: 1fr;

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
		grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
		row-gap: ${({ theme }) => theme.gaps[0]}px;
	}
`;
