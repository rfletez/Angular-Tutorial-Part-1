import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      hobbies: new FormControl("movies")
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }
}