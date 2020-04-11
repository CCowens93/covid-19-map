import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Data from './components/data.js'



class MapContainer extends Component {

  state = {
    covidInfoArray: []
  }

  addInfo = (covidInfo) => {
    this.setState(prevState => ({
      covidInfoArray:[...prevState.covidInfoArray, covidInfo]
    }))
  }
  render() {

    
    
    return (

      <Router>
      
        <Switch>
            <Data  covidInfoArray={this.state.covidInfoArray.data}/>
        </Switch>
       
      </Router>
    );
  }
}

export default MapContainer








// const mapStyles = {
//   width: '50%',
//   height: '50%'
// };

 /* <Switch>
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
         lat: 33.7490,
         lng: -84.3880
        }}
      />
      </Switch> */
// GoogleApiWrapper({
//   apiKey: 'AIzaSyBUAZsqi06d5kyxtUUglOElnxuYqvg-mRU'
// })(MapContainer);
