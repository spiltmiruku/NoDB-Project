import React, { Component } from "react";
import "./App.css";
import FlightCard from './Components/FlightCard';
import Header from './Components/Header';
import MainPage from './Components/MainPage'
import UpcomingTrips from './Components/UpcomingTrips';


class App extends Component {
  constructor() {
    super();
    this.state = {
            onUpcomingTripsPage: false, 
    };
  }
  render() {
    return <div className="App">
       <FlightCard />
       <Header />
       <MainPage />
       <UpcomingTrips />

    </div>;
  }
}

export default App;
