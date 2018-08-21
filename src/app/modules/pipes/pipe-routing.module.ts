import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeComponent } from '../components/pipes/pipe/pipe.component';
import { PipeDynamicFilterComponent } from '../components/pipes/pipe-dynamic-filter/pipe-dynamic-filter.component';
import { PipeUtctimeLocaltimeComponent } from '../components/pipes/pipe-utctime-localtime/pipe-utctime-localtime.component';


const routes: Routes = [
    {
        path: '',
        component: PipeComponent,
        children: [
            {
                path: '',
                component: PipeDynamicFilterComponent
            },
            {
                path: 'UTCTimeToLocalTime',
                component: PipeUtctimeLocaltimeComponent
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeRoutingModule { }
