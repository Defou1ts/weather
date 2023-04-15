import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';

import { Button, SearchCityList } from '@components';
import { fetchCityByName, setLocation } from '@store';
import { useCurrentLocation } from '@hooks';

import { SearchCityWrapper, SearchInput } from './styled';

export const SearchCity = () => {
	const { location } = useCurrentLocation();
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState<string | null>(null);

	const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleClearInputValue = () => {
		setInputValue('');
	};

	const handleClearCity = () => {
		dispatch(setLocation(location));
	};

	useEffect(() => {
		if (inputValue !== null) {
			dispatch(fetchCityByName(inputValue));
		}
	}, [inputValue]);

	return (
		<SearchCityWrapper>
			<Button onClick={handleClearCity}>Reset City</Button>
			<h3>Search city</h3>
			<SearchInput
				data-test-id="city-search-input"
				type="search"
				value={inputValue ?? ''}
				onChange={handleChangeInput}
			/>
			<SearchCityList onClearInputValue={handleClearInputValue} />
		</SearchCityWrapper>
	);
};
