import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, finalize, catchError, share } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface IRequestOptions {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    body?: any;
}

export function httpClientCreator(http: HttpClient) {
    return new HttpService(http);
}
@Injectable()
export class HttpService {

    apiUrl = 'https://jsonplaceholder.typicode.com/';

    constructor(
        public http: HttpClient
    ) {

    }
    public get<T>(url: string, options?: IRequestOptions): Observable<T> {
        return this.http.get<T>(this.getFullUrl(url), options)
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

    public post<T>(url: string, entity: any, options?: IRequestOptions): Observable<T> {
        return this.http
            .post<T>(this.getFullUrl(url), entity, options)
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
    public put<T>(url: string, entity: any, options?: IRequestOptions): Observable<T> {

        return this.http
            .put<T>(this.getFullUrl(url), entity, options)
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

    public delete<T>(url: string, options?: IRequestOptions): Observable<T> {
        return this.http
            .delete<T>(this.getFullUrl(url), options)
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
