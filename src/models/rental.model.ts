export type Rental = {
	title: string;
	image: string;
	description: string;
	owner: string;
	category: string;
	type: string;
	city: string;
	bedrooms: number;
	location: {
		lat: string;
		lng: string;
	};
};
