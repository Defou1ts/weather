import styled from 'styled-components';

export const SearchCityListWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.white};

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(1fr, auto);

	width: ${({ theme }) => theme.width[2]}%;
	left: 0;

	position: absolute;
	z-index: 1;
	max-height: ${({ theme }) => theme.height[4]}px;
	overflow-y: auto;
`;

export const SearchCityListItemWrapper = styled.div`
	height: ${({ theme }) => theme.height[5]}px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.black};
	display: grid;
	grid-template-columns: 1fr auto;

	align-items: center;
	padding: ${({ theme }) => theme.padding[3]}px;
`;

export const SearchCityListIemText = styled.p`
	font-size: ${({theme})=> theme.fontSize[0]};
`