export interface CitySearchResponse {
	results?: CityResponse[];
	generationtime_ms: number;
}

export interface CityResponse {
	id: number;
	name: string;
	latitude: number;
	longitude: number;
	elevation: number;
	feature_code: string;
	country_code: string;
	admin1_id?: number;
	admin2_id?: number;
	admin3_id?: number;
	timezone: string;
	population?: number;
	postcodes?: string[];
	country_id: number;
	country: string;
	admin1?: string;
	admin2?: string;
	admin3?: string;
}

export interface City {
	id: number;
	name: string;
	country: string;
	countryCode: string;
	lat: number;
	lon: number;
}
