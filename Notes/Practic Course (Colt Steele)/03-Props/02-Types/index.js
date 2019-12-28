class App extends React.Component{
  render(){
    return(
      <div>

        <Hello 
        to="Ringo" 
        from="Paul" 
        num={3}
        data={[1,2,3,4,5]}
        isFunny //set to true automatically
        img="https://media.giphy.com/media/7kn27lnYSAE9O/giphy.gif"
        bangs="4"
        />

        {/* <Hello
          to="Britney"
          from="Adele"
          num={3}
          data={[1, 2, 3, 4, 5]}
          isFunny //set to true automatically
          bangs="10"
        /> */}
        
        
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))

