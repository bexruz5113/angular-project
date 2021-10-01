import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DeleteComponent } from './delete.component';

@NgModule ({
  declarations:[
    DeleteComponent
  ],
  imports:[
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports:[
    DeleteComponent
  ]
})
export class DeleteModule{
}
