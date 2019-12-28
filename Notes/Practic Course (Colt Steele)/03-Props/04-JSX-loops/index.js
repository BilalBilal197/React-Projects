class App extends React.Component{
  render(){
    return(
      <div>
        <Friend 
        name = "Elton"
        hobbies = {['piano', 'singing', 'dancing']}
        />
        <Friend 
        name = "Frida"
        hobbies = {['drawing', 'painting']}
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))