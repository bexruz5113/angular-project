import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EnjoyModule } from './enjoy/enjoy.module';
import { RelaxComponent } from './relax.component';
import { relaxRoutes } from './relax.routing';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    RelaxComponent,
  ],
  imports: [
    RouterModule.forChild(relaxRoutes),
    EnjoyModule,
    CommonModule,
    MatButtonModule,
    FormsModule,
    ClipboardModule
  ]
})
export class RelaxModule {

}
