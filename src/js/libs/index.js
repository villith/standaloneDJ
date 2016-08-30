'use strict';

var _app = require('../view-engines/app');

var _app2 = _interopRequireDefault(_app);

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Possibly split this up into two libraries

var Index = function Index() {
  _app2.default.on("rendered", function (rendered) {
    $("#main").html(rendered);
  });
};

var showContent = function showContent(view) {
  _app2.default.emit("view-selected", view);
  $('.menu .btn').on("click", function (ev) {
    ev.preventDefault();
    showContent(ev.currentTarget.id);
  });
};

$(function () {
  showContent('home');
  initToolbar();
});

var initToolbar = function initToolbar() {
  var appWindow = _electron2.default.remote.getCurrentWindow();
  var toolbarExit = function toolbarExit() {
    $('#toolbar-exit').on('click', function (ev) {
      ev.preventDefault();
      appWindow.close();
    });
  };

  var toolbarMinimize = function toolbarMinimize() {
    $('#toolbar-minimize').on('click', function (ev) {
      ev.preventDefault();
      appWindow.minimize();
    });
  };

  var toolbarMaximize = function toolbarMaximize() {
    $('#toolbar-maximize').on('click', function (ev) {
      ev.preventDefault();
      appWindow.maximize();
      $('#toolbar-maximize').off('click').on('click', function (ev) {
        ev.preventDefault();
        appWindow.unmaximize();
        toolbarMaximize();
      });
    });
  };
  toolbarExit();
  toolbarMinimize();
  toolbarMaximize();
};

module.exports = {
  index: new Index()
};
//# sourceMappingURL=C:\DiscordDJ\libs\index.js.map