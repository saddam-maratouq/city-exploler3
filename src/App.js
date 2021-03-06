import React from "react";

import axios from "axios";

import Wheater from "./component/Wheater";

class App extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
     
      CityData: {},

      DiscovedCity: "",

      FindMap: "",

      show: false,

      WheatherData: [],
    };
  }
  //////////////////////////////////////////////////////////////

  getlocationCity = async (e) => {
    e.preventDefault();

    await this.setState({
     
      DiscovedCity: e.target.city.value,
    });
//////////////////////////////////////////////////////////////////////
    // console.log('aaaaaa',this.state.DiscovedCity);
    console.log("aaaaaa", this.state.FindMap);

    let locUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONANDMAPIQ_KEY}&q=${this.state.DiscovedCity}&format=json`;

    let result = await axios.get(locUrl);

    ////////////////////////////////////////////////////////////////////

    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONANDMAPIQ_KEY}&center=17.450419,78.381149&size=600x600&zoom=14&path=
  fillcolor:%2390EE90|weight:2|color:blue|17.452945,78.380055|17.452765,78.382026|17.452020,78.381375|17.452045,78.380846|17.452945,78.380055`;

    let mapResult = await axios.get(mapUrl);

    //////////////////////////////////////////////////////////////////

    //console.log('ssssss',mapResult);

    // console.log('sssssss',result);
    // console.log('sssssss',result.data);
    //console.log('sssssss',result.data[0]);
    //http://localhost:7000/wheather?cityName=

    let WheatherUrl = `${process.env.REACT_APP_SERVER_LINK}/wheather?cityName=${this.state.DiscovedCity}`;

    let WheatherResult = await axios.get(WheatherUrl);

    console.log("kkkk", WheatherResult.data);

    //////////////////////////////////////////////////////////////////

    this.setState({
      CityData: result.data[0],

      FindMap: mapResult.data,

      show: true,

      WheatherData: WheatherResult.data,
    });
  };
  ////////////////// when I type the city  this function fire //////// (getlocationCity) 

  render() {
    return (
      <div>
        <h2> City Discover </h2>
        <form onSubmit={this.getlocationCity}>
          <input type="text" placeholder="Enter City" name="city" />
          <button> type the city </button>
        </form>
        <p>
          {" "}
          {this.state.DiscovedCity} {this.state.CityData.lat} /{" "}
          {this.state.CityData.lon}{" "}
        </p>

        {this.state.show && (
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONANDMAPIQ_KEY}&&center= 
    ${this.state.CityData.lat},${this.state.CityData.lon} &size=300x300&zoom=14`}
               alt='image map' />
         )
        }

        <Wheater
          show={this.state.show}
          Wheatherinfo={this.state.WheatherData}
        />
      </div>
    );
  }
}

export default App;

