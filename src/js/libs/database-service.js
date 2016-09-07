'use strict';

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p = _path2.default.join(__dirname, '..', '..', 'trackList.json');
var tableData = [];

var uploadFile = function uploadFile(file) {
  var data = _fs2.default.readFileSync(file.path, 'base64');
  var form = {
    name: file.name,
    file: data
  };
  console.log(form);
  _request2.default.post({
    url: 'http://52.39.82.57:3000/node/api/tracks',
    form: form
  }, function (err, res, body) {
    console.log(err);
    console.log(res);
    console.log(body);
  });
};

var addYTAudio = function addYTAudio(url) {
  var form = {
    url: url
  };
  _request2.default.post({
    url: 'http://52.39.82.57:3000/node/api/youtube',
    form: form
  }, function (err, res, body) {
    console.log(err);
    console.log(res);
    console.log(body);
  });
};

var getAllTracks = function getAllTracks() {
  var missingTrackIDs = [];
  _request2.default.get({
    url: 'http://52.39.82.57:3000/node/api/tracks/sync'
  }, function (err, res, body) {
    var parsedBody = JSON.parse(body);
    var data = parsedBody.data;
    for (var i = 0; i < data.length; i++) {
      var index = findById(data[i].id);
      if (index === false) {
        missingTrackIDs.push(data[i].id);
      }
    }
    missingTrackIDs.forEach(function (id) {
      downloadTrack(id);
    });
  });
};

var findById = function findById(id) {
  var index = false;
  var trackArray = trackList.tracks.slice(0);
  for (var i = 0; i < trackArray.length; i++) {
    if (trackArray[i][0].id === id) {
      index = i;
    }
  }
  return index;
};

var downloadTrack = function downloadTrack(trackID) {
  _request2.default.get({
    url: 'http://52.39.82.57:3000/node/api/tracks/' + trackID
  }, function (err, res, body) {
    var parsedBody = JSON.parse(body);
    var data = parsedBody.data;
    trackList.tracks.push(data);
    _fs2.default.writeFileSync(p, JSON.stringify(trackList, null, 2));
    console.log(data[0].name + ' downloaded!');
  });
};
module.exports = {
  uploadFile: uploadFile,
  getAllTracks: getAllTracks,
  addYTAudio: addYTAudio
};
//# sourceMappingURL=C:\DiscordDJ\libs\database-service.js.map