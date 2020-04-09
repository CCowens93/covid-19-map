import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import data from './components/covid-19-data'

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {
  render() {
    return (

      <Router>
        <Switch>
          <Route exact path ="/" component={data}/>
        </Switch>
        <Switch>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
      </Switch>
      </Router>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBUAZsqi06d5kyxtUUglOElnxuYqvg-mRU'
})(MapContainer);
