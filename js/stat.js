'use strict';
window.renderStatistics = function (ctx, names, times) {
  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max);
  var initialX = 140;
  var initialY = 260; // Y for names
  var barWidth = 40;
  var indent = 50;
  var columnY = (initialY - 20); // Y for columns
  var scoresY = (columnY - 10); // Y for scores

    // drawing cloud
  function drawCloud() {
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 10;
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.fillRect(100, 10, 420, 270);
  }

    // writing text
  function writeText() {
    var text1 = 'Ура, вы победили!';
    var text2 = 'Список результатов: ';
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.font = '16px PT Mono';
    ctx.shadowColor = 'transparent';
    ctx.fillText(text1, 120, 40);
    ctx.fillText(text2, 120, 60);
  }

  function getX(index) {
    return initialX + (barWidth * index) + (indent * index);
  }

  function drawScore(index) {
    ctx.fillText((times[index].toFixed(0)),
        getX(index),
        (scoresY - (times[index] * step)));
  }

  function drawColumn(index) {
    ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(getX(index), columnY, barWidth, -(times[index] * step));
  }

  function drawNames(index) {
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.fillText(names[index], getX(index), initialY);
  }

  drawCloud();
  writeText();

  for (i = 0; i < times.length; i++) {
    drawScore(i);
    drawColumn(i);
    drawNames(i);
  }
};
