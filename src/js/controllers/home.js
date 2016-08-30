'use strict';

var _list = require('../libs/list');

var _list2 = _interopRequireDefault(_list);

var _videoPlayer = require('../libs/video-player');

var _videoPlayer2 = _interopRequireDefault(_videoPlayer);

var _databaseService = require('../libs/database-service');

var _databaseService2 = _interopRequireDefault(_databaseService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initHome = function initHome() {
  initButtons();
  _databaseService2.default.getPlaylist();
  _videoPlayer2.default.initPlayer();
};

var initButtons = function initButtons() {}
// getAllTracksBtn();


// let getAllTracksBtn = () => {
//   let button = document.getElementById('get-all-tracks-btn');
//   let form = {
//     name: 'test2',
//     artist: 'test artist',
//     duration: 18500,
//     uploader: 'test person'
//   }
//   button.onclick = ev => {
//     request.post({
//       url: 'http://52.39.82.57:3000/node/api/tracks',
//       form: form
//     }, (err, res, body) => {
//       console.log(err);
//       console.log(res);
//       console.log(body);
//     });
//   }
// }

;module.exports = {
  initHome: initHome
};
//# sourceMappingURL=C:\DiscordDJ\controllers\home.js.map