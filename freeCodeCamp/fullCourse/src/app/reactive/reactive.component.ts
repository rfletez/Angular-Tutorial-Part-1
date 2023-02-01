import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  reactiveForm!: FormGroup;

  constructor(private formGroup: FormGroup) {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
        fname: new FormControl(null, Validators.required),
        lname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),

      gender: new FormControl("male"),
      country: new FormControl("usa"),
      hobbies: new FormControl("movies"),
      skills: new FormArray([
        new FormControl(null, [Validators.required])
      ])
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, [Validators.required]));
    //Before the push(), inside the parentheses it is typecasted to FormArray
    //in order to use the push().
  }
}