import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'optimization',
        loadChildren: './modules/optimization/optimization.module#OptimizationModule'
    },
    {
        path: 'pipe',
        loadChildren: './modules/pipes/pipe.module#PipeModule'
    },
    {
        path: 'directive',
        loadChildren: './modules/directives/directive.module#DirectiveModule'
    },
    {
        path: 'service',
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
