export default class Search extends React.Component {
  constructor (props) {
    super(props);
  }


  render () {
    var videoSearch = function (event) {
      var query = event.target.value;
      var queryObj = {q: query};
      this.props.navType(queryObj);
    };

    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onKeyUp={videoSearch.bind(this)} />
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