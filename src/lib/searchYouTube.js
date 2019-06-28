var searchYouTube = (options, callback) => {
  var defaults = {
    query: 'snippet',
    key: window.YOUTUBE_API_KEY,
    type: 'video',
    max: 5,
    videoEmbeddable: true,
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    cache: false,
    type: 'GET',
    data: _.merge(defaults, options),
    dataType: 'json',
    success: function (data) {
      callback(data);
    },
    error: function (data) {
      console.log(data);
    }
  });
};


searchYouTube.propTypes = {
  key: React.PropTypes.object.isRequired,
  query: React.PropTypes.object.isRequired

};

export default searchYouTube;

window.searchYouTube = searchYouTube;