import { useDeferredValue, useEffect, useState } from 'react';

import { openMeteoApi } from '@api';
import type { CitySearchResult, DailyWeather } from '@interfaces';

export const App = (): JSX.Element | null => {
	const [hourlyWeather, setHourlyWeather] = useState<DailyWeather | null>(null);
	const [cities, setCities] = useState<CitySearchResult | null>(null);
	const [value, setValue] = useState<string>('');

	const valueForFetch = useDeferredValue(value);

	const { getDailyWeather, searchCityByName } = openMeteoApi;

	useEffect(() => {
		void getDailyWeather('55.1904', '30.2049').then((data) => {
			setHourlyWeather(data);
		});
	}, []);

	useEffect(() => {
		console.log(hourlyWeather);
	}, [hourlyWeather]);

	useEffect(() => {
		void searchCityByName(valueForFetch).then((data) => {
			setCities(data);
		});
	}, [valueForFetch]);

	return (
		<div>
			<input
				type="text"
				onChange={(e) => {
					setValue(e.target.value);
				}}
				value={value}
			/>
			{cities?.results?.map((result) => (
				<div key={result.id}>
					<p>
						{result.name}, {result.country}, {result.longitude}, {result.latitude}
					</p>
				</div>
			))}
		</div>
	);
};
