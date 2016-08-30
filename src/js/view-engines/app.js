"use strict";

var _events = require('events');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  var _this = this;

  this.on('view-selected', function (viewName) {
    var view = new _view2.default(viewName);
    _this.emit("rendered", view.toHtml());
  });
};

_util2.default.inherits(App, _events.EventEmitter);
module.exports = new App();
//# sourceMappingURL=C:\DiscordDJ\view-engines\app.js.map