let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.50,
    fill: {gradient: ['#0077B6', '#0077B6']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".cpp .bar").circleProgress({
    value: 0.70
  });
  $(".py .bar").circleProgress({
    value: 0.58
  });
  $(".php .bar").circleProgress({
    value: 0.70
  });
  $(".sql .bar").circleProgress({
    value: 0.60
  });
  $(".django .bar").circleProgress({
    value: 0.30
  });
  $(".node .bar").circleProgress({
    value: 0.30
  });
  
  $(".html .bar").circleProgress({
    value: 0.50
  });
  
  $(".js .bar").circleProgress({
    value: 0.30
  });
  