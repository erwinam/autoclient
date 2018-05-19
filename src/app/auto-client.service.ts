import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Auto } from './types';

const AUTO_RESSOURCE_URL = 'http://localhost:8080/autos';

@Injectable({
    providedIn: 'root'
})
export class AutoClientService {
    constructor(private httpClient: HttpClient) {}

    holeAutos(modell?: string): Promise<Auto[]> {
        let url = AUTO_RESSOURCE_URL;
        let params;

        if (modell) {
            url += '/search';
            params = new HttpParams().append('modelLike', modell);
        }
        
        return this.httpClient.get<Auto[]>(url, { params }).toPromise();
    }

    speichereAuto(auto: Auto): Promise<Auto> {
        return this.httpClient.put<Auto>(AUTO_RESSOURCE_URL, auto).toPromise();
    }
}