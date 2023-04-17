import axios from 'axios';

import type { CitySearchResponse, DailyWeatherResponse, HourlyWeatherResponse } from '@interfaces';

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
	async getHourlyWeather(longitude: number, latitude: number) {
		const { data } = await openMeteoApiInstance.get<HourlyWeatherResponse>('', {
			params: {
				longitude,
				latitude,
				hourly: ['temperature_2m', 'weathercode'].join(','),
				forecast_days: 1,
			},
		});

		return data;
	},

	async getDailyWeather(longitude: number, latitude: number) {
		const { data } = await openMeteoApiInstance.get<DailyWeatherResponse>('', {
			params: {
				longitude,
				latitude,
				daily: ['weathercode', 'temperature_2m_max', 'temperature_2m_min'].join(','),
			},
		});

		return data;
	},

	async searchCityByName(city: string) {
		const { data } = await axios.get<CitySearchResponse>(`https://geocoding-${apiHost}/v1/search`, {
			params: {
				name: city,
			},
		});

		return data;
	},
};
