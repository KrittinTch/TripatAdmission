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
  foods: Food[] = [
    {value: "pass", viewValue: "ผ่าน"},
    {value: "notpass", viewValue: "ไม่ผ่าน"}
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  addStudent() {
    this.students.push(
      {
        fullname: "ธีระ ทับฤทธิ์",
        Identificationnumber: "1332451006198",
        statu: "ผ่าน",
        telno: "0808324425",
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddstudentstepperComponent, {
      width: "800px",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("openDialog");
      this.addStudent();
    });
  }

}
export interface Food {
  value: string;
  viewValue: string;
}
