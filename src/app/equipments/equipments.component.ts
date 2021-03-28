import { Component, OnInit } from '@angular/core';
import { Equipment } from '../fort.model';
import { FortService } from '../fort.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  equipment: Equipment[];
  
  constructor(private _fortService: FortService) { }
  
  ngOnInit() {

    // get image from json file
    this._fortService.getEquipment().subscribe(res => {
      this.equipment = res;
      console.log(res);
    });

  }

}
