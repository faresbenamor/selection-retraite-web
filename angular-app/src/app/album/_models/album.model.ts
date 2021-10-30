import {Residence} from '../../Residence/_models/residence.model';

export interface IAlbum { 
	id?: number;
	titre?: string;
	residence?: Residence;
}

export class Album implements IAlbum {
	 constructor(
		public id?: number,
		public titre?: string,
		public residence?: Residence,
	) {}
}
