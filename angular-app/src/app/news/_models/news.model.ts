export interface INews {
  id?: number;
  image?: string;
  titre?: string;
  sousTitre?: string;
  description?: string;
}

export class News implements INews {
  constructor(
    public id?: number,
    public image?: string,
    public titre?: string,
    public sousTitre?: string,
    public description?: string,
  ) {}
}
