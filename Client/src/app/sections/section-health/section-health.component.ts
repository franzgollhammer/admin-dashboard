import { Component, OnInit } from "@angular/core";
import { Server } from "../../models/server";

const SAMPLE_SERVERS: Server[] = [
  { id: 1, name: "dev-web", isOnline: true },
  { id: 2, name: "dev-mail", isOnline: true },
  { id: 3, name: "prod-web", isOnline: true },
  { id: 4, name: "porn-web", isOnline: false }
];

@Component({
  selector: "app-section-health",
  templateUrl: "./section-health.component.html",
  styleUrls: ["./section-health.component.css"]
})
export class SectionHealthComponent implements OnInit {
  constructor() {}

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {}
}
