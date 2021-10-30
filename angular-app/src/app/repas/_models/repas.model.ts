
export interface IRepas { 
	id?: number;
	type?: string;
	entry?: string;
	mainCourse?: string;
	dessert?: string;
}

export class Repas implements IRepas {
	 constructor(
		public id?: number,
		public type?: string,
		public entry?: string,
		public mainCourse?: string,
		public dessert?: string,
	) {}
}
