
var sales = { "SalesData" : [ 
{ "name"  : "AllProducts|Canada", "data" :449 },
{ "name"  : "AllProducts|Mexico", "data" : 200 },
{ "name"  : "AllProducts|USA",    "data" : 288 }
                ]}  ; 
var series = [],
salesData= sales.salesData;

for (var i=0; i< salesData.length; i++) {
series.push({"name" : salesData[i].id, "data" : salesData[i].hapilevel})
};
console.log(series)
/*
var chartdata = {
chart: {type: 'column'},
title: {text: 'Sales Data'},
xAxis: {
    categories: ['Category 1','Category 2']
},
yAxis: {
    min: 0,
    title: {text: 'Sales'}
},
series : []
};

chartdata.series = series;*/

//$('#chart').highcharts(chartdata);

