import {Alertes} from '../../Alertes/_models/alertes.model';
import {Activity} from '../../Activity/_models/activity.model';
import {Day} from '../../Day/_models/day.model';

import {Album} from '../../Album/_models/album.model';
import {News} from "../../news/_models/news.model";

export interface IResidence {
	id?: number;
	nom?: string;
	logo?: string;
	region?: string;
	email?: string;
	activities?: Activity[];
	news?: News[];
	alertes?: Alertes[];
	albums?: Album[];
	days?: Day[];
}
export class Residence implements IResidence {
	 constructor(
		public id?: number,
		public nom?: string,
		public logo?: string,
		public region?: string,
		public email?: string,
		public activities?: Activity[],
		public news?: News[],
		public alertes?: Alertes[],
		public albums?: Album[],
		public days?: Day[],
	) {}
}
