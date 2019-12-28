import React, { Component } from 'react';

// we want this component to know about redux, for which we need some help or glue, the glue is react-redux! We need the connect function to use react-redux at the component level beacuse at FrozenDept, there is 100% react and 0% redux while at rootReducer there is 100%redux 0% react. So to make them work together, have to connect them using the connect func. 
import { connect } from 'react-redux';
import updateFrozen from '../actions/frozenInvUpdate';
import { bindActionCreators } from 'redux';


class FrozenDept extends Component{

  increment=(operation, index)=>{
    // console.log(operation, index)
    this.props.updateFrozen(operation, index);
  }

  render(){
    // console.log(this.props.meatData)
    // console.log(this.props.frozenData) -- getting data from the rootReducer instead of props passed by parent element
    const frozenInventory = this.props.frozenData.map((item, i)=>{
      return (
        <div key={i}>

          <li >{item.food}: {item.quantity}</li>
          <input type="button" onClick={() => { this.increment('+', i) }} value="+" />
          <input type="button" onClick={() => { this.increment('-', i) }} value="-" />
        </div>
      )
    })
    return(
      <div>
        <h1>The frozen food department!</h1>
        <ul>
          {frozenInventory}
        </ul>

      </div>
    )
  }
}

// export default FrozenDept; -- as we use connect, have to export the component differently as shown below

// console.log(connect) 
// mapStateToProps takes 1 argumentPlaceholder, 'state', and that is the rootreducer or can be think of as store
function mapStateToProps(state){
  // mapStateToProps returns object with:
  // 1. property is the local prop name to this component
  // 2. value will be the property in the root reducer... ie. a piece of the store.
  return {
    frozenData: state.frozen,
    meatData: state.meat,
    produceData: state.produce,


  }
}
// mapDispatchToProp is how we tie our component to dispatch
// it takes 1 arg which is dispatch

function mapDispatchToProps(dispatch){
  // this function returns bindActionCreator and we hand bindActionCreators an object where:
  //1. each key will be a local prop 
  //2. each value is a function that is dispatch when run
  //3. second arg is the dispatch
  return bindActionCreators({
    updateFrozen: updateFrozen
  }, dispatch)
}

// connect takes 2 args, the first one is a function that is going to map a piece of redux state to this components props. 
// second arg to connect is mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept); //connect is function invoke which Frozen Dept is the params