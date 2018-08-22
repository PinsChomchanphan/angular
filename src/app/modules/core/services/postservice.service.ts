import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {


    constructor(private http: HttpService) {
    }
    // public posts: Observable<Array<Post>>;
    // public subscription: Subscription;


    // ngOnInit(): void {
    //     this.getPosts();
    // }

    // ngOnDestroy(): void {
    //     this.subscription.unsubscribe();
    // }

    public getPosts() {
       return this.http.get('posts');
    }
}
