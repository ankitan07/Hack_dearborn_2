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
     let candidateDetails: JSON = this.reactiveForm.value; 
     console.log(candidateDetails);
   }
     genes = {
      "1": 
      {"gender": "Male", 
      "location" : "Usa", 
      "alcohol": "No", 
      "smoke": "No",
      "Race": "Asian ", 
      "CYP2C9  2 and 3 ": false, 
      "VKORC1 - c.-1639G>A": false, 
      "CYP2C9  5, 6, 8, 11": false, 
      "rs12777823 SNP": false, 
      "CYP4F2": false, 
      "Dose": "3-5 mg", 
      "Drug": "Warfarin's", 
      "Output": "No CYP2C9  2 and 3  and no VKORC1 - c.-1639G>A detected Drug recommended: Warfarin's Dosage recommended: 3-5 mg", "% CYP2C9  2 ": "2% , 4%", "% CYP2C9  2 .1": 2.0, "% CYP2C9   3 ": 4.0}, 
      
      "2": 
      {"gender": "Male", 
      "location ": "Usa", 
      "alcohol": "No", 
      "smoke": "No",
      "Race": "White", 
      "CYP2C9  2 and 3 ": "FALSE ", 
      "VKORC1 - c.-1639G>A": "FALSE ", 
      "CYP2C9  5, 6, 8, 11": false, 
      "rs12777823 SNP": false, 
      "CYP4F2": false, "Dose": "4-7 mg", 
      "Drug": "Warfarin's",
      "Output": "Details: % of CYP2C9  2 and 3  = 13.12% , 7.68% VKORC1 - c.-1639G>A is present Drug recommended: Warfarin's Dosage recommended: 4-7 mg", "% CYP2C9  2 ": "13.12% , 7.68%", "% CYP2C9  2 .1": 13.12, "% CYP2C9   3 ": 7.68}, 

    }

}
