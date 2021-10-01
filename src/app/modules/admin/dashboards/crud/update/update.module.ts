import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UpdateComponent } from './update.component';

@NgModule ({
  declarations:[
    UpdateComponent
  ],
  imports:[
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UpdateComponent
  ]
})
export class UpdateModule{
}
