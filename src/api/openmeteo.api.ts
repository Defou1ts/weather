import axios from 'axios';

import type { CitySearchResult, DailyWeather, HourlyWeather } from '@interfaces';

import type { AxiosInstance } from 'axios';

const apiHost = 'api.open-meteo.com';

const openMeteoApiInstance: AxiosInstance = axios.create({
	baseURL: `https://${apiHost}/v1/forecast`,
	params: {
		timezone: 'Europe/Moscow',
		timeformat: 'unixtime',
	},
});

export const openMeteoApi = {
	async getHourlyWeather(longitude: string, latitude: string) {
		const { data } = await openMeteoApiInstance.get<HourlyWeather>('', {
			params: {
				longitude,
				latitude,
				hourly: ['temperature_2m', 'weathercode'].join(','),
				forecast_days: 1,
			},
		});

		return data;
	},

	async getDailyWeather(longitude: string, latitude: string) {
		const { data } = await openMeteoApiInstance.get<DailyWeather>('', {
			params: {
				longitude,
				latitude,
				daily: ['weathercode', 'temperature_2m_max', 'temperature_2m_min'].join(','),
			},
		});

		return data;
	},

	async searchCityByName(city: string) {
		const { data } = await axios.get<CitySearchResult>(`https://geocoding-${apiHost}/v1/search`, {
			params: {
				name: city,
			},
		});

		return data;
	},
};
