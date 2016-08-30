"use strict";

import {EventEmitter} from 'events';
import util from 'util';
import View from './view';

let App = function App() {
  this.on('view-selected', viewName => {
    let view = new View(viewName);
    this.emit("rendered", view.toHtml());
  });
};

util.inherits(App, EventEmitter);
module.exports = new App();
