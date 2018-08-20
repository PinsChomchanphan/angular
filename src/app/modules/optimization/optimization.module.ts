import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptimizationRoutingModule } from './optimization-routing.module';
import { OnpushComponent } from '../components/optimizations/onpush/onpush.component';
import { OptimizeComponent } from '../components/optimizations/optimize/optimize.component';
import { TrackByComponent } from '../components/optimizations/track-by/track-by.component';
import { AvoidComputingValueComponent } from '../components/optimizations/avoid-computing-value/avoid-computing-value.component';
import { ChangeDetectionComponent } from '../components/optimizations/change-detection/change-detection.component';

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
