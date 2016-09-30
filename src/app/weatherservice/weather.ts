export class Weather {
	approvedTime: Date;
	referenceTime: Date;
	geometry: Geometry;
	timeSeries: Time[];
}

export class Geometry {
	type: string;
	coordinates: number[];
}

export class Time {
	validTime: Date;
	parameters: Parameter;
}

export class Parameter {
	name: string;
	levelType: string;
	level: number;
	unit: string;
	values: number[];
}

export class Forecast {
	snow: ForecastEntity[];
	rain: ForecastEntity[];
	temperature: ForecastEntity[];
	wind: ForecastEntity[];
}

export class ForecastEntity {
	unit: string;
	value: number;
	time: Date;
}