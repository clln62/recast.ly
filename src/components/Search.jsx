export default class Search extends React.Component {
  constructor (props) {
    super(props);
  }

  videoSearch (event) {
    var query = event.target.value;
    var queryObj = {q: query};
    this.props.navType(queryObj);
  }

  render () {

    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onKeyUp={this.videoSearch.bind(this)} />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 

    );
  }
} 


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
 
// export default Search;

window.Search = Search;