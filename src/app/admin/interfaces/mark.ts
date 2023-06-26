import { Material } from './material';
import { Student } from './student';

export interface Mark {
  markId?: number;
  report: number;
  midterm: number;
  finalMark: number;
  materialId: number;
  studentId: number;
  material?: Material;
  student?: Student;
}
