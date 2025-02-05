import { Injectable } from '@angular/core';
import jsonToCsvExport, { HeaderMapping } from "json-to-csv-export"

@Injectable({
  providedIn: 'root'
})
export class ExportToCsvService {

  constructor() { }

  exportToCsv(data: any[], filename: string, headers: HeaderMapping[]) {
    let date = new Date();
    let fileName: string = filename + "-" + date.getDate().toString() + date.getMonth().toString() + date.getFullYear().toString() + date.getHours().toString() + date.getMinutes().toString();
    jsonToCsvExport({
      data: data,
      filename: fileName,
      delimiter: ",",
      headers: headers
    });
  }

}
