import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { BaseService } from './base.service';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../../../models/post.model';

@Injectable()
export class PostService implements OnInit, OnDestroy {

    public posts: Observable<Array<Post>>;
    public subscription: Subscription;
    constructor(private base: BaseService) {
    }

    ngOnInit(): void {
        this.getPosts();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public getPosts() {
        this.subscription = this.base.get('posts').subscribe(data => {
            debugger;
            this.posts = data;
        });
    }
}
