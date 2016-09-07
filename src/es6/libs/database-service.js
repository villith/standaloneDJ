import request from 'request';
import fs from 'fs';
import list from './list';
import path from 'path';

let p = path.join(__dirname, '..', '..', 'trackList.json');
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

let addYTAudio = url => {
  let form = {
    url: url
  }
  request.post({
    url: 'http://52.39.82.57:3000/node/api/youtube',
    form: form
  }, (err, res, body) => {
    console.log(err);
    console.log(res);
    console.log(body);
  });
}

let getAllTracks = () => {
  let missingTrackIDs = [];
  request.get({
    url: 'http://52.39.82.57:3000/node/api/tracks/sync'
  }, (err, res, body) => {
    let parsedBody = JSON.parse(body);
    let data = parsedBody.data;
    for (let i = 0; i < data.length; i++) {
      let index = findById(data[i].id);
      if (index === false) {
        missingTrackIDs.push(data[i].id);
      }
    }
    missingTrackIDs.forEach(id => {
      downloadTrack(id);
    })
  })
}

let findById = id => {
  let index = false;
  let trackArray = trackList.tracks.slice(0);
  for (let i = 0; i < trackArray.length; i++) {
    if (trackArray[i][0].id === id) {
      index = i;
    }
  }
  return index;
}

let downloadTrack = trackID => {
  request.get({
    url: `http://52.39.82.57:3000/node/api/tracks/${trackID}`
  }, (err, res, body) => {
    let parsedBody = JSON.parse(body);
    let data = parsedBody.data;
    trackList.tracks.push(data);
    fs.writeFileSync(p, JSON.stringify(trackList, null, 2));
    console.log(`${data[0].name} downloaded!`);
  });
}
module.exports = {
  uploadFile: uploadFile,
  getAllTracks: getAllTracks,
  addYTAudio: addYTAudio
}
