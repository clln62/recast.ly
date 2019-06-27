//import exampleVideoData from '../exampleVideoData/';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
      
    };


  }
 
  videoClick(video) {
    this.setState({
      currentVideo: video

    });
  }
  render() {
    console.log(exampleVideoData);
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search/></em> </h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo}/></em> </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={this.state.videos} videoClick={this.videoClick.bind(this)}/></em> </h5></div>
          </div>
        </div>
      </div>
    ); 
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;