import {Residence} from '../../Residence/_models/residence.model';
import {Repas} from '../../Repas/_models/repas.model';

export interface IDay { 
	id?: number;
	date?: Date;
	repas?: Repas[];
	residence?: Residence;
}

export class Day implements IDay {
	 constructor(
		public id?: number,
		public date?: Date,
		public repas?: Repas[],
		public residence?: Residence,
	) {}
}
