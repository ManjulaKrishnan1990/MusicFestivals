import { async, ComponentFixture } from '@angular/core/testing';
import {HttpClient as Http} from "@angular/common/http";
import { TestBed, getTestBed, inject } from '@angular/core/testing';

import { MusicFestivalComponent } from './music-festival.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MusicFestivalServices } from './../services/music-festival.services';
import { HttpClientModule as HttpModule, HttpClientModule} from '@angular/common/http';
import { MusicBandModel } from './music-band.model';

describe('MusicFestivalComponent', () => {
  let component: MusicFestivalComponent;
  let fixture: ComponentFixture<MusicFestivalComponent>;
  let testBedService: MusicFestivalServices;
  let injector: TestBed;
  let bands: MusicBandModel[] = [];
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
    testBedService = TestBed.get(MusicFestivalServices);
    fixture.detectChanges();
    injector = getTestBed();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get band list', () => {
    const band1 = new MusicBandModel(1, "Brand Doxzy", 1, "Independent Star Records");
    const band2 = new MusicBandModel(1, "Brand Gibson", 1, "Independent Star Records");
    const band3 = new MusicBandModel(1, "Brand Shure", 1, "Independent Star Records");
    bands=[band1, band2, band3]
    console.log("record are :", bands);
    const bandsList = component.getBands(1);
    console.log("bandsList are :", bandsList);
    const bandData = bandsList;
    expect(bandData.length).toBe(0);
  })

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
  inject([MusicFestivalServices], (injectService: MusicFestivalServices) => {
      expect(injectService).toBe(testBedService);
  })
);
});
