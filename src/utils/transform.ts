import type {
	City,
	CityResponse,
	DailyWeather,
	DailyWeatherResponse,
	HourlyWeather,
	HourlyWeatherResponse,
	TodayWeather,
	TodayWeatherResponse,
} from '@interfaces';

export const transformTodayWeatherResponse = (todayWeatherResponse: TodayWeatherResponse): TodayWeather => {
	const { weather, main, name: cityName } = todayWeatherResponse;
	const { icon: iconCode, description, id } = weather[0];
	const { feels_like: feelsLike, temp: temperature } = main;

	return {
		iconCode,
		description,
		feelsLike,
		temperature,
		cityName,
		id,
	};
};

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
