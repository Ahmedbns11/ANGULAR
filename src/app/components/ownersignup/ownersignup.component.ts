import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.css']
})
export class OwnersignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("HERE INTO ON INIT, Signup");
    this.signupForm = this.formBuilder.group({
      FIRSTNAME: ["", [Validators.required, Validators.minLength(3)]],
      LASTNAME: ["", [Validators.required, Validators.minLength(5)]],
      Email: ["", [Validators.required, Validators.email]],
      PASSWORD: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    });
  }}
