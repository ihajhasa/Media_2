import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;

    Email:string;
    Password:string;
  
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private _user: UserService) { }
   
    onSubmit() {
          this.submitted = true;
  
          
          if (this.loginForm.invalid)
              return;
    }

    get controls() { return this.loginForm.controls;}
    ngOnInit() void {
        this.loginForm = this.formBuilder.group({
            email: ["", Validators.required, Validators.email],
            password: ["", Validators.required]
        })

 
    }

  }
