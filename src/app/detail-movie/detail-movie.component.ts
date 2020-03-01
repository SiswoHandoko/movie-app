import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {
  detail: Object;
  casts: Object;
  ownedStatus: Boolean;
  genres: Object;
  similar: Array<Object>;
  recomended: Array<Object>;
  constructor(
    private appService: AppService,
    private activatedRoute: ActivatedRoute,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id-:slug'].split('-')[0];
      /* GET DETAIL MOVIE DATA */
      this.appService.getMovieDetail(id).subscribe(res => {
        this.detail = res;
      });
      /* GET DETAIL MOVIE CREDITS */
      this.appService.getMovieDetailCredits(id).subscribe(res => {
        this.casts = res['cast'];
      });
      /* DO CHECK OWNED MOVIE STATUS */
      this.ownedStatus = this.appComponent.checkOwnedMovies(id);

      /* GET SIMILAR MOVIES */
      this.appService.getSimilarMovies(id).subscribe(res => {
        this.similar = res['results'];
      });

      /* GET RECOMENDED MOVIES */
      this.appService.getRecomendedMovies(id).subscribe(res => {
        this.recomended = res['results'];
        console.log(res)
      });

      /* GET LIST OF GENRES */
      this.appService.getMovieGenre().subscribe(res => {
        this.genres = res;
      });
    });
  }

  /* CONVERT RATE TO PRICE */
  convertPrice(rate) {
    let price = 0;
    if ( rate > 1 && rate <= 3) {
      price = 3500;
    } else if ( rate > 3 && rate <= 6) {
      price = 8250;
    } else if ( rate > 6 && rate <= 8) {
      price = 16350;
    } else if ( rate > 8 && rate <= 10) {
      price = 21250;
    }
    return price;
  }

  /* CONVERT INTEGER TO MONEY FORMAT */
  convertIdr(value) {
    return `IDR ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }

  checkInsufficientBalance(price) {
    return this.appComponent.balance > price;
  }

  buyThisMovie(id, price) {
    if (this.appComponent.balance > price) {
      /* BALANCE - PRICE */
      this.appComponent.balance = this.appComponent.balance - price;
      /* SET OWNED MOVIES */
      this.appComponent.setOwnedMovies(id);
      /* SET OWNED STATUS */
      this.ownedStatus = true;
    }
  }

}
