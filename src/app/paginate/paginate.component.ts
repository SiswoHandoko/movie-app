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
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  @Input('data') meals: string[] = [
  ];

  asyncMeals: Observable<string[]>;
  p = 1;
  total: number;
  loading: boolean;
  page: number;
  constructor(
    private appService: AppService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.page = params['page'] ? params['page'] : 1;
      console.log('init')
      this.getPage(this.page );
    });
  }

  getPage(page: number) {
    /* SET PAGE ON URI */
    this.router.navigate(
    [],
    {
      relativeTo: this.activatedRoute,
      queryParams: { page: page },
      queryParamsHandling: 'merge'
    });
    this.appService.getOtherMovie(page).subscribe(res => {
      this.loading = true;
      console.log(res)
      this.asyncMeals = serverCall(res['results'], page, res['total_results'])
        .do(res => {
          this.total = res.total;
          this.p = page;
          this.loading = false;
        })
        .map(res => res.items);
    });
  }
}

/**
 * Simulate an async HTTP call with a delayed observable.
 */
function serverCall(meals: string[], page: number, totalData): Observable<IServerResponse> {
  console.log('page:' + page );
  const perPage = 20;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  console.log(perPage + '-' + start + '-' + end);
  return Observable
    .of({
      items: meals,
      total: totalData
    });
}
