import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnpushComponent } from '../components/optimizations/onpush/onpush.component';
import { OptimizeComponent } from '../components/optimizations/optimize/optimize.component';
import { TrackByComponent } from '../components/optimizations/track-by/track-by.component';
import { AvoidComputingValueComponent } from '../components/optimizations/avoid-computing-value/avoid-computing-value.component';
import { ChangeDetectionComponent } from '../components/optimizations/change-detection/change-detection.component';

const routes: Routes = [
    {
        path: '',
        component: OptimizeComponent,
        children: [
            {
                path: '',
                component: OnpushComponent
            },
            {
                path: 'track-by',
                component: TrackByComponent
            },
            {
                path: 'avoid-computing-value',
                component: AvoidComputingValueComponent
            },
            {
                path: 'change-detection',
                component: ChangeDetectionComponent
            },
        ]
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OptimizationRoutingModule { }
