import { Component, OnInit, Input } from "@angular/core";
import _ from "lodash";
import {THEME_COLORS} from "../../shared/theme.colors";

const THEME = "Bright";

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"]
})
export class PieChartComponent implements OnInit {
  constructor() {}

  @Input() inputData: any;
  @Input() limit: number;


  public pieChartData: number[];
  public pieChartLabels: string[];
  public colors: any[] = [
    {
      backgroundColor: this.themeColors(THEME),
      borderColor: "#111"
    }
  ];
  public pieChartType: string = "doughnut";

  ngOnInit() {
    this.parseChartData(this.inputData, this.limit);
  }

  parseChartData(res: any, limit?: number) {
    const allDAta = res.slice(0, limit);
    this.pieChartData = allDAta.map(x => _.values(x)[1]);
    this.pieChartLabels = allDAta.map(x => _.values(x)[0]);    
  }
  themeColors(setName: string): string[]{
    const c = THEME_COLORS.slice(0)
      .find(set => set.name === setName).colorSet;
    return c;
  }
}

