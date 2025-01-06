<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HLS Video Player</title>
  <link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet" />
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background: #000;
    }
    .video-js {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .vjs-menu-item-text {
      color: #fff;
    }
  </style>
</head>
<body>
  <video id="my-video-player" class="video-js vjs-default-skin" controls preload="auto"></video>

  <script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/videojs-contrib-hls/dist/videojs-contrib-hls.min.js"></script>
  <script>
    // Initialize the player
    const player = videojs('my-video-player', {
      autoplay: false,
      controls: true,
      fluid: true, // Make the player responsive
      preload: 'auto',
      html5: {
        hls: {
          xhrSetup: function(xhr) {
            // Set the required headers for the HLS request
            xhr.setRequestHeader('Cookie', 'hd=on; t_hash_t=d46ac23e38a168698f3ff6c411c971f0::d73117eaa536fc2368bf0c88014dd231::1736140201::ni');
            xhr.setRequestHeader('Origin', 'https://iosmirror.cc'); // Add the Origin header
          }
        }
      }
    });

    // Configure the HLS source
    const videoSource = {
      src: 'https://s03.nfmirrorcdn.top/files/220884/1080p/1080p.m3u8?in=d46ac23e38a168698f3ff6c411c971f0::c32440160087d6c98b121b1a3c296231::1736140845::ni',
      type: 'application/x-mpegURL',
    };

    // Add HLS source to the player
    player.src(videoSource);
  </script>
</body>
</html>
