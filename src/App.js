import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import SearchBar from './components/SearchBar';
import Location from './components/Location';
import Panel from './components/Panel';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Travel with a Purpose!",
      locations: []
    }
  }


  // AJAX CALLS GO HERE
  componentDidMount() {
    console.log("Component Mounted!");
  };

  addLocation(event){

    // Prevent form from submitting
    event.preventDefault();

    let data = {
      name: this.refs.name.value,
      city: this.refs.city.value
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

  searchItems() {

  }

  render() {

    let title = this.state.title;

    return (
      <div className="App">
        <NavBar />
        <h4> { title } </h4>

      </div>
    );
  }
}

export default App;
