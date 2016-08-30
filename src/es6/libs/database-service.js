import request from 'request';
import fs from 'fs';
import list from './list';

let tableData = [];

let uploadFile = file => {
  let data = fs.readFileSync(file.path, 'base64');
  let form = {
    name: file.name,
    file: data
  }
  console.log(form);
  request.post({
    url: 'http://52.39.82.57:3000/node/api/tracks',
    form: form
  }, (err, res, body) => {
    console.log(err);
    console.log(res);
    console.log(body);
  });
}

let getPlaylist = () => {
  request.get({
    url: 'http://52.39.82.57:3000/node/api/tracks'
  }, (err, res, body) => {
    body.forEach(fileName => {
    })
    let parsedBody = JSON.parse(body);
    let data = parsedBody.data;
    data.forEach(file => {
      let tmpDir = `./src/tmp/${file.name}`;
      fs.stat(tmpDir, (err, stats) => {
        if (!err) {
          console.log(stats);
        }
        else if (err.code === 'ENOENT') {
          fs.writeFileSync(tmpDir, file.data, 'base64');
          fs.stat(tmpDir, (e, s) => {
            if (e.code === 'ENOENT') {
              return console.log('Something is wrong. Check database-service.js');
            }
          })
        }
        else {
          console.log(err);
        }
      })
    })
  })
}
module.exports = {
  uploadFile: uploadFile,
  getPlaylist: getPlaylist
}
