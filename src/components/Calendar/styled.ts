import styled from 'styled-components';

export const CalendarWrapper = styled.div`
	grid-area: calendar;
`;

export const CalendarEventsWrapper = styled.div`
	margin-top: ${({ theme }) => theme.margin[0]}px;
	display: grid;
	grid-template-columns: 1fr;
	row-gap: ${({ theme }) => theme.gaps[5]}px;
`;
