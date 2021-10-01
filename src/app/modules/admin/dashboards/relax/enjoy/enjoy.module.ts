import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EnjoyComponent } from './enjoy.component';

@NgModule ({
  declarations:[
    EnjoyComponent
  ],
  imports:[
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  exports:[
    EnjoyComponent
  ]
})
export class EnjoyModule{
}
