export interface DailyWeather {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	daily_units: DailyUnits;
	daily: Daily;
}

interface Daily {
	time: number[];
	weathercode: number[];
	temperature_2m_max: number[];
	temperature_2m_min: number[];
}

interface DailyUnits {
	time: string;
	weathercode: string;
	temperature_2m_max: string;
	temperature_2m_min: string;
}
