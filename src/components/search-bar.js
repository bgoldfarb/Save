import React, { Component } from 'react';

//AIzaSyAFh5yE6rtXRZjGnPiasvsr3faOKX8zBvc
class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchText : ""
        }
        this.handleChange = this.handleChange.bind(this)


    }
    handleChange(e) {
        this.setState({searchText: e.target.value});
    }

  render() {
      
    return (
      <div className="search-bar">
        <input type="text" className="input"  onChange={this.handleChange} placeholder="Search...."/>
        <ul>
            {this.state.searchText}
            {console.log(this.props)}
            
        </ul>
        
      </div>
    );
  }
}

export default SearchBar;
