import styled from 'styled-components';

export const SearchCityWrapper = styled.div`
	position: relative;
	grid-area: search;
`;

export const SearchInput = styled.input`
	height: ${({ theme }) => theme.height[3]}px;
	padding: ${({ theme }) => theme.padding[2]}px;

	font-size: ${({ theme }) => theme.fontSize[3]}px;

	border-radius: ${({ theme }) => theme.borderRadius[0]}px;

	&:focus {
		outline: 1px solid;
	}

	width: 100%;

	transition: all 0.2s ease;
`;
