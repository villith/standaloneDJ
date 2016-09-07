'use strict';

var initPlayer = function initPlayer() {
  var Player = videojs('video-frame', {
    bigPlayButton: false,
    controls: true,
    autoplay: false,
    preload: 'auto',
    controlBar: {
      progressControl: false
    }
  }, function () {
    Player.on('ended', function () {
      Player.src();
    });
  });
};

module.exports = {
  initPlayer: initPlayer
};
//# sourceMappingURL=C:\DiscordDJ\libs\video-player.js.map
