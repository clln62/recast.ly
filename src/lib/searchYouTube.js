var searchYouTube = (options, callback) => {
  // TODO
  var url = 'https://www.googleapis.com/youtube/v3/search';
  $.ajax({
    url: url,
    type: 'GET',
    data: {
      part: 'snippet',
      q: options.query,
      maxResults: 5,
      type: 'video',
      key: window.YOUTUBE_API_KEY,
      videoEmbeddable: true,
    },
    success: function (data) {
      //console.log(‘successful fetch from server: ’, data);
      callback(data);
    },
    error: function (data) {
      console.error('failed to send ajax request', data);
    }
  });
 
};

export default searchYouTube;

window.searchYouTube = searchYouTube;