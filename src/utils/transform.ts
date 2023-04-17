import type {
	City,
	CityResponse,
	DailyWeather,
	DailyWeatherResponse,
	HourlyWeather,
	HourlyWeatherResponse,
} from '@interfaces';

export const transformDailyWeatherResponse = (dailyWeatherResponse: DailyWeatherResponse): DailyWeather => {
	const {
		weathercode: weatherCodeList,
		temperature_2m_max: temperatureMaxList,
		temperature_2m_min: temperatureMinList,
		time: times,
	} = dailyWeatherResponse.daily;

	return {
		weatherCodeList,
		temperatureMinList,
		temperatureMaxList,
		times,
	};
};

export const transformHourlyWeatherResponse = (hourlyWeatherResponse: HourlyWeatherResponse): HourlyWeather => {
	const {
		weathercode: weatherCodeList,
		temperature_2m: temperatureList,
		time: timeList,
	} = hourlyWeatherResponse.hourly;

	return {
		weatherCodeList,
		temperatureList,
		timeList,
	};
};

export const transformCityResponse = (cityResult: CityResponse): City => {
	const { id, name, country, country_code: countryCode, longitude: lon, latitude: lat } = cityResult;

	return {
		id,
		name,
		countryCode,
		country,
		lon,
		lat,
	};
};
