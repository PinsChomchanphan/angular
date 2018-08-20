import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'optimization',
        loadChildren: './modules/optimization/optimization.module#OptimizationModule'
    },
    {
        path: 'optimization',
        loadChildren: './modules/pipes/pipe.module#PipeModule'
    },
    {
        path: 'optimization',
        loadChildren: './modules/directives/directive.module#DirectiveModule'
    },
    {
        path: 'optimization',
        loadChildren: './modules/services/service.module#ServiceModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
