export class Hoge {
  private _id: string;

  constructor(id: string) {
    this._id = id;
  }

  getId() {
    return this._id;
  }
}

new Hoge("fuga");
