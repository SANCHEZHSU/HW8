Highcharts.chart('container', {
  chart: {
    type: 'spline'
  },
  title: {
    text: '2014-2019 SINGAPORE , JAPAN , CANADA 入境旅客人數比較圖'
  },
  subtitle: {
    text: 'Source: UNWTO'
  },
  xAxis: {
    categories: ['2014', '2015', '2016', '2017', '2018', '2019',
      ]
  },
  yAxis: {
    title: {
      text: '入境人數 (MILLION)'
    },
    labels: {
      formatter: function () {
        return this.value;
      }
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
      }
    }
  },
  series: 
  [
    
    {name: 'SINGAPORE',
    marker: {symbol: 'square'},
    data: [11.9,	12.1,	12.9,	13.9,	14.7,	19.1]
}, 
     {name: 'CANADA',
    marker: {symbol: 'triangle'},
    data: [16.5,	18	,20,	20.9,	21.1	,22.1]
}, 
  {name: 'JAPAN',
    marker: {symbol: 'diamond'},
    data: [13.4,	19.7	,24	,28.7,	31.2,	31.9]
  }]
});