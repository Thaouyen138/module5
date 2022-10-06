import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../model/customer-type";
import {Customer} from "../model/customer";
import {CustomerTypeService} from "../service/customer-type.service";
import {CustomerService} from "../service/customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../model/employee/employee";
import {EducationDegree} from "../model/employee/education-degree";
import {Position} from "@angular/compiler";
import {Division} from "../model/employee/division";
import {EmployeeService} from "../service/employee/employee.service";
import {EducationDegreeService} from "../service/employee/education-degree.service";
import {PositionService} from "../service/employee/position.service";
import {DivisionService} from "../service/employee/division.service";
import {Positions} from "../model/employee/position";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: Employee[];
  educationDegreeList: EducationDegree[];
  positionList: Positions[];
  divisionList: Division[];
  name = '';
  phone = '';
  idToDelete = 1;
  employeeForm;
  employeeDetail: Employee;

  constructor(private employeeService: EmployeeService,
              private educationDegreeService: EducationDegreeService,
              private positionService: PositionService,
              private divisionService: DivisionService,
              private toast: ToastrService
              ) {
  }
  getAllED(){
    this.educationDegreeService.getAll().subscribe(
      value => {
        this.educationDegreeList = value;
      })
  }
  getAllPos(){
    this.positionService.getAll().subscribe(value => this.positionList = value)
  }
  getAllDiv(){
    this.divisionService.getAll().subscribe(value => this.divisionList = value)
  }
  // getAll(){
  //   this.employeeService.getAll(this.name, this.phone).subscribe(
  //     value => {
  //       this.employeeList = value;
  //     })
  // }

  getAll() {
    this.employeeService.getAll(this.name, this.phone).subscribe((value: any) => {
      this.employeeList = value
      this.employeeDetail = this.employeeList[0]
    } )
  }
  ngOnInit(): void {
    this.getAllED();
    this.getAllPos()
    this.getAllDiv();
    this.getAll();
    this.employeeForm = new FormGroup(
      {
        id: new FormControl('',[Validators.required]),
        name: new FormControl('',[Validators.required]),
        dateOfBirth: new FormControl('',[Validators.required]),
        identity: new FormControl('',[Validators.required]),
        phone: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required]),
        educationDegree: new FormControl('',[Validators.required]),
        position: new FormControl('',[Validators.required]),
        division: new FormControl('',[Validators.required]),
        salary: new FormControl('',[Validators.required]),
      }
    )
  }

  onSubmit() {
    const employee = this.employeeForm.value;
    this.employeeService.save(employee).subscribe(
      value => {},
      error => {},
      () => {
        this.getAll();
        this.employeeForm.reset();
        this.toast.success("add new success")
      }
    );
  }

  edit(employee: Employee) {
    this.employeeForm.patchValue(employee)
  }

  update() {
    const employee = this.employeeForm.value;
    this.employeeService.update(employee).subscribe(value => {},
      error => {},
      () => {
        this.getAll();
        this.employeeForm.reset();
        this.toast.success("edit success")
    });
  }
  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  delete() {
    this.employeeService.delete(this.idToDelete).subscribe();
    this.toast.success("Delete success !")
    this.getAll()
  }

  setDelete(id: number) {
    this.idToDelete = id;
  }
  search() {
    this.getAll()
  }

  resetForm() {
    this.employeeForm.reset;
  }

  detail(employee: Employee) {
    this.employeeDetail = employee

  }
}
