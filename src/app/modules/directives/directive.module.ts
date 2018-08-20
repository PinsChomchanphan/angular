import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveRoutingModule } from './directive-routing.module';
import { DirectiveComponent } from '../components/directives/directive/directive.component';

@NgModule({
  imports: [
    CommonModule,
    DirectiveRoutingModule
  ],
  declarations: [
      DirectiveComponent
  ]
})
export class DirectiveModule { }
