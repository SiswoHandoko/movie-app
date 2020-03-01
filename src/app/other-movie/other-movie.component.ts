import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {AppService} from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

interface IServerResponse {
  items: string[];
  total: number;
}

@Component({
  selector: 'app-other-movie',
  templateUrl: './other-movie.component.html',
  styleUrls: ['./other-movie.component.css']
})
export class OtherMovieComponent implements OnInit {
  @Input('data') movies: string[] = [];
  asyncMovies: Observable<string[]>;
  p = 1;
  total: number;
  loading: boolean;
  page: number;
  genres: Object;

  constructor(
    private appService: AppService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    /* GET LIST OF GENRES */
    this.appService.getMovieGenre().subscribe(res => {
      this.genres = res;
    });
  }

  ngOnInit() {
    /* GET DATA FOR THE FIRST TIME AND ASSIGN DEFAULT PAGE NUMBER */
    this.activatedRoute.queryParams.subscribe(params => {
      this.page = params['page'] ? params['page'] : 1;
      this.getPage(this.page);
    });
  }

  getPage(page: number) {
    /* SET PAGE ON URI */
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {page: page},
        queryParamsHandling: 'merge'
      });
    this.appService.getOtherMovie(page).subscribe(res => {
      this.loading = true;
      this.asyncMovies = this.serverCall(res['results'], page, res['total_results'])
        .do(resMovie => {
          this.total = resMovie.total;
          this.p = page;
          this.loading = false;
        })
        .map(resMovie => resMovie.items);
    });
  }
  /* SETUP PAGINATION OPTION */
  serverCall(movies: string[], page: number, totalData): Observable<IServerResponse> {
    const perPage = 20;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return Observable
      .of({
        items: movies,
        total: totalData
      });
  }
}

