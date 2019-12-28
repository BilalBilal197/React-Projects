import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Headers from "./Header";
import Modal from "./Modal";


class App extends Component {
  constructor(){
    console.log("constructor running ...")
    super();
    this.state = {
      temp: "",
      cityName: "",
      weather:"",
      high: "",
      low: "",
      icon: "",
      isRaining: "",
      showModal: true,
    }
    //use the below two vars inside componentDidMount() method so that its executed on 2nd render with async code
    // const elems = document.querySelectorAll('.modal');
    // const instances = window.M.Modal.init(elems);
    
  }
  // componentDidMount comes with using super class Component which gives us default methods. React will automatically look for ComponentDidMount after the first render
// steps in running a react app
// 1 - class constructor
// 2 - super
// 3 - this.state is setup
// 4 - Render method
// 5 - ComponentDidMount()
// 6 - re-render
// 7 - ComponentDidUpdate()
// 8 - ComponentWillUnmount() ----- at the very end when component is removed from the DOM

// notes: Update state always causes a re-render - 
// notes: re-render occurs by new props, new state
  componentDidMount(){
    console.log("componentDidMountrunning ...")

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d'
    this.getCityWeather('London');
    var elems = document.querySelectorAll('.modal');
    var instances = window.M.Modal.init(elems);
    
  }

  componentDidUpdate(prevProps, prevState){
    //ComponentDidUpdate triggers after each rendering
    if(this.state.weather !== prevState.weather){ // to avoid looping due to rendering use this conditional

      const isRaining = this.state.weather.includes("rain");
      console.log(isRaining);
      if(isRaining){
        this.setState({
          isRaining: "Rain Rain go away!!"
        })
      }
    }
    // console.log("Component has updated");
    // console.log(prevProps);
    // console.log(prevState);
    
  }

  searchCity=(e)=> {
    e.preventDefault();
    const city = document.getElementById("city").value;
    this.getCityWeather(city);
    
  }

  getCityWeather = (city)=> {
    
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`
    axios.get(url).then((resp) => {
      this.setState({
        temp: resp.data.main.temp,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        weather: resp.data.weather[0].description,
        icon: resp.data.weather[0].icon,
        cityName: resp.data.name
      })
    })
  }


removeModal=()=>{
  this.setState({
    showModal: false
  })
}



  render(){
    console.log("render running ...")
    const iconUrl = `http://openweathermap.org/img/wn/${this.state.icon}.png`
    //instead of putting the async part below which will cause an infinite loop as setState will trigger render which will trigger setState etc, we should use a seperate method outside render called componentDidmout
    // const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d'
    // axios.get(url).then((resp)=>{
    //   this.setState({
    //     temp: resp.data.main.temp
    //   })
    // })

        
      
    return (
        <div className="App">
          <div className="row">
            <div className="col s6 offset-f3">
              <button onClick={this.removeModal} className="btn"> Remove from DOM</button>
                <Headers temp={this.state.temp} isRaining={this.state.isRaining}/>
                {/* <!-- Modal Trigger --> */}
                <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Details</a>
                
                <form onSubmit={this.searchCity}>

                  <input type="text" id="city" placeholder="Enter a city name"/>
                </form>

            </div>

            
          </div>
            
            
            {this.state.showModal ? <Modal iconUrl={iconUrl} weather={this.state.weather} cityName={this.state.cityName} low={this.state.low} high={this.state.high}/> : "" }
            
          </div>
      )
    }
  
}

export default App;
