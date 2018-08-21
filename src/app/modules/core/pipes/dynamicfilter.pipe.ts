import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dynamicFilter'
})
export class DynamicfilterPipe implements PipeTransform {

    transform(items: Array<any>, filter: string): any[] {
        if (!items) { return []; }
        if (!filter) { return items; }
        filter = filter.toLocaleLowerCase();

        let data = items.filter(item => {
            let keys = Object.values(item);
            let loop = 0;
            for (let i = 0; i < keys.length; i++) {
                let value = keys[i] + '';
                let result = value.toLocaleLowerCase().includes(filter);
                if (result) {
                    loop++;
                }
            }

            if (loop > 0) {
                return true;
            } else {
                return false;
            }

        });
        return data;
    }

}
