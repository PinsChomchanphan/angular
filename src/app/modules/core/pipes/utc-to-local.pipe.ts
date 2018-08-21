import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
    name: 'utcToLocal'
})
export class UtcToLocalPipe implements PipeTransform {

    transform(utcDateString: any): any {
        let convertdLocalTime = new Date(utcDateString);
        let localTime = new Date();
        console.log('localTime', localTime);
        let hourOffset = localTime.getTimezoneOffset() / 60;
        console.log('hourOffset', hourOffset);
        convertdLocalTime.setHours(convertdLocalTime.getHours() - hourOffset);

        return convertdLocalTime;
    }

}
