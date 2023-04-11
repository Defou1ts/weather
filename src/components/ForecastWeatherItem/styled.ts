import styled from 'styled-components';

export const ForecastWeatherItemWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 82px repeat(auto, 1fr);
	align-items: center;
`;

export const ForecastWeatherItemText = styled.p`
	font-size: ${({ theme }) => theme.fontSize[2]}px;
	text-align: center;
`;

export const ForecastWeatherItemImageContainer = styled.div`
	justify-self: center;
`;
