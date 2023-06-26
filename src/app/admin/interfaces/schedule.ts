import { Classroom } from "./classroom";

export interface Schedule {
  scheduleId?: number;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  publicity: number;
  classroomId?: number;
  classroom?: Classroom;
}
