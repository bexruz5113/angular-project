import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { EnjoyModule } from '../relax/enjoy/enjoy.module';
import { CrudComponent } from './crud.component';
import { crudRoutes } from './crud.routing';
import { DeleteModule } from './delete/delete.module';
import { PostModule } from './post/post.module';
import { UpdateModule } from './update/update.module';

@NgModule({
  declarations: [
    CrudComponent,


  ],
  imports: [
    RouterModule.forChild(crudRoutes),
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    CommonModule,
    EnjoyModule,
    UpdateModule,
    PostModule,
    DeleteModule
  ]
})
export class CrudModule { }
