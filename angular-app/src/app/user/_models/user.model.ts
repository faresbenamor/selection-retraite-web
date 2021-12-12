export interface IUser {
  id?: number;
  username?: string;
  password?: string;
  residence?: string;
  roles?: IRole[];
}

export interface IRole {
  id?: number;
  name?: string;
  users?: IUser[];
}

export class User implements IUser {
  constructor(public id?: number,
              public username?: string,
              public password?: string,
              public residence?: string,
              public roles?: IRole[]) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.residence = residence;
    this.roles = roles;
  }
}

export class Role implements IRole {
  constructor(public id?: number,
              public name?: string,
              public users?: IUser[]) {
    this.id = id;
    this.name = name;
    this.users = users;
  }
}
