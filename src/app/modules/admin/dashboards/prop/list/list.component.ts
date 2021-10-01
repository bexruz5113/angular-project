import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() name: string;

  constructor(public dialogRef: MatDialogRef<ListComponent>) { }

  finished(): void {
    this.dialogRef.close();

  }

  cancel(): void {
    this.dialogRef.close();

  }


  // listss: Array<string> = ['Baxronov Bexruz', 'Kamolov Ozodbek', 'Xoliqov Ruslan', 'Ochilov Surat', 'Baxronova Ferangiz'];


}
