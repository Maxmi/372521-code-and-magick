'use strict'
window.renderStatistics = function(ctx, names, times) {
    var canvas = document.querySelector('.demo > canvas');
    console.log(times);

    var ctx = canvas.getContext('2d');

    //drawing cloud
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 10;
    ctx.fillStyle = 'white';
    ctx.fillRect(100, 10, 420, 270);
    //ctx.save();

    //writing text
    var text1 = 'Ура, вы победили!';
    var text2 = 'Список результатов: ';
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.shadowColor = 'transparent';
    ctx.fillText(text1, 110, 40);
    ctx.fillText(text2, 110, 60);


    var max = -1;
    var maxIndex = -1;
    for (var i = 0; i < times.length; i++) {
        var time = times[i];
        if (time > max) {
            max = time;
            maxIndex = i;
        }
    }

    var histogramHeight = 150;
    var step = histogramHeight / (max);

    var initialX = 120;
    var initialY = 80;
    var barWidth = 40;
    var indent = 50;
    var vertIndent = 20;


    for (var i = 0; i < times.length; i++) {
        ctx.fillText((times[i].toFixed(0)), (initialX + (barWidth * i) + (indent * i)), initialY);
        ctx.fillStyle = 'rgba(255, 0, 0, 1)'; //red should be for You only, others should be blue
        ctx.fillRect((initialX + (barWidth * i) + (indent * i)), initialY, barWidth, times[i] * step);
        //bars should be aligned at the bottom, not on the top
        ctx.fillStyle = "black";
        ctx.fillText(names[i], (initialX + (barWidth * i) + (indent * i)), initialY + histogramHeight + vertIndent);

    }
}
