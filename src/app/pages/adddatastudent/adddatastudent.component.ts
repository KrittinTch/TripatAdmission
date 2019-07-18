import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adddatastudent',
  templateUrl: './adddatastudent.component.html',
  styleUrls: ['./adddatastudent.component.scss']
})
export class AdddatastudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class CdkVirtualScrollOverviewExample {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}
