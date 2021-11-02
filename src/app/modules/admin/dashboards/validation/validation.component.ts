import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'validation',
  templateUrl: './validation.component.html',
}) export class ValidationComponent implements OnInit {
  obj = {
    name: '',
    email: '',
    message: '',
  };

  ngOnInit(): void {
    console.log('heeeey sup');
  }
  formSend(): void {
    // setTimeout(() => {
    //   alert(JSON.stringify(this.obj));
    // }, 2000);

    console.log(this.obj);

  }
}
