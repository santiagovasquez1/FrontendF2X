import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-datapicker',
  templateUrl: './datapicker.component.html',
  styles: [
  ]
})
export class DatapickerComponent implements OnInit {

  public date: string;
  @Output() dateEmitrer: EventEmitter<string>;

  constructor() {
    this.date = moment('2021-10-12').add(1, 'days').format('YYYY-MM-DD');
    this.dateEmitrer = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.dateEmitrer.emit(moment(this.date).subtract(1, 'days').format('YYYY-MM-DD'));
  }

  public onDateChange(event: any) {
    let date = moment(event).format('YYYY-MM-DD');
    this.dateEmitrer.emit(date);
  }

}
