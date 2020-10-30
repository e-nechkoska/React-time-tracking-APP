import Time from './Time';
import nextProjectId from "./next-project-id";

class Project {
  public id: number;

  constructor(
    public name: string,
    public description: string,
    public times: Array<Time> = []
    ) {
      this.id = nextProjectId();
  }

}

export default Project;