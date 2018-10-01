var Highcharts = require('highcharts');

Highcharts.chart('container', {
    title: {
        text: '阶梯型直线图'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        data: [1, 2, 3, 4, null, 6, 7, null, 9],
        step: 'right', // 连接线转折对齐
        name: 'Right'
    }, {
        data: [5, 6, 7, 8, null, 10, 11, null, 13],
        step: 'center', // 连接线转折对齐
        name: 'Center'
    }, {
        data: [9, 10, 11, 12, null, 14, 15, null, 17],
        step: 'left', // 连接线转折对齐
        name: 'Left'
    }]
});