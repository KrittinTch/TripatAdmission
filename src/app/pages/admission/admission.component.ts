import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AddstudentstepperComponent } from "../addstudentstepper/addstudentstepper.component";
import { HttpClient } from "@angular/common/http";

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

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    console.log("sgvrv");
    this.getData();
  }

  saveData() {
    this.http.post("http://localhost:3000/api/students", {
      fullname: "ttttt",
      pid: "ddd",
      status: "pass"
    });
  }

  getData() {
    console.log("getData");
    this.http.get("http://localhost:3000/api/students").subscribe((res: any) => {
    console.log(res);
    this.students = res.data;
    });
    // this.students = [
    //   // {
    //   //   fullname: "ประยุทธ จันโอชา",
    //   //   pid: "122334567",
    //   //   status: "ผ่าน"
    //   // }
    // ]
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
export interface Food {
  value: string;
  viewValue: string;
}
