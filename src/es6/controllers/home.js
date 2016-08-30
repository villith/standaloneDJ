import list from '../libs/list';
import player from '../libs/video-player';
import client from '../libs/database-service';

let initHome = () => {
  initButtons();
  client.getPlaylist();
  player.initPlayer();
}

let initButtons = () => {
  // getAllTracksBtn();
}

// let getAllTracksBtn = () => {
//   let button = document.getElementById('get-all-tracks-btn');
//   let form = {
//     name: 'test2',
//     artist: 'test artist',
//     duration: 18500,
//     uploader: 'test person'
//   }
//   button.onclick = ev => {
//     request.post({
//       url: 'http://52.39.82.57:3000/node/api/tracks',
//       form: form
//     }, (err, res, body) => {
//       console.log(err);
//       console.log(res);
//       console.log(body);
//     });
//   }
// }

module.exports = {
  initHome: initHome
}
