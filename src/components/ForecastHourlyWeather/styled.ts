import styled from 'styled-components';

export const ForecastHourlyWeatherTitle = styled.p`
	font-size: ${({ theme }) => theme.fontSize[2]}px;
	text-align: center;
`;

export const ForecastHourlyWeatherText = styled.p`
	font-size: ${({ theme }) => theme.fontSize[0]}px;
	text-align: center;
`;
