/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnjoyComponent } from './enjoy/enjoy.component';

@Component ({
  selector: 'relax',
  templateUrl: './relax.component.html',
  styleUrls: ['./relax.component.scss']
})
export class RelaxComponent implements OnInit{
  // nomi: string = 'Bexruz';
  colorF: string = 'yellow';
  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(EnjoyComponent);
  }

 ngOnInit() {
   this.name ='Audi';
   this.speed = 300;
   this.model = 'asas';
   this.colors = {
     car: 'black',
     inside: 'white',
     wheels: 'red'
   };
   this.options = ['eers','deddfvf','fvdvgv',' xfxxff'];
  }

  addOpt(option1){
    this.options.unshift(option1);
    return false;
}
  delete(option1){
    console.log(option1);
    for(let i = 0; i < this.options.length; i++){
      if(this.options[i] === option1){
        this.options.splice(i, 1);
        break;

      }
  }
  }
bmwSelect(carname){
  if(carname === 'bmw'){
    this.name ='BMW';
    this.speed = 350;
    this.model = 'i8';
    this.colors = {
      car: 'red',
      inside: 'white',
      wheels: 'red'
    };
    this.options = ['xsxsx','xsxs','xsaxas','xasxsax'];
}
else if(carname === 'audi'){
  this.name ='Audi';
  this.speed = 300;
  this.model = 'asas';
  this.colors = {
    car: 'green',
    inside: 'white',
    wheels: 'red'
  };
  this.options = ['csdc','eeedfff','Состояcsdccsdние','cdsdcsdc'];
}
else{
  this.name ='mers';
  this.speed = 300;
  this.model = 'asas';
  this.colors = {
    car: 'black',
    inside: 'white',
    wheels: 'red'
  };
  this.options = ['gbbh','cfr','brtggrt','646'];
}
}
}

  interface Colors{
    car: string;
    inside: string;
    wheels: string;
  }

