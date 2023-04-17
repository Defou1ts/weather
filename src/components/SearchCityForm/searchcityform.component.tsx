import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { Button, SearchCityList } from '@components';
import { fetchCityByName, setLocation } from '@store';
import { useCurrentLocation } from '@hooks';

import { SearchCityWrapper, SearchInput } from './styled';

import type { HandleChangeForm, HandleResetForm } from './types';
import type { CityFormState } from './interfaces';

const initialValues: CityFormState = {
	city: '',
};

export const SearchCity = () => {
	const { location } = useCurrentLocation();
	const dispatch = useDispatch();

	const handleClearCity = () => {
		dispatch(setLocation(location));
	};

	const handleChangeForm: HandleChangeForm = (handleChange) => (event) => {
		handleChange(event);
		dispatch(fetchCityByName(event.target.value));
	};

	const handleResetForm: HandleResetForm = (handleReset) => (event?) => {
		handleReset(event);
		dispatch(fetchCityByName(event?.target.value ?? ''));
	};

	const handleFormSubmit = (values: CityFormState) => {
		dispatch(fetchCityByName(values.city));
	};

	return (
		<SearchCityWrapper>
			<Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
				{({ values, handleChange, handleReset }) => (
					<Form>
						<Button onClick={handleClearCity}>Reset City</Button>
						<h3>Search city</h3>
						<SearchInput
							name="city"
							id="city"
							data-test-id="city-search-input"
							type="search"
							value={values.city}
							onChange={handleChangeForm(handleChange)}
						/>
						<SearchCityList onClearInputValue={handleResetForm(handleReset)} />
					</Form>
				)}
			</Formik>
		</SearchCityWrapper>
	);
};
