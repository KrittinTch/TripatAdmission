import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AddstudentstepperComponent } from "../addstudentstepper/addstudentstepper.component";

@Component({
  selector: "app-admission",
  templateUrl: "./admission.component.html",
  styleUrls: ["./admission.component.scss"]
})
export class AdmissionComponent implements OnInit {

  students = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddstudentstepperComponent, {
      width: "800px",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("openDialog");
    });
  }

}
