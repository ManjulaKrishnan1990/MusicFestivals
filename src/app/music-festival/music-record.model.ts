export class MusicRecordModel {
  public record_id: number;
  public record_name: string;

  constructor(record_id: number, record_name: string) {
    this.record_id = record_id;
    this.record_name = record_name;

  }
}
