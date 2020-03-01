import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input()
  movie: Object;
  @Input()
  genre: Object;

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }
  findObjectByKey(value) {
    const arrayOfGenres = this.genre;
    if (arrayOfGenres !== undefined) {
      for (let i = 0; i < arrayOfGenres['genres'].length; i++) {
        if (arrayOfGenres['genres'][i]['id'] === value) {
          return arrayOfGenres['genres'][i].name;
        }
      }
    }
    return null;
  }

  convertTitle(string) {
    return string.replace(/\s/g, '-');
  }

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
    return this.convertIdr(price);
  }

  convertIdr(value) {
    return `IDR ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
  }

  checkOwnedMovies(movieId) {
    return this.appComponent.checkOwnedMovies(movieId);
  }
}
