import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup = this.formBuilder.group({});
  submitted: Boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private _user: UserService) { }

  onSubmit() {
    this.submitted = true;
    if (!this.regForm.valid) return;

    const fields = this.regForm.value;

    // Here we will call the endpoint to register an admin account
    // This would probably require token authentication for admin

    this._user.registerUser(fields).subscribe(
      (response) => {
        this.router.navigate(["admin"])
      }, 
      (err) => {alert(JSON.stringify(err, null, 4))})
  }

  get controls() {return this.regForm.controls}

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
  }

}
