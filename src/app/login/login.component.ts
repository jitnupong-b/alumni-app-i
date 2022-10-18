import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;

  loginForm: FormGroup | any;

  constructor() {
    this.loginForm = new FormGroup({
      inputEmail: new FormControl('', [
        Validators.required,
        Validators.email]),
      inputPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  ngOnInit(): void {

  }

  onSubmitEmailPassword() {

    if (!this.loginForm.valid) {
      return;
    } else {
      Swal.fire({
        title: 'ยินดีต้อนรับ',
        text: 'เข้าสู่ระบบ' + ' ' + this.email,
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  }
}
