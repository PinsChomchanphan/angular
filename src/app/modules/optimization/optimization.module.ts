import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptimizationRoutingModule } from './optimization-routing.module';
import { OnpushComponent } from '../components/onpush/onpush.component';
import { OptimizeComponent } from '../components/optimize/optimize.component';
import { TrackByComponent } from '../components/track-by/track-by.component';
import { AvoidComputingValueComponent } from '../components/avoid-computing-value/avoid-computing-value.component';
import { ChangeDetectionComponent } from '../components/change-detection/change-detection.component';

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
