export class MusicBandModel {
  public band_id: number;
  public band_name: string;
  public record_id: number;
  public record_name: string;

  constructor( band_id: number,band_name: string, record_id: number, record_name: string) {
    this.band_id = band_id;
    this.band_name = band_name;
    this.record_id = record_id;
    this.record_name = record_name;

  }
}
