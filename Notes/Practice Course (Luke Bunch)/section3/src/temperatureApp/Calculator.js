import React, {Component} from 'react';
import BoilingVerdict from './BoilingVerdict';
import Temperatureinput from './TemperatureInput';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { 
      temperature: 20,
      scale: "C", 
    };
  }

  handleChange(e, scale) {
    this.setState({ temperature: e.target.value,
    scale: scale
    });
  }

  render() {
      const temperature = this.state.temperature;
      const scale = this.state.scale;
      let fTemp;
      let cTemp;
      if(scale==='C'){
        fTemp= Math.round((temperature * 9 / 5) + 32);
        cTemp = temperature;
      }else if(scale === 'F'){
        cTemp = Math.round((temperature - 32) * 5 / 9);
        fTemp = temperature;
      }


    return (
      <fieldset>
        <Temperatureinput temperature={fTemp} scale="F" handleChange={this.handleChange}/>
        <Temperatureinput temperature={cTemp} scale="C" handleChange={this.handleChange}/>
       

        <BoilingVerdict
          celsius={parseFloat(cTemp)} />

      </fieldset>
    );
  }
}

export default Calculator;