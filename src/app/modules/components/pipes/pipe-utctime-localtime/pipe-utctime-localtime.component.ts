import { Component, OnInit } from '@angular/core';
import { UtcDatetime } from '../../../../models/utc-datetime.model';

@Component({
    selector: 'app-pipe-utctime-localtime',
    templateUrl: './pipe-utctime-localtime.component.html',
    styleUrls: ['./pipe-utctime-localtime.component.scss']
})
export class PipeUtctimeLocaltimeComponent implements OnInit {
    public dates: UtcDatetime[];
    constructor() { }

    ngOnInit() {
        this.dates = new Array<UtcDatetime>();
        this.loadDates();
    }

    public loadDates() {
        this.dates = [
            { utcDate: new Date('2018-01-01 12:30') },
            { utcDate: new Date('2018-01-02 15:40') },
            { utcDate: new Date('2018-01-02 00:00') },
            { utcDate: new Date('2018-01-02 02:15') },
            { utcDate: new Date('2018-01-02 15:15') }
        ];
    }

}
