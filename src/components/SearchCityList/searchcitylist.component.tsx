import { useDispatch, useSelector } from 'react-redux';

import { selectSearchCitiesLoadingStatus, selectCitySearchResult, setCurrentCity, setLocation } from '@store';
import { LOADING_STATUS, SPINNER_SIZE } from '@constants';
import { Button, Spinner } from '@components';
import type { City } from '@interfaces';

import { SearchCityListIemText, SearchCityListItemWrapper, SearchCityListWrapper } from './styled';

import type { SeachCityListProps } from './interfaces';

export const SearchCityList = ({ onClearInputValue }: SeachCityListProps) => {
	const dispatch = useDispatch();

	const searchCityLoadingStatus = useSelector(selectSearchCitiesLoadingStatus);
	const searchCityResult = useSelector(selectCitySearchResult);

	const handleSelectCity = (city: City) => () => {
		dispatch(setCurrentCity(city));

		const { lon, lat } = city;
		dispatch(
			setLocation({
				lon,
				lat,
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
			{searchCityResult?.map((city) => {
				const { id, name, country, countryCode } = city;

				return (
					<SearchCityListItemWrapper key={id}>
						<SearchCityListIemText>
							{name}, {country}, {countryCode}
						</SearchCityListIemText>
						<Button onClick={handleSelectCity(city)}>select</Button>
					</SearchCityListItemWrapper>
				);
			})}
		</SearchCityListWrapper>
	);
};
