let drawRow = rowData => {
  let listColumns = ['name', 'artist', 'duration'];
  let data = Object.keys(rowData);
  for (let i = 0; i < data.length; i++) {
    let rowObj = rowData[data[i]];
    let row = $('<tr class="playlist-track" />');
    $(`#playlist-list`).append(row);
    listColumns.forEach(item => {
      row.append($(`<td>${rowObj[item]}</td>`));
    });
    row.append($('<td><a href="#" class="upvote-playlist-track"><i class="fa fa-thumbs-up text-success"></i></a> <a href="#" class="downvote-playlist-track"><i class="fa fa-thumbs-down text-danger"></i></a></td>'));
  }
}

let drawTable = tableData => {
  tableData.forEach(row => {
    drawRow(row);
  })
}

module.exports = {
  drawTable: drawTable
}
