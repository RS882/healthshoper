export interface IItem {
	id: number;
	title: string;
	price: number;
	oldPreise: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
	banners: string[];
}