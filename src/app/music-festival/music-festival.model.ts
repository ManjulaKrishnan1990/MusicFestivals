export class MusicFestivalModel {
  public festival_id: number;
  public festival_name: string;
  public band_id: number;
  public band_name: string;

  constructor(festival_id: number, festival_name: string, band_id: number,band_name: string) {
    this.band_id = band_id;
    this.band_name = band_name;
    this.festival_id = festival_id;
    this.festival_name = festival_name;

  }
}
