import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
    selector: 'app-pipe-dynamic-filter',
    templateUrl: './pipe-dynamic-filter.component.html',
    styleUrls: ['./pipe-dynamic-filter.component.scss']
})
export class PipeDynamicFilterComponent implements OnInit {

    public searchText: string;
    public customers: Customer[];
    constructor() { }

    ngOnInit() {
        this.customers = new Array<Customer>();
        this.InitLoadData();
    }

    public InitLoadData() {
        this.customers = [
            { name: 'Prescott Bartlett', position: 'Technical Author', office: 'London', age: 32, startDate: new Date('1990-05-15'), salary: 150000 },
            { name: 'Gavin Cortez', position: 'Team Leader', office: 'London', age: 30, startDate: new Date('2000-07-15'), salary: 105000 },
            { name: 'Gloria Little', position: 'Systems Administrator', office: 'Thailand', age: 25, startDate: new Date('1975-03-25'), salary: 140000 },
            { name: 'Lael Greer', position: 'Systems Administrator', office: 'Thailand', age: 27, startDate: new Date('1990-01-05'), salary: 170000 },
            { name: 'Tiger Nixon', position: 'System Architect', office: 'New York', age: 47, startDate: new Date('2010-05-13'), salary: 180000 },
            { name: 'Quinn Flynn', position: 'Support Lead', office: 'San Francisco', age: 50, startDate: new Date('1965-04-15'), salary: 155000 },
            { name: 'Finn Camacho', position: 'Support Engineer', office: 'San Francisco', age: 29, startDate: new Date('1965-04-15'), salary: 157000 },
            { name: 'Olivia Liang', position: 'Support Engineer', office: 'Thailand', age: 32, startDate: new Date('1965-04-15'), salary: 185000 },
            { name: 'Sakura Yamamoto', position: 'Support Engineer', office: 'Thailand', age: 515, startDate: new Date('1965-04-15'), salary: 175000 },
            { name: 'Bradley Greer', position: 'Software Engineer', office: 'Thailand', age: 29, startDate: new Date('1965-04-15'), salary: 165000 }
        ];
    }
}
