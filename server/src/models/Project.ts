import Time from './Time';
import { nanoid } from "nanoid";

class Project {
  public id: string;

  constructor(
    public name: string,
    public description: string,
    public times: Array<Time> = []
    ) {
      this.id = nanoid();
  }

}

export default Project;