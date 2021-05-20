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

    loginForm: FormGroup = this.formBuilder.group({
        email: ["", Validators.required, Validators.email],
        password: ["", Validators.required]
    });
    submitted = false;

    Email:string = "";
    Password:string = "";
  
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private _user: UserService) { }
   
    onSubmit() {
          this.submitted = true;
  
          
          if (this.loginForm.invalid)
              return;

        this._user.loginUser(this.loginForm.value)
        .subscribe((response) => {
            if (response === null) {
                alert('Error logging in. Please try again later.')
            }
            else {
                this._user.storeLocalUser(response)
                this.router.navigate(['admin'])
            }
        }, (err) => {

            if (err.status === 404) {
                alert('Invalid Credentials.')
            }
            else {
                alert('Server error. Please try again later.')
            }
            console.log(err)
        })
    }

    get controls() { return this.loginForm.controls;}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ["", Validators.required, Validators.email],
            password: ["", Validators.required]
        })

 
    }

  }
