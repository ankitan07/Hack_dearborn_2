import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
   reactiveForm : FormGroup;

   ngOnInit(): void {
     this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      gender : new FormControl(null),
      age:new FormControl(null,Validators.required),
      continent: new FormControl(null),
      ethinicity : new FormControl(null),
      alcohol:new FormControl(null),
      smoking : new FormControl(null),
      drugs:new FormControl(null)
     });
   }
   onSubmit(){
     let candidateDetails: string = this.reactiveForm.value;
   }

}
