import client from './database-service';

let dropHandler = ev => {
  ev.preventDefault();
  let files = ev.dataTransfer.files;
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    client.uploadFile(file);
  }
}

let dragoverHandler = ev => {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = 'move';
}

module.exports = {
  dropHandler: dropHandler,
  dragoverHandler: dragoverHandler
}
