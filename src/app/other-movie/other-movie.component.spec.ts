import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMovieComponent } from './other-movie.component';

describe('OtherMovieComponent', () => {
  let component: OtherMovieComponent;
  let fixture: ComponentFixture<OtherMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
