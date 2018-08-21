import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../core/services';


@Component({
    selector: 'app-observables-async',
    templateUrl: './observables-async.component.html',
    styleUrls: ['./observables-async.component.scss']
})
export class ObservablesAsyncComponent implements OnInit {

    constructor(private service: PostService) { }

    ngOnInit() {
    }

    public loadPosts() {
        return this.service.getPosts();
    }
}
