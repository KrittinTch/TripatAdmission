import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-adddatastudent',
  templateUrl: './adddatastudent.component.html',
  styleUrls: ['./adddatastudent.component.scss']
})
export class AdddatastudentComponent implements OnInit {
  @Output() calculate: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
export class CdkVirtualScrollOverviewExample {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}
