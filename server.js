// api/proxy-hls.js
const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const hlsUrl = 'https://s06.nm-cdn.top/files/81436990/720p/720p.m3u8?in=d46ac23e38a168698f3ff6c411c971f0::2c8d5de29e67316b323e3c469dacf07f::1736146255::ni'; // Replace with the actual HLS URL
    const response = await axios.get(hlsUrl, {
      headers: {
          'Origin': 'https://iosmirror.cc',
          "Referer": "https://iosmirror.cc/"// Replace with the required origin
      },
      responseType: 'stream',
    });

    // Set the correct content type for HLS
    res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (or specify your website origin)

    // Pipe the HLS stream to the response
    response.data.pipe(res);
  } catch (error) {
    res.status(500).send('Error fetching the HLS stream');
  }
};
