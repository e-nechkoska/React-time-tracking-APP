import { Time } from './Time';

export interface Project {
  id: string;
  name: string;
  description: string;
  times?: Time[];
}
