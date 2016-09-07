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
  _databaseService2.default.getAllTracks();
  _videoPlayer2.default.initPlayer();
  _list2.default.drawTable(trackList.tracks);
};

var initButtons = function initButtons() {
  youtubeAddBtn();
};

var youtubeAddBtn = function youtubeAddBtn() {
  var inputForm = document.getElementById('youtube-add-form');
  inputForm.onsubmit = function (ev) {
    ev.preventDefault();
    var url = ev.srcElement[0].value;
    _databaseService2.default.addYTAudio(url);
  };
};

module.exports = {
  initHome: initHome
};
//# sourceMappingURL=C:\DiscordDJ\controllers\home.js.map