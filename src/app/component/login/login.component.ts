import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,  private router: Router) {}
  // loginForm: FormGroup;

  

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })

    this.loginForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email])
    })
  }


  login(){
    alert('login successful');
    this.loginForm.reset();
    this.router.navigate(['home'])
  }

}
