import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'random-num',
  templateUrl: './random-num.component.html',
  styleUrls: ['./random-num.component.css']
})
export class RandomNumComponent implements OnInit {

  constructor() {
    for (var x=0; x<6; x++){
      this.randomNum.push(Math.floor(Math.random()*46)+1)
    }
   }

   randomNum:any = []
   selected:any

   buttonSelect(num: number){
     this.selected = num
   }

  ngOnInit(): void {
  }

}
