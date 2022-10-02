import {CustomerType} from "../../model/customer-type";

export interface Customer {
  id: string,
  customerType: CustomerType,
  name: string,
  dateOfBirth: string,
  gender: string,
  indentity: string,
  phone: string,
  email: string,
  address: string
}
