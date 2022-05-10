import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormGroupDirective,Validators} from '@angular/forms';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent implements OnInit {

  public userRegistrationForm!:FormGroup
  public myform!:FormGroupDirective;

  list:any;

  public displayButton: boolean = true;

  constructor(private fb:FormBuilder) { 
    
  }

  ngOnInit(): void {

    this.list = [];

    this.userRegistrationForm = this.fb.group({
      name:["",[Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]+')]],
      college:["",[Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]+')]],
      cgpa:["",[Validators.required, Validators.pattern('[5-9].[0-9]*|10|[5-9]')]],
      passingYear:["",[Validators.required, Validators.pattern('[0-1][0-9]{3}|20[0-2][0-9]')]],
      dateOfJoining:["",[Validators.required]],
      skills:["",[Validators.required, Validators.minLength(3)]],
      resume:["",Validators.required]
    }, {updateOn:'submit'})
  }
  

  submitForm(form:FormGroupDirective){
    if(this.userRegistrationForm.valid){
      console.log(this.userRegistrationForm.value);
      this.showButtons();
      this.myform=form;
    }
  }

  resetForm(){
    this.userRegistrationForm.reset();
    this.myform.resetForm();
    this.showButtons();
  }

  addDataToTable(){
    this.list.push(this.userRegistrationForm.value);
    this.resetForm();
  }

  showButtons(){
    this.displayButton = !this.displayButton;  
  }

}
