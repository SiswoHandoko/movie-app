import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutesModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { IndonesiaMovieComponent } from './indonesia-movie/indonesia-movie.component';
import { OtherMovieComponent } from './other-movie/other-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PaginateComponent } from './paginate/paginate.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    CommingSoonComponent,
    IndonesiaMovieComponent,
    OtherMovieComponent,
    MovieListComponent,
    PaginateComponent,
    DetailMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutesModule),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
