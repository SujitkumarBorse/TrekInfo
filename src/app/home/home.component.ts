import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //   $('#modal').modal('show');
    //   // setTimeout(function () {
    //   //   $('#overlay').modal('hide');
    //   // }, 5000);

    //   $(".btn").click(function(){
    //     $("#modal").modal('hide');
    // });

    

    // $(document).ready(function () {
    //   // Open modal on page load
    //   $("#modal").modal('show');

    //   // Close modal on button click
    //   $(".btn").click(function () {
    //     $("#modal").modal('hide');
    //   });
    // });
    
  }

}
