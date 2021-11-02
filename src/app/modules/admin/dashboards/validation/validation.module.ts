import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationComponent } from './validation.component';
import { validationRoutes } from './validation.routing';

@NgModule({
  declarations: [ValidationComponent],
  imports: [
    RouterModule.forChild(validationRoutes),
    CommonModule,
    FormsModule
  ]
}) export class ValidationModule { }
