import axios from 'axios';

import type { TodayWeatherResponse } from '@interfaces';

import type { AxiosInstance } from 'axios';

const token = process.env.REACT_APP_OPENWEATHER_API_KEY as string;

const openWeatherApiInstance: AxiosInstance = axios.create({
	baseURL: `https://api.openweathermap.org/data/2.5`,
	params: {
		appid: token,
		units: 'metric',
	},
});

export const openWeatherApi = {
	async getTodayWeatherByCityName(city: string) {
		const { data } = await openWeatherApiInstance.get<TodayWeatherResponse>('/weather', {
			params: {
				q: city,
			},
		});

		return data;
	},

	async getTodayWeatherByCoords(lon: number, lat: number) {
		const { data } = await openWeatherApiInstance.get<TodayWeatherResponse>('/weather', {
			params: {
				lat,
				lon,
			},
		});

		return data;
	},
};
