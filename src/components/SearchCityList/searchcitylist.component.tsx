import { useDispatch, useSelector } from 'react-redux';

import { selectSearchCitiesLoadingStatus, selectCitySearchResult, setCurrentCity, setLocation } from '@store';
import { LOADING_STATUS, SPINNER_SIZE } from '@constants';
import { Button, Spinner } from '@components';
import type { CityResult } from '@interfaces';

import { SearchCityListIemText, SearchCityListItemWrapper, SearchCityListWrapper } from './styled';

import type { SeachCityListProps } from './interfaces';

export const SearchCityList = ({ onClearInputValue }: SeachCityListProps) => {
	const dispatch = useDispatch();

	const searchCityLoadingStatus = useSelector(selectSearchCitiesLoadingStatus);
	const searchCityResult = useSelector(selectCitySearchResult);

	const handleSelectCity = (cityResult: CityResult) => () => {
		dispatch(setCurrentCity(cityResult));

		const { longitude, latitude } = cityResult;
		dispatch(
			setLocation({
				lon: longitude,
				lat: latitude,
			})
		);
		onClearInputValue();
	};

	if (searchCityLoadingStatus === LOADING_STATUS.LOADING) {
		return (
			<SearchCityListWrapper>
				<Spinner data-test-id="city-search-spinner" size={SPINNER_SIZE.LARGE} />
			</SearchCityListWrapper>
		);
	}

	return (
		<SearchCityListWrapper data-test-id="city-search-result-wrapper">
			{searchCityResult?.results?.map((cityResult) => {
				const { id, name, country, country_code: countryCode } = cityResult;

				return (
					<SearchCityListItemWrapper key={id}>
						<SearchCityListIemText>
							{name}, {country}, {countryCode}
						</SearchCityListIemText>
						<Button onClick={handleSelectCity(cityResult)}>select</Button>
					</SearchCityListItemWrapper>
				);
			})}
		</SearchCityListWrapper>
	);
};
