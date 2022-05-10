import { Component, OnInit , ViewChild,ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { newUser } from '../new-user';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit{

  list:any;

  @ViewChild('signupForm') signupForm!: NgForm;
 
  newUser!:newUser;
  ngOnInit(): void {

    this.list = [];

    this.newUser ={
      name:"",
      fathersName:"",
      email: "",
      password:"",
      phone: ""
    };
  }

  displayButtons:boolean=false;

  submitForm(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value)
      this.showButtons();
    }
    else{
      console.log('Invalid Data')
    }
    
  }

  resetForm(){
    this.signupForm.resetForm();
    this.showButtons();
  }
  
  addDataToTable(){
    this.list.push(this.signupForm.value);
    this.resetForm();
  }

  showButtons(){
    this.displayButtons=!this.displayButtons;
  }

}
