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
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.fillRect(100, 10, 420, 270);


    //writing text
    var text1 = 'Ура, вы победили!';
    var text2 = 'Список результатов: ';
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.font = '16px PT Mono';
    ctx.shadowColor = 'transparent';
    ctx.fillText(text1, 120, 40);
    ctx.fillText(text2, 120, 60);


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
    var initialX = 140;
    var initialY = 260; //Y for names
    var barWidth = 40;
    var indent = 50;
    var columnY = (initialY - 20); //Y for columns
    var scoresY = (columnY - 10) //Y for scores


    for (var i = 0; i < times.length; i++) {
        ctx.fillText((times[i].toFixed(0)), (initialX + (barWidth * i) + (indent * i)), (scoresY - (times[i] * step)));

        ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
        if (names[i] == "Вы") {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        }
        ctx.fillRect((initialX + (barWidth * i) + (indent * i)), columnY, barWidth, -(times[i] * step));
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.fillText(names[i], (initialX + (barWidth * i) + (indent * i)), initialY);

    }
}
