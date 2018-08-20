import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeRoutingModule } from './pipe-routing.module';
import { PipeComponent } from '../components/pipes/pipe/pipe.component';

@NgModule({
  imports: [
    CommonModule,
    PipeRoutingModule
  ],
  declarations: [
      PipeComponent
  ]
})
export class PipeModule { }
