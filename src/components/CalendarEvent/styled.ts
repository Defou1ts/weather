import styled from 'styled-components';

export const CalendarEventWrapper = styled.div`
	width: ${({ theme }) => theme.width[2]}%;
	border-radius: ${({ theme }) => theme.borderRadius[1]}px;
	padding: ${({ theme }) => theme.padding[4]}px;
	font-size: ${({ theme }) => theme.fontSize[6]}px;
	background-color: ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.white};
`;
