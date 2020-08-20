import { async, ComponentFixture } from '@angular/core/testing';
import {HttpClient as Http} from "@angular/common/http";
import { TestBed, getTestBed, inject } from '@angular/core/testing';

import { MusicFestivalComponent } from './music-festival.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MusicFestivalServices } from './../services/music-festival.services';
import { HttpClientModule as HttpModule, HttpClientModule} from '@angular/common/http';

describe('MusicFestivalComponent', () => {
  let component: MusicFestivalComponent;
  let fixture: ComponentFixture<MusicFestivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicFestivalComponent ],
      imports: [HttpClientModule,HttpClientTestingModule],
      providers: [Http, MusicFestivalServices],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
