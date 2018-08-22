import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicfilterPipe } from './pipes/dynamicfilter.pipe';
import { FormsModule } from '@angular/forms';
import { UtcToLocalPipe } from './pipes/utc-to-local.pipe';
import { HttpService, httpClientCreator } from './services/http.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        DynamicfilterPipe,
        UtcToLocalPipe,
    ],
    exports: [
        FormsModule,
        DynamicfilterPipe,
        UtcToLocalPipe,

    ],
    providers: [
        HttpService,
        {
            provide: HttpClientModule,
            useFactory: httpClientCreator,
            deps: [HttpClient]
        }
    ]
})
export class CoreModule { }
