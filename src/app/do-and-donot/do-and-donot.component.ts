import { Component, OnInit } from '@angular/core';
import { Dos_Donts } from '../fort.model';
import { FortService } from '../fort.service';

@Component({
  selector: 'app-do-and-donot',
  templateUrl: './do-and-donot.component.html',
  styleUrls: ['./do-and-donot.component.css']
})

export class DoAndDonotComponent implements OnInit {

  constructor(private _fortService: FortService) { }

  dos_Donts: Dos_Donts[];
  
  ngOnInit() {
    this._fortService.getDos_Donts().subscribe(res => {
      this.dos_Donts = res;
      console.log(res);
    });
  }

}
