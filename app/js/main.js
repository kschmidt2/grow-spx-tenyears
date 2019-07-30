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
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'area',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: -.5
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1B3YrD8-8CuVWEYUYNnYdiPSQuK5W8LIarki6xn0AjSQ',
            // startColumn: 2,
            endColumn: 1
        },
        plotOptions: {
            series: {
                lineWidth: 1,
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
            tickLength: 5,
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 3500,
            min: 0,
            tickAmount: 8
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            formatter: function () {
                return 'S&P 500: <b>' + this.y.toFixed(0);
            }
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