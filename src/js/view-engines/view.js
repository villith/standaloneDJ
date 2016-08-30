"use strict";

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var View = function View(viewName) {
  var templatePath = _path2.default.join(__dirname, "..", "..", "/views/pages", viewName + ".hbs");
  var source = _fs2.default.readFileSync(templatePath, "utf-8");
  var template = _handlebars2.default.compile(source);

  this.toHtml = function (data) {
    return template(data);
  };
};

module.exports = View;
//# sourceMappingURL=C:\DiscordDJ\view-engines\view.js.map