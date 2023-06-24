import { Model, Types } from 'mongoose';
import { IStudent } from '../student/student.interface';

// interface
export type IUser = {
  id: string;
  role: string;
  password: string;
  student?: Types.ObjectId | IStudent;
  // faculty?:Types.ObjectId | IFaculty; Future
  // admin?:Types.ObjectId | IAdmin; Future
};

// user model
export type UserModel = Model<IUser, Record<string, unknown>>;
