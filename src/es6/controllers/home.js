import list from '../libs/list';
import player from '../libs/video-player';
import client from '../libs/database-service';

let initHome = () => {
  initButtons();
  client.getAllTracks();
  player.initPlayer();
  list.drawTable(trackList.tracks);
}

let initButtons = () => {
  youtubeAddBtn();
}

let youtubeAddBtn = () => {
  let inputForm = document.getElementById('youtube-add-form');
  inputForm.onsubmit = ev => {
    ev.preventDefault();
    let url = ev.srcElement[0].value;
    client.addYTAudio(url);
  }
}

module.exports = {
  initHome: initHome
}
