import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    XHRBackend,
    RequestOptionsArgs,
    Headers
} from '@angular/http';
import { Observable } from 'rxjs';
import { AngularReduxRequestOptions } from './angular-redux-request.options';
import { tap, finalize, catchError, share } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BaseService extends Http {

    apiUrl = 'https://jsonplaceholder.typicode.com/';

    constructor(
        backend: XHRBackend,
        defaultOptions: AngularReduxRequestOptions
    ) {
        super(backend, defaultOptions);
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<any> {

        return super
            .get(this.getFullUrl(url), this.requestOptions(options))
            .pipe(
                share(),
                tap((res: Response) => {
                    this.onSuccess(res);
                }, (error: any) => {
                    this.onError(error);
                }),
                catchError(this.onCatch),
                finalize(() => {
                    this.onEnd();
                })
            );
    }

    public post(url: string, entity: any, options?: RequestOptionsArgs): Observable<any> {

        return super
            .post(this.getFullUrl(url), entity, this.requestOptions(options))
            .pipe(
                tap((res: Response) => {
                    this.onSuccess(res);
                }, (error: any) => {
                    this.onError(error);
                }),
                catchError(this.onCatch),
                finalize(() => {
                    this.onEnd();
                })
            );
    }
    public put(url: string, entity: any, options?: RequestOptionsArgs): Observable<any> {

        return super
            .put(this.getFullUrl(url), entity, this.requestOptions(options))
            .pipe(
                tap((res: Response) => {
                    this.onSuccess(res);
                }, (error: any) => {
                    this.onError(error);
                }),
                catchError(this.onCatch),
                finalize(() => {
                    this.onEnd();
                })
            );
    }

    public delete(url: string, options?: RequestOptionsArgs): Observable<any>  {
        return super
            .put(this.getFullUrl(url), this.requestOptions(options))
            .pipe(
                tap((res: Response) => {
                    this.onSuccess(res);
                }, (error: any) => {
                    this.onError(error);
                }),
                catchError(this.onCatch),
                finalize(() => {
                    this.onEnd();
                })
            );
    }

    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {

        if (options == null) {
            options = new AngularReduxRequestOptions();
        }

        if (options.headers == null) {
              options.headers = new Headers();
        }

        return options;
    }

    private getFullUrl(url: string): string {
        return this.apiUrl + url;
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    private onSuccess(res: Response): void {
        console.log('Request successful');
    }

    private onError(res: Response): void {
        console.log('Error, status code: ' + res.status);
    }

    private onEnd(): void {
        console.log('Request is the end');
    }
}
