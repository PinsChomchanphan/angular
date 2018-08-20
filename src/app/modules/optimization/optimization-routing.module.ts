import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnpushComponent } from '../component/onpush/onpush.component';
import { OptimizeComponent } from '../component/optimize/optimize.component';
import { TrackByComponent } from '../component/track-by/track-by.component';
import { AvoidComputingValueComponent } from '../component/avoid-computing-value/avoid-computing-value.component';
import { ChangeDetectionComponent } from '../component/change-detection/change-detection.component';

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
