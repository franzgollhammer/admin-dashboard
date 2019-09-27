import { Component, OnInit } from "@angular/core";
import { LINE_CHART_COLORS } from "../../shared/chart.colors";

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [24, 54, 43, 33, 15, 29], label: "Sentiment Analysis" },
  { data: [11, 24, 13, 23, 35, 29], label: "Image Recognition" },
  { data: [31, 27, 16, 3, 5, 39], label: "Forecasting" }
];

const LINE_CHART_SAMPLE_LABELS: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun"
];

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"]
})
export class LineChartComponent implements OnInit {
  constructor() {}

  public lineChartData = LINE_CHART_SAMPLE_DATA;
  public lineChartLabels = LINE_CHART_SAMPLE_LABELS;
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartLegend: true;
  public lineChartType: string = "line";
  public lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {}
}
