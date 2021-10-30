import {Residence} from '../../Residence/_models/residence.model';

export interface IActivity { 
	id?: number;
	titre?: string;
	date?: Date;
	lieu?: string;
	description?: string;
	image?: string;
	residence?: Residence;
}

export class Activity implements IActivity {
	 constructor(
		public id?: number,
		public titre?: string,
		public date?: Date,
		public lieu?: string,
		public description?: string,
		public image?: string,
		public residence?: Residence,
	) {}
}
