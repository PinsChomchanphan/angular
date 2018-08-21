import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeComponent } from '../components/pipes/pipe/pipe.component';
import { PipeDynamicFilterComponent } from '../components/pipes/pipe-dynamic-filter/pipe-dynamic-filter.component';


const routes: Routes = [
    {
        path: '',
        component: PipeComponent,
        children: [
            {
                path: '',
                component: PipeDynamicFilterComponent
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeRoutingModule { }
