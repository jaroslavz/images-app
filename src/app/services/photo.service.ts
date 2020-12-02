import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo, Photos } from '../models';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    private API_BASE_URL = 'http://interview.agileengine.com';
    constructor(private httpClient: HttpClient) {
    }

    // Get all photos
    public getAllPhotos(page?: number): Observable<Photos> {
        if (page) {
            return this.httpClient.get<Photos>(`${this.API_BASE_URL}/images?page=${page}`);
        } else {
            return this.httpClient.get<Photos>(`${this.API_BASE_URL}/images`);
        }
    }

    // Get photo by id
    public getPhotoById(id: number): Observable<Photo> {
        return this.httpClient.get<Photo>(`${this.API_BASE_URL}/images/${id}`);
    }

    // Get pagination data
    public getPaginator() {
        this.httpClient.get<Photos>(`${this.API_BASE_URL}/images`).subscribe(result => {
            localStorage.setItem('pageData', result.pageCount.toString());
        });
    }

}
