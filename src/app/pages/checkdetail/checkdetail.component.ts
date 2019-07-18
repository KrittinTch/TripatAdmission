import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-checkdetail",
  templateUrl: "./checkdetail.component.html",
  styleUrls: ["./checkdetail.component.scss"]
})
export class CheckdetailComponent implements OnInit {

  filemultiple = [];

  constructor() { }

  ngOnInit() {
  }
  detectfile2(ev) {
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
