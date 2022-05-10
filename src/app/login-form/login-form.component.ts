import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { registeredUser } from '../registered-user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @ViewChild('signinForm') signinForm!: NgForm;

  registeredUser!:registeredUser;

  ngOnInit(): void {

    this.registeredUser={
      userName:'',
      password:''
    }
  }

  submitForm(){
    if(this.signinForm.valid){
      console.log(this.signinForm.value);
    }
  }



}
