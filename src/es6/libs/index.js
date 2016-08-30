// TODO: Possibly split this up into two libraries

import app from '../view-engines/app';
import electron from 'electron';

let Index = () => {
  app.on("rendered", rendered => {
    $("#main").html(rendered);
  });
}

let showContent = view => {
  app.emit("view-selected", view);
  $('.menu .btn').on("click", ev => {
    ev.preventDefault();
    showContent(ev.currentTarget.id);
  });
}

$(() => {
  showContent('home');
  initToolbar();
});

let initToolbar = () => {
  let appWindow = electron.remote.getCurrentWindow();
  let toolbarExit = () => {
    $('#toolbar-exit').on('click', ev => {
      ev.preventDefault();
      appWindow.close();
    });
  }

  let toolbarMinimize = () => {
    $('#toolbar-minimize').on('click', ev => {
      ev.preventDefault();
      appWindow.minimize();
    });
  }

  let toolbarMaximize = () => {
    $('#toolbar-maximize').on('click', ev => {
      ev.preventDefault();
      appWindow.maximize();
      $('#toolbar-maximize').off('click')
        .on('click', ev => {
          ev.preventDefault();
          appWindow.unmaximize();
          toolbarMaximize();
        });
    });
  }
  toolbarExit();
  toolbarMinimize();
  toolbarMaximize();
}

module.exports = {
  index: new Index()
}
