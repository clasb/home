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
	parameters: Parameters;
}

export class Parameters {
	name: string;
	levelType: string;
	level: number;
	unit: string;
	values: number[];
}