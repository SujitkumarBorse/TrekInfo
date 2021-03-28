import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/fort.model';
import { FortService } from 'src/app/fort.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faq:Faq[];

  constructor(private _fortService: FortService) { }

  ngOnInit() {
    this._fortService.getFaq().subscribe(res => {
      this.faq = res;
      console.log(res);
    });
  }

}
