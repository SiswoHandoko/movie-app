import { Routes } from '@angular/router';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { IndonesiaMovieComponent } from './indonesia-movie/indonesia-movie.component';
import { OtherMovieComponent } from './other-movie/other-movie.component';
import { PaginateComponent } from './paginate/paginate.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

export const AppRoutesModule: Routes = [
  {path: '', redirectTo: '/indonesia', pathMatch: 'full'},
  {path: 'comming-soon', component: CommingSoonComponent},
  {path: 'indonesia', component: IndonesiaMovieComponent},
  {path: 'other', component: OtherMovieComponent},
  {path: ':id-:slug', component: DetailMovieComponent},
  {path: 'paginate', component: PaginateComponent},
];
