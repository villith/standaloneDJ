'use strict';

var _databaseService = require('./database-service');

var _databaseService2 = _interopRequireDefault(_databaseService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dropHandler = function dropHandler(ev) {
  ev.preventDefault();
  var files = ev.dataTransfer.files;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    _databaseService2.default.uploadFile(file);
  }
};

var dragoverHandler = function dragoverHandler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = 'move';
};

module.exports = {
  dropHandler: dropHandler,
  dragoverHandler: dragoverHandler
};
//# sourceMappingURL=C:\DiscordDJ\libs\drag-n-drop.js.map