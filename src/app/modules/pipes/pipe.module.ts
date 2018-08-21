import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

import { PipeRoutingModule } from './pipe-routing.module';
import { PipeComponent } from '../components/pipes/pipe/pipe.component';
import { PipeDynamicFilterComponent } from '../components/pipes/pipe-dynamic-filter/pipe-dynamic-filter.component';
import { PipeUtctimeLocaltimeComponent } from '../components/pipes/pipe-utctime-localtime/pipe-utctime-localtime.component';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    PipeRoutingModule
  ],
  declarations: [
      PipeComponent,
      PipeDynamicFilterComponent,
      PipeUtctimeLocaltimeComponent
  ]
})
export class PipeModule { }
