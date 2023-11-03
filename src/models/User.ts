import {v4} from "uuid";
class User {
  public name: string = "";
  public id: string;
  constructor(paramId?: string) {
    if (paramId)
      this.id = paramId
    else
      this.id = v4();
  }
}

export default User;
