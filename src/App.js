import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import data from './components/covid-19-data'
import stats from './components/data'

// const mapStyles = {
//   width: '50%',
//   height: '50%'
// };

class MapContainer extends Component {
  render() {

    
    
    return (

      <Router>
        {/* <Switch>
          <Route exact path ="/" component={data}/>
        </Switch> */}
        <Switch>
          <Route path ="/" component={stats}/>
        </Switch>
        {/* <Switch>
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
         lat: 33.7490,
         lng: -84.3880
        }}
      />
      </Switch> */}
      </Router>
    );
  }
}

export default MapContainer


// GoogleApiWrapper({
//   apiKey: 'AIzaSyBUAZsqi06d5kyxtUUglOElnxuYqvg-mRU'
// })(MapContainer);
