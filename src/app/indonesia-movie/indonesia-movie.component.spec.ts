import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndonesiaMovieComponent } from './indonesia-movie.component';

describe('IndonesiaMovieComponent', () => {
  let component: IndonesiaMovieComponent;
  let fixture: ComponentFixture<IndonesiaMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndonesiaMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndonesiaMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
