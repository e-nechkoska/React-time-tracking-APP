
import { nanoid } from "nanoid";

class Time {
  public id: string;

  constructor(
    public description: string, 
    public amount: number) 
    {
      this.id = nanoid();
  }
}

export default Time;