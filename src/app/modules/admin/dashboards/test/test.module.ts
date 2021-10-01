import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test.component';
import { testRoutes } from './test.routing';
import { SwiperModule } from 'swiper/angular';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    RouterModule.forChild(testRoutes),
    CommonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
    MatListModule,
    SwiperModule,
    NgxPaginationModule
  ],

}) export class TestModule { }
