import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const baseURL: string = "http://localhost:5000";

@Injectable({
  providedIn: "root"
})
export class SalesDataService {
  constructor(private _http: HttpClient) {}

  getOrders(pageIndex: number, pageSize: number) {
    return this._http.get(`${baseURL}/api/order/${pageIndex}/${pageSize}`);
  }
}
