"use strict";

// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }
Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('chart-container', {
    chart: {
      type: 'line',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100,
      spacingLeft: -10
    },
    title: {
      text: null
    },
    data: {
      googleSpreadsheetKey: '1ACho-7HV21S9J4gSZC_TH2uNmTS7xeBabJm4ySz-zEs',
      googleSpreadsheetWorksheet: 3
    },
    plotOptions: {
      series: {
        lineWidth: 1,
        // clip: false,
        marker: {
          enabled: false,
          symbol: 'circle',
          fillColor: '#ffffff',
          states: {
            hover: {
              fillColor: '#ffffff'
            }
          }
        }
      }
    },
    legend: {
      enabled: false
    },
    xAxis: {
      labels: {
        style: {
          whiteSpace: 'nowrap'
        }
      },
      tickLength: 5
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow'
      },
      min: 0,
      max: 10,
      tickAmount: 6
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 10
          },
          tooltip: {
            enabled: false
          }
        }
      }]
    }
  });
});