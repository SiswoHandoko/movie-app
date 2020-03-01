
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apikey: string;

  constructor(private http: HttpClient) {
    this.apikey = '7f2d8337ed1208ac335402c1ab2198ea';
  }

  getIndonesiaMovie(page) {
    const url = 'https://api.themoviedb.org/3/movie/now_playing';
    const httpOptions = {
      params: new HttpParams().set('api_key', this.apikey).set('region', 'id' ).set('page', page)
    };
    return this.http.get(url, httpOptions);
  }

  getOtherMovie(page) {
    const url = 'https://api.themoviedb.org/3/movie/now_playing';
    const httpOptions = {
      params: new HttpParams().set('api_key', this.apikey).set('page', page)
    };
    return this.http.get(url, httpOptions);
  }

  getMovieGenre() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list';
    const httpOptions = {
      params: new HttpParams().set('api_key', this.apikey)
    };
    return this.http.get(url, httpOptions);
  }

  getMovieDetail(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const httpOptions = {
      params: new HttpParams().set('api_key', this.apikey).set('language', 'en-US')
    };
    return this.http.get(url, httpOptions);
  }

  getMovieDetailCredits(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits`;
    const httpOptions = {
      params: new HttpParams().set('api_key', this.apikey)
    };
    return this.http.get(url, httpOptions);
  }

  getSimilarMovies(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/similar`;
    const httpOptions = {
      params: new HttpParams().set('api_key', this.apikey).set('language', 'en-US').set('page', '1')
    };
    return this.http.get(url, httpOptions);
  }

  getRecomendedMovies(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations`;
    const httpOptions = {
      params: new HttpParams().set('api_key', this.apikey).set('language', 'en-US').set('page', '1')
    };
    return this.http.get(url, httpOptions);
  }
}
