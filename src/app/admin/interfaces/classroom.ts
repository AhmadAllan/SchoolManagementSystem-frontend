import { Teacher } from "./teacher";

export interface Classroom {
  classroomId?: number;
  className: string;
  gradeLevel: number;
  capacity: number;
  location: string;
  supervisorId?: number;
  teacher?: Teacher;
}
  
