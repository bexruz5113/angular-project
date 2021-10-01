import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
// import { ListComponent } from './list/list.component';
// import { ListModule } from './list/list.module';
import { PropComponent } from './prop.component';
import { propRoutes } from './prop.routing';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { ListModule } from './list/list.module';




@NgModule({
  declarations: [
    PropComponent,
    // ListComponent
  ],
  imports: [
    RouterModule.forChild(propRoutes),
    // ListModule,
    CommonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
    MatListModule,
    ListModule,



  ]
}) export class PropModule { }
