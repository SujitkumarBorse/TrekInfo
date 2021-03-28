import { Component, OnInit } from '@angular/core';
import { TrekkersTips } from '../../fort.model';
import { FortService } from '../../fort.service';


@Component({
  selector: 'app-professional-trekkers',
  templateUrl: './professional-trekkers.component.html',
  styleUrls: ['./professional-trekkers.component.css']
})
export class ProfessionalTrekkersComponent implements OnInit {

  trekkersTips: TrekkersTips[];

  constructor(private _fortService: FortService) { }

  ngOnInit() {

    this._fortService.getTrekkingTips().subscribe(res => {
      this.trekkersTips = res;
      console.log(res);
    });

  }

}
