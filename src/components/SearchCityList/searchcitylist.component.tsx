import { useDispatch, useSelector } from 'react-redux';

import { selectSearchCitiesLoadingStatus, selectCitySearchResult, setCurrentCity } from '@store';
import { LOADING_STATUS } from '@constants';
import { Button, Spinner } from '@components';
import type { CityResult } from '@interfaces';

import { SearchCityListItemWrapper, SearchCityListWrapper } from './styled';

import type { SeachCityListProps } from './interfaces';

export const SearchCityList = ({ onClearInputValue }: SeachCityListProps) => {
	const dispatch = useDispatch();

	const searchCityLoadingStatus = useSelector(selectSearchCitiesLoadingStatus);
	const searchCityResult = useSelector(selectCitySearchResult);

	const handleSelectCity = (cityResult: CityResult) => () => {
		dispatch(setCurrentCity(cityResult));
		onClearInputValue();
	};

	if (searchCityLoadingStatus === LOADING_STATUS.LOADING) {
		return (
			<SearchCityListWrapper>
				<Spinner size="l" />
			</SearchCityListWrapper>
		);
	}

	return (
		<SearchCityListWrapper>
			{searchCityResult?.results?.map((cityResult) => {
				const { id, name, country, country_code: countryCode } = cityResult;

				return (
					<SearchCityListItemWrapper key={id}>
						<p>
							{name}, {country}, {countryCode}
						</p>
						<Button onClick={handleSelectCity(cityResult)}>select</Button>
					</SearchCityListItemWrapper>
				);
			})}
		</SearchCityListWrapper>
	);
};
