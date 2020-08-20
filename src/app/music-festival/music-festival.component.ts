import {Component, OnInit, NgZone} from "@angular/core";
import {MusicFestivalServices} from "../services/music-festival.services";
import {HttpClient as Http} from "@angular/common/http";
import {MusicRecordModel} from "./music-record.model";
import {MusicFestivalModel} from "./music-festival.model";
import {MusicBandModel} from "./music-band.model";

@Component({
  selector: 'app-music-festival',
  templateUrl: './music-festival.component.html',
  styleUrls: ['./music-festival.component.css']
})
export class MusicFestivalComponent implements OnInit{
  title = "I love pizza!"
  musicFestival;
  records: MusicRecordModel[] = [];
  bands: MusicBandModel[] = [];
  festival: MusicFestivalModel[] = [];
  constructor(private musicFestivalService: MusicFestivalServices) {}

  ngOnInit() {
    this.loadAllMusicalFestival();
  }

  loadAllMusicalFestival() {
      this.musicFestivalService.getDagetMusicFestivalData().subscribe(data => {
        this.musicFestival = data;
        if (this.musicFestival.length > 0) {
          this.records = this.musicFestival[0];
          this.bands = this.musicFestival[1];
          this.festival = this.musicFestival[2];
          this.records.sort((a,b) => a.record_name > b.record_name ? 1 : -1)
          this.bands.sort((a,b) => a.band_name > b.band_name ? 1 : -1)
          this.festival.sort((a,b) => a.festival_name > b.festival_name ? 1 : -1)
        }
      })
  }

  getBands(recordId) {
    return this.bands.filter(band => band.record_id == recordId);
  }

  getFestival(bandId) {
    return this.festival.filter(festival => festival.band_id == bandId);
  }


}
