"use strict";

import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';

let View = function(viewName) {
  let templatePath = path.join(__dirname, "..", "..", "/views/pages", viewName + ".hbs");
  let source = fs.readFileSync(templatePath, "utf-8");
  let template = handlebars.compile(source);

  this.toHtml = data => {
    return template(data);
  };
};

module.exports = View;
