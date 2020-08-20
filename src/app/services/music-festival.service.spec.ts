import { async, ComponentFixture } from '@angular/core/testing';
import {HttpClient as Http} from "@angular/common/http";
import { TestBed, getTestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MusicFestivalServices } from './music-festival.services';
import { MusicRecordModel } from '../music-festival/music-record.model';

describe('MusicFestivalServices', () => {
    let injector: TestBed;
    let service: MusicFestivalServices;
    let httpMock: HttpTestingController;
    let records: MusicRecordModel[]=[];
    
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [MusicFestivalServices]
      });
      records=[];
      
      injector = getTestBed();
      service = injector.get(MusicFestivalServices);
      httpMock = injector.get(HttpTestingController);
    });


  it('should return an Observable<any>', () => {
    const record = new MusicRecordModel(1, "Independent Star Records");
    const record2 = new MusicRecordModel(2, "RetroMix Records");
    const record3 = new MusicRecordModel(3, "Player Label Records");
    const record4 = new MusicRecordModel(4, "Beatnik Records");
    records=[record, record2, record3, record4]
    console.log("record are :", records);
    service.getDagetMusicFestivalData().subscribe(musicFestivalData => {
        console.log("musicFestivalData are :", musicFestivalData);
        const musicalRecords = musicFestivalData;
      expect(musicalRecords.length).toBe(4);
      expect(musicFestivalData).toEqual(records);
     expect(musicalRecords.length).toEqual(4);
    });

    const req = httpMock.expectOne(`http://e9ac531f4f4f.ngrok.io/MusicFestival/music/api/v1/festivals`);
    expect(req.request.method).toBe("GET");
    req.flush(records);
  });
});