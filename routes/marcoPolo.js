var marcoPolo = {};

var getSeriesMarcoPolo = function() {
  var series = [];
  var line = "";
  for (var j = 1; j <= 100000; j++) {
    if (j % 4 === 0 && j % 7 === 0) {
      line += "marcopolo,";
    } else if (j % 4 === 0) {
      line += "marco,";
    } else if (j % 7 === 0) {
      line += "polo,";
    } else {
      line += j + ",";
    }
  }
  series.push({ line: line.substring(0, line.length - 1) });
  return series;
};

marcoPolo.getGameResult = function(value) {
  setImmediate(function() {
    value({ success: true, series: getSeriesMarcoPolo() });
  });
};

module.exports = marcoPolo;
