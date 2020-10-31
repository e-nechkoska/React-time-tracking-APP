
import nextTimeId from './next-time-id';

class Time {
  public id: number;

  constructor(
    public description: string, 
    public amount: number) 
    {
      this.id = nextTimeId();
  }
}

export default Time;