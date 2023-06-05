import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ClientsComponent
  ]
})
export class ClientsModule { }
