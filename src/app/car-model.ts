export class Car {
    public name: string;
    public date: string;
    public model: string;
    public isSolid: boolean;
    public id?: number;

  constructor(name: string, date: string, model: string, isSolid: boolean, id?: number) {
      this.name = name;
      this.date = date;
      this.model = model;
      this.isSolid = isSolid;
      this.id = id;
  }
}
