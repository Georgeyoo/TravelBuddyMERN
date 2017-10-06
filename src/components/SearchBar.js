import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import api from '../utils/api.js'


class SearchBar extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     locations: []
  //   }
  // }

  constructor(props) {
    super(props)
    this.state = { address: 'San Francisco, CA' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
 
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }
  
  // AJAX CALLS GO HERE
  componentDidMount() {
    /*api.fetchBusinesses(37.791298, -122.393743)
      .then(function(response) {
        console.log(response);
      })*/
  };

  addLocation(event){

    // Prevent form from submitting
    event.preventDefault();

    let data = {
      name: this.refs.name.value
    };

    var request = new Request("http://localhost:3000/api/new-location", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json"}),
      body: JSON.stringify(data)
    });

    //xmlhttprequest()
    fetch(request)
      .then(function(response) {
        response.json()
          .then(function(data) {
            console.log(data);
          })
      })
  }

  setCurrentLocation() {
    var currentLocation = api.getLocation();

    console.log(currentLocation);
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <div className="row valign-wrapper search-bar">
          <form className="col s10" onSubmit={this.handleFormSubmit}>
            <div className="row input-field col s9">
                <PlacesAutocomplete inputProps={inputProps} />
            </div>
            <div className="row center-align col s9">
              <a className="waves-effect waves-light btn red" onClick={ this.addLocation.bind(this) }>Find Places</a>
              <a className="waves-effect waves-teal btn-flat" onClick={ this.setCurrentLocation }>Use my current location</a>
            </div>
          </form>
        </div>
    );
  }
}

export default SearchBar;