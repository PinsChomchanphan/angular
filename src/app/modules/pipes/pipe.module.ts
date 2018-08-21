import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeRoutingModule } from './pipe-routing.module';
import { PipeComponent } from '../components/pipes/pipe/pipe.component';
import { PipeDynamicFilterComponent } from '../components/pipes/pipe-dynamic-filter/pipe-dynamic-filter.component';

@NgModule({
  imports: [
    CommonModule,
    PipeRoutingModule
  ],
  declarations: [
      PipeComponent,
      PipeDynamicFilterComponent
  ]
})
export class PipeModule { }
