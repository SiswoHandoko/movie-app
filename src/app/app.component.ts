import { Injectable, Component } from '@angular/core';
import { AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'movie-app';
  balance = 100000;
  ownedMovies = [];

  convertIdr(value) {
    return `IDR ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }

  getBalance() {
    return this.balance;
  }

  getOwnedMovies() {
    return this.ownedMovies;
  }

  setOwnedMovies(movieId) {
    this.ownedMovies.push(movieId);
    console.log(this.ownedMovies)
    return this.ownedMovies;
  }

  checkOwnedMovies(movieId) {
    return this.ownedMovies.indexOf(parseInt(movieId)) > -1;
  }
}
