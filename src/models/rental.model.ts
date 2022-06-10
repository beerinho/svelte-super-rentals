export type Rental = {
	id: string;
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
