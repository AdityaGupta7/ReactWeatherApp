import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term : '' };
    this.onInputChange = this.onInputChange.bind(this); // binds 'this' keyword so that it can be used from
    //inside onInputChange()
    //take existing function this.onInputChange, bind it with 'this' of SearchBar and replace it with the LHS
    //this.onInputChange of the onInputChange function
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){//onInputChange is a callback from 'onChange' of input
    //console.log(event.target.value);
    this.setState({term: event.target.value});//setState is not originally defined, so be have to bind the
    //context in order to use it; because it is in a callback from inside the render function
  }
  onFormSubmit(event){// onFormSubmit is a callback from 'onSubmit' of the form
    //stop working of ENTER or SEARCH just yet
    event.preventDefault();
    //we need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    //this is to clear the state of search because otherwise the current search will become default in search bar
    //for next time and we will have to manually clear it..
    this.setState({ term : '' });
  }
  render(){
    return (
    <form onSubmit={this.onFormSubmit} className="input-group">
      <input
        placeholder="Get a five-day forecast in your favourite cities!"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange} />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Search</button>
      </span>
    </form>
    );
  }
}//the following gives us access to fetchWeather function of action creator; available as props
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar); //we pass null first because there is no
//mapStateToProps as first argument. Therefore, to have mapDispatchToProps as the second argument, we need
//to write null as first argument because we don't have that
