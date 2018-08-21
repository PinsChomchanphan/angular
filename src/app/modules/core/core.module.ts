import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicfilterPipe } from './pipes/dynamicfilter.pipe';
import { FormsModule } from '@angular/forms';
import { UtcToLocalPipe } from './pipes/utc-to-local.pipe';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        DynamicfilterPipe,
        UtcToLocalPipe
    ],
    exports: [
        FormsModule,
        DynamicfilterPipe,
        UtcToLocalPipe
    ]
})
export class CoreModule { }
