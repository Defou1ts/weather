export interface HourlyWeatherResponse {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	hourly_units: HourlyUnits;
	hourly: Hourly;
}

export interface HourlyWeather {
	weatherCodeList: number[];
	temperatureList: number[];
	timeList: number[];
}

interface Hourly {
	time: number[];
	temperature_2m: number[];
	weathercode: number[];
}

interface HourlyUnits {
	time: string;
	temperature_2m: string;
	weathercode: string;
}
