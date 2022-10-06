import {EducationDegree} from "./education-degree";
import {Division} from "./division";
import {Positions} from "./position";

export interface Employee{
  id?: number;
  name?: string;
  dateOfBirth?: string;
  identity?: string;
  phone?: string;
  email?: string;
  educationDegree?: EducationDegree;
  position?: Positions;
  division?: Division;
  salary?: string;
}
