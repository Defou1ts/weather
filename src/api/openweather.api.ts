import axios from 'axios';

import type { TodayWeather } from '@interfaces';

import type { AxiosInstance } from 'axios';

const token = process.env.REACT_APP_OPENWEATHER_API_KEY as string;

const instanceAxios: AxiosInstance = axios.create({
	baseURL: `https://api.openweathermap.org/data/2.5`,
});

export const openWeatherApi = {
	async getTodayWeather(city: string) {
		const { data } = await instanceAxios.get<TodayWeather>('/weather', {
			params: {
				q: city,
				appid: token,
				units: 'metric',
			},
		});

		return data;
	},
};
