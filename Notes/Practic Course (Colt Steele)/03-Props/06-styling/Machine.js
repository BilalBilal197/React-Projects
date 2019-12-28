class Machine extends React.Component{
  render(){
    const { s1, s2, s3 } = this.props;
    let result = (s1 === s2) && (s2 === s3)
    console.log(s1, s2, s3)
    return(
      <div>
        <h3>{s1} {s2} {s3}</h3>
        <h3>{ result ? "You Win" : "you lose"}</h3>
      </div>
    )
  }
}