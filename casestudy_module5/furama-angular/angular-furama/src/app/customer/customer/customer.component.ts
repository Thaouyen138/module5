import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerType} from "../../model/customer-type";
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerService} from "../../service/customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerTypeList: CustomerType[];
  customerList: Customer[];
  name = '';
  address = '';
  idToDelete = '';
  customerDetail: Customer ;

  constructor(private customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
              private toast: ToastrService) {
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(value => this.customerTypeList = value)
  }

  getAll() {
    this.customerService.getAll(this.name, this.address).subscribe((value: any) => {
      this.customerList = value
      this.customerDetail = this.customerList[0]
    } )
  }

  ngOnInit(): void {
    this.getAllCustomerType();
    this.getAll();
  }

  customerForm = new FormGroup(
    {
      id: new FormControl('', [Validators.required]),
      customerType: new FormControl(null, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      indentity: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    }
  )

  onSubmit() {
    const customer = this.customerForm.value;
    this.customerService.save(customer).subscribe(
      value => {
      },
      error => {
      },
      () => {
        this.getAll();
        this.customerForm.reset()
      }
    );
  }

  edit(customer: Customer) {
    this.customerForm.patchValue(customer)
  }

  update() {
    const customer = this.customerForm.value;
    this.customerService.update(customer).subscribe(value => {
      },
      error => {
      },
      () => {
        this.getAll();
        this.customerForm.reset()
      });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  delete() {
    this.customerService.delete(this.idToDelete).subscribe();
    this.toast.success("Delete success !")
    this.getAll()
  }

  setDelete(id: string) {
    this.idToDelete = id;
  }

  search() {
    this.getAll()
  }

  resetForm() {
    this.customerForm.reset()
  }

  detail(customer: Customer) {
    console.log(customer)
    this.customerDetail = customer

  }
}
