import { Parent } from "./parent";

export interface Student {
    studentId?: number;
    name: string;
    userName: string;
    password: string;
    email: string;
    grade: number;
    classroom: string;
    parntId?: number;
    parent?: Parent;
}
