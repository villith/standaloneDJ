'use strict';

var drawRow = function drawRow(rowData) {
  var listColumns = ['name'];
  var data = Object.keys(rowData);

  var _loop = function _loop(i) {
    var rowObj = rowData[data[i]];
    var row = $('<tr class="playlist-track" />');
    $('#playlist-list').append(row);
    listColumns.forEach(function (item) {
      row.append($('<td>' + rowObj[item] + '</td>'));
    });
    row.append($('<td><a href="#" class="upvote-playlist-track"><i class="fa fa-thumbs-up text-success"></i></a> <a href="#" class="downvote-playlist-track"><i class="fa fa-thumbs-down text-danger"></i></a></td>'));
  };

  for (var i = 0; i < data.length; i++) {
    _loop(i);
  }
};

var drawTable = function drawTable(tableData) {
  tableData.forEach(function (row) {
    drawRow(row);
  });
};

module.exports = {
  drawTable: drawTable
};
//# sourceMappingURL=C:\DiscordDJ\libs\list.js.map