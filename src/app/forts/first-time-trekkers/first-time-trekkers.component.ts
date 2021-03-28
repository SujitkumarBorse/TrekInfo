import { Component, OnInit } from '@angular/core';
import { BeginnerTrekkers, DuringTrek, AfterTrek, BeforTrek } from '../../fort.model';
import { FortService } from '../../fort.service';

@Component({
  selector: 'app-first-time-trekkers',
  templateUrl: './first-time-trekkers.component.html',
  styleUrls: ['./first-time-trekkers.component.css']
})
export class FirstTimeTrekkersComponent implements OnInit {

  beginnerTrekkers: BeginnerTrekkers[];
  duringTrek: DuringTrek[];
  beforeTrek: BeforTrek[];
  afterTrek: AfterTrek [];

  constructor(private _fortService: FortService) { }

  ngOnInit() {
    this._fortService.getData().subscribe(res => {
      
      this.beginnerTrekkers = res[0];
      this.duringTrek = res[1];
      this.beforeTrek = res[2];
      this.afterTrek = res[3];

      console.log(res);
    });
  }

}
