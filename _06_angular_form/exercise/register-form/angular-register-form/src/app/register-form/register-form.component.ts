import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
    country: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required,Validators.min(18)]),
    gender: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
  }, this.checkConfirm
  );
  onSubmit() {
    console.log(this.registerForm.value);
  }

  constructor() {
  }
  checkConfirm(item: AbstractControl) {
    const pass = item.value.password;
    const confirm = item.value.confirmPassword;
    if (confirm !== pass) {
      return {confirmPass: true};
    }
    return null;
  }

  ngOnInit(): void {
  }

}
