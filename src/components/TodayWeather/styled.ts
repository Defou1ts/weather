import styled from 'styled-components';

export const TodayWeatherWrapper = styled.div`
	grid-area: today;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(auto, 5);
	justify-content: center;
	align-items: center;


`;

export const TodayWeatherText = styled.p`
	font-size: ${({ theme }) => theme.fontSize[2]}px;
	text-align: center;
`;

export const TodayWeatherImage = styled.img`
	justify-self: center;
`;
