import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicfilterPipe } from './pipes/dynamicfilter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        DynamicfilterPipe
    ],
    exports: [
        FormsModule,
        DynamicfilterPipe
    ]
})
export class CoreModule { }
