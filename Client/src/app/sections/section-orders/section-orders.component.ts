import { Component, OnInit } from "@angular/core";
import { Order } from "../../models/order";
import { SalesDataService } from "src/app/services/sales-data.service";

@Component({
  selector: "app-section-orders",
  templateUrl: "./section-orders.component.html",
  styleUrls: ["./section-orders.component.css"]
})
export class SectionOrdersComponent implements OnInit {
  constructor(private _salesData: SalesDataService) {}

  orders: Order[];
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  // orders: Order[] = [
  //   {
  //     id: 1,
  //     customer: { id: 1, name: "Batman", email: "bman@gmx.com", state: "CO" },
  //     total: 230,
  //     placed: new Date(2018, 12, 1),
  //     fulfilled: new Date(2018, 12, 22),
  //     status: "Complete"
  //   },
  //   {
  //     id: 2,
  //     customer: { id: 1, name: "Superman", email: "sman@gmx.com", state: "CO" },
  //     total: 230,
  //     placed: new Date(2018, 12, 1),
  //     fulfilled: new Date(2018, 12, 22),
  //     status: "Complete"
  //   },
  //   {
  //     id: 3,
  //     customer: {
  //       id: 1,
  //       name: "Spiderman",
  //       email: "spidey69@gmail.com",
  //       state: "CO"
  //     },
  //     total: 230,
  //     placed: new Date(2018, 12, 1),
  //     fulfilled: new Date(2018, 12, 22),
  //     status: "Complete"
  //   },
  //   {
  //     id: 4,
  //     customer: {
  //       id: 1,
  //       name: "Green Lantern",
  //       email: "GreenHomo@gayzone.com",
  //       state: "CO"
  //     },
  //     total: 230,
  //     placed: new Date(2018, 12, 1),
  //     fulfilled: new Date(2018, 12, 22),
  //     status: "Complete"
  //   },
  //   {
  //     id: 5,
  //     customer: {
  //       id: 1,
  //       name: "Lady Gaga",
  //       email: "gaga@gmx.net",
  //       state: "CO"
  //     },
  //     total: 230,
  //     placed: new Date(2018, 12, 1),
  //     fulfilled: new Date(2018, 12, 22),
  //     status: "Complete"
  //   }
  // ];

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this._salesData.getOrders(this.page, this.limit).subscribe(res => {
      console.log("Result from getOrders: ", res);
      this.orders = res["page"]["data"];
      this.total = res["page"].total;
      this.loading = false;
    });
  }

  goToPrevious(): void {
    console.log("Previous page");
  }
}
