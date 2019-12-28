
function getNum() {
  return Math.floor(Math.random() * 10) + 1
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7) {
      msg = <div>
        <h1>Congrats You Win</h1>
        <img src="https://media.giphy.com/media/7kn27lnYSAE9O/giphy.gif"></img>
      </div>
    }
    else {
      msg = 'Unlucky'
    }
    return (
      <div>
        <h1>Your number is: {num}</h1>
        {/* <p>{num === 7 ? <img src="https://media.giphy.com/media/7kn27lnYSAE9O/giphy.gif"></img>:'Unlucky'}</p> */}
        {msg}
      </div>
    )
  }
}

