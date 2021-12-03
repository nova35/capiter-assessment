import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable()

export class ApiService
{
    serverUrl = environment.serverURL;

    constructor(private _http: HttpClient) {}

    list(storeName: string, opts: any) 
    {
        const url = storeName;
        const completeUrl = `${this.serverUrl}${url}`;
        const params = { params: opts };
        return this._http.get(completeUrl, params)
            .pipe(map(result => result));
    }

    get(storeName: string, id:any) 
    {
        const url = storeName;
        const completeUrl = `${this.serverUrl}${url}/${id}`;
        return this._http.get(completeUrl)
            .pipe(map(result => result));
    }

    update(storeName: string, id:any, patchObj: object) 
    {
        const url = storeName;
        const headersObj = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const completeUrl = `${this.serverUrl}${url}/${id}`;
        return this._http.patch(completeUrl, patchObj, 
            { headers: headersObj })
            .pipe(map(result => result));
    }

    create(storeName: string, postObj) 
    {
        const url = storeName;
        const headersObj = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const completeUrl = `${this.serverUrl}${url}`;
        return this._http.post(completeUrl, postObj,
            { headers: headersObj })
            .pipe(map(result => result));
    }

    remove(storeName: string, id:any) 
    {
        const url = storeName;
        const completeUrl = `${this.serverUrl}${url}/${id}/`;
        return this._http.delete(completeUrl)
            .pipe(map(result => result));
    }
}