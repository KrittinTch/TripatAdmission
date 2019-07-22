import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-addstudentstepper",
  templateUrl: "./addstudentstepper.component.html",
  styleUrls: ["./addstudentstepper.component.scss"]
})
export class AddstudentstepperComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  filemultiple = [];

  student = {
    fullname: "",
    pid: "123",
    status: "pass"
  };

  constructor(public dialogRef: MatDialogRef<AddstudentstepperComponent>, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      // firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      // secondCtrl: ["", Validators.required]
    });
  }
  closeonclick() {
    this.dialogRef.close();
  }

  detectfile(ev) {
    var files: Array<any> = ev.target.files;
    console.log(files.length);
    if (files) {
      Array.from(files).forEach((files: any) => {
        console.log(files.name);
        this.filemultiple.push(files);

      });
    }
  }

}
