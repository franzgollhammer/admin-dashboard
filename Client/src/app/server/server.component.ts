import { Component, OnInit, Input } from "@angular/core";
import { Server } from "selenium-webdriver/safari";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  constructor() {}

  @Input() serverInput: Server;

  ngOnInit() {}
}
