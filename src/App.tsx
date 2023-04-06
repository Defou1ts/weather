import { useEffect } from 'react';

import {
	fetchTodayWeather,
	selectTodayWeather,
	selectTodayWeatherLoadingStatus,
	useAppDispatch,
	useAppSelector,
} from '@store';

export const App = (): JSX.Element | null => {
	const todayWeather = useAppSelector(selectTodayWeather);
	const todayWeatherLoadingStatus = useAppSelector(selectTodayWeatherLoadingStatus);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			fetchTodayWeather({
				lon: 55,
				lat: 30,
			})
		);
	}, []);

	console.log(todayWeather, todayWeatherLoadingStatus);

	return <div></div>;
};
