import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-wybor-projektu',
  templateUrl: './wybor-projektu.component.html',
  styleUrls: ['./wybor-projektu.component.css']
})
export class WyborProjektuComponent implements OnInit {
	
	
  projekt = '';
 show = false;
  constructor() {

   }

  ngOnInit() {


  }


funk(){

}



  onKey(event: any) { // without type info
    this.projekt = ' '+event.target.value;
    this.show= true;

    if (this.projekt == 0) {
    	 this.show= false;
    }
  }
}


