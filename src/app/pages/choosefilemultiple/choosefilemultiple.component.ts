import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-choosefilemultiple",
  templateUrl: "./choosefilemultiple.component.html",
  styleUrls: ["./choosefilemultiple.component.scss"]
})
export class ChoosefilemultipleComponent implements OnInit {
  filemultiple = [];
  constructor() { }

// detectfile2(ev) {
//   var files: Array<any> = ev.target.files;
//   console.log(files.length);
//   if (files) {
//     Array.from(files).forEach((files: any) => {
//       console.log(files.name);
//       this.filemultiple.push(files);

//     });
//   }
// }
  ngOnInit() {
  }

}
