import {Residence} from '../../Residence/_models/residence.model';

export interface IAlertes { 
	id?: number;
	image?: string;
	titre?: string;
	sousTitre?: string;
	description?: string;
	residence?: Residence;
}

export class Alertes implements IAlertes {
	 constructor(
		public id?: number,
		public image?: string,
		public titre?: string,
		public sousTitre?: string,
		public description?: string,
		public residence?: Residence,
	) {}
}
