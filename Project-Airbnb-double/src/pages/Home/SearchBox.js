import React, { Component } from 'react';
import "./SearchBox.css";

class SearchBox extends Component{
  state={
    where: "", checkIn: "", checkOut: "", guests: 0,
  }

  changeWhere = (e) =>{
    this.setState({where: e.target.value});
  }
  changecheckIn = (e) =>{
    this.setState({checkIn: e.target.value});
  }
  changecheckOut = (e) =>{
    this.setState({checkOut: e.target.value});
  }

  changeGuests = (e) =>{
    this.setState({guests: e.target.value});
  }

  render(){
    return(
      <div className="home-search-box col m4">
        <h1>Book unique places to stay and things to do </h1>

        <form className="search-box-form">
          <div className="col m12">
            <div className="form-label">Where</div>
            <div className="input-field" id="where">
              <input className="browser-default" onChange={this.changeWhere} placeholder="Anywhere" value={this.state.where} type="text"></input>
            </div>
          </div>

          <div className="col m6">
            <div className="form-label">Check-IN</div>
            <div className="input-field" id="check-in">
              <input className="browser-default" onChange={this.changecheckIn} placeholder="Anywhere" value={this.state.checkIn} type="date"/>
            </div>
          </div>

          <div className="col m6">
            <div className="form-label">Check-Out</div>
            <div className="input-field" id="check-in">
              <input className="browser-default" onChange={this.changecheckOut} placeholder="Anywhere" value={this.state.checkOut} type="date"/>
            </div>
          </div>

          <div className="col m12">
            <div className="form-label">Guest</div>
            <div className="input-field" id="where">
              <input className="browser-default" onChange={this.changeGuests} placeholder="Guest" value={this.state.guests} type="number"></input>
            </div>
          </div>

          <div className="col m12 submit-btn">
            <div className="input-field" id="submit-btn">
              <input className="btn-large waves-effect waves-light red accent-2" type="submit"></input>
            </div>
          </div>

        </form>
      </div>
     
    )
  }
}

export default SearchBox;