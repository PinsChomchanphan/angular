import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnpushComponent } from '../components/onpush/onpush.component';
import { OptimizeComponent } from '../components/optimize/optimize.component';
import { TrackByComponent } from '../components/track-by/track-by.component';
import { AvoidComputingValueComponent } from '../components/avoid-computing-value/avoid-computing-value.component';
import { ChangeDetectionComponent } from '../components/change-detection/change-detection.component';

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
