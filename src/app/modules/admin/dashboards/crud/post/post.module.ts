import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PostComponent } from './post.component';

@NgModule ({
  declarations:[
    PostComponent
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
    PostComponent
  ]
})
export class PostModule{
}
