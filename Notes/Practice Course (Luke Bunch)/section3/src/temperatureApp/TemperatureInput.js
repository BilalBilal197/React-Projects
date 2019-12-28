import React, {Component} from 'react';
import './temperatureInput.css'

class TemperatureInput extends Component{
  render(){
    const temperature = this.props.temperature;
    let style;
    let hotClass;
    if(temperature > 100){
      style = {
        color: "red",
        backgroundColor: "yellow",
        fontSize: 30,
      }
      hotClass = 'too-hot'
    }
    return (
      /* onChange={(this.props.handleChange(this.props.scale))} />  this will invoke the func, we wanna only send up the function without invoking it. so we use ananomous function below*/
      <div className="temp-input">
      <legend className={hotClass} >Enter temperature in {this.props.scale}:</legend>
        <input
          value={temperature}
          onChange={(e)=>{this.props.handleChange(e, this.props.scale)}} />
      </div>
    )
  }
}

export default TemperatureInput;