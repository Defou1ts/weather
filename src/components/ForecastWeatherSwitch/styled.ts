import styled from 'styled-components';

export const ForecastWeatherSwitchWrapper = styled.div`
	grid-area: forecastswitch;

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: ${({ theme }) => theme.height[0]}px;
	column-gap: ${({ theme }) => theme.gaps[0]}px;
`;
