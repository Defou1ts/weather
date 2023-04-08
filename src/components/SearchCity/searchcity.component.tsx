import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';

import { SearchCityList } from '@components';
import { fetchCityByName } from '@store';

import { SearchCityWrapper, SearchInput } from './styled';

export const SearchCity = () => {
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState<string>('');

	const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleClearInputValue = () => {
		setInputValue('');
	};

	useEffect(() => {
		dispatch(fetchCityByName(inputValue));
	}, [inputValue]);

	return (
		<SearchCityWrapper>
			<h3>Search city</h3>
			<SearchInput type="search" value={inputValue} onChange={handleChangeInput} />
			<SearchCityList onClearInputValue={handleClearInputValue} />
		</SearchCityWrapper>
	);
};
