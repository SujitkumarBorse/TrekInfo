import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { FortGallary } from '../fort.model';
import { FortService } from '../fort.service';
declare var $: any;


@Component({
  selector: 'app-forts',
  templateUrl: './forts.component.html',
  styleUrls: ['./forts.component.css']
})
export class FortsComponent implements OnInit {

  fortGallary: FortGallary[];

  zoom: number = 13;
  
  constructor(private _fortService: FortService ) { }

  ngOnInit() {
    // Jquery Image lightbox
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });

  
    // get image from json file
    this._fortService.getForts().subscribe(res => {
      this.fortGallary = res;
      console.log(res);
    });
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}
      // Checked Color: ${$event.starRating.checkedcolor}, 
      // Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
