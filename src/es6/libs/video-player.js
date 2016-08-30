let initPlayer = () => {
  let Player = videojs('video-frame', {
    bigPlayButton: false,
    controls: true,
    autoplay: true,
    preload: 'auto',
    controlBar: {
      progressControl: false
    }
  }, () => {
    Player.on('ended', () => {
      Player.src()
    })
  })
}

module.exports = {
  initPlayer: initPlayer
}
