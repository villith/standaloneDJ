'use strict';

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var getPlaylist = function getPlaylist() {
  _request2.default.get({
    url: 'http://52.39.82.57:3000/node/api/tracks'
  }, function (err, res, body) {
    body.forEach(function (fileName) {});
    var parsedBody = JSON.parse(body);
    var data = parsedBody.data;
    data.forEach(function (file) {
      var tmpDir = './src/tmp/' + file.name;
      _fs2.default.stat(tmpDir, function (err, stats) {
        if (!err) {
          console.log(stats);
        } else if (err.code === 'ENOENT') {
          _fs2.default.writeFileSync(tmpDir, file.data, 'base64');
          _fs2.default.stat(tmpDir, function (e, s) {
            if (e.code === 'ENOENT') {
              return console.log('Something is wrong. Check database-service.js');
            }
          });
        } else {
          console.log(err);
        }
      });
    });
  });
};
module.exports = {
  uploadFile: uploadFile,
  getPlaylist: getPlaylist
};
//# sourceMappingURL=C:\DiscordDJ\libs\database-service.js.map