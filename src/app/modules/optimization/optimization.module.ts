import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptimizationRoutingModule } from './optimization-routing.module';
import { OnpushComponent } from '../component/onpush/onpush.component';
import { OptimizeComponent } from '../component/optimize/optimize.component';
import { TrackByComponent } from '../component/track-by/track-by.component';
import { AvoidComputingValueComponent } from '../component/avoid-computing-value/avoid-computing-value.component';
import { ChangeDetectionComponent } from '../component/change-detection/change-detection.component';

@NgModule({
    imports: [
        CommonModule,
        OptimizationRoutingModule
    ],
    declarations: [
        OnpushComponent,
        OptimizeComponent,
        TrackByComponent,
        AvoidComputingValueComponent,
        ChangeDetectionComponent
    ]
})
export class OptimizationModule { }
