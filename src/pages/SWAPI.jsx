import React from  'react'
import Logo from './img/one.jpg'
const srcAPI  = "https://swapi.co/api/people/"


export default class extends React.Component {
  state ={ number: "" , show: false, data: "" }

  exe1 = (eve) => {
    eve.preventDefault()
    let userNum = parseInt(this.state.number, 10)
    userNum = (userNum > 87 || userNum < 1 ) ? 1 : userNum

    fetch( srcAPI + userNum , {method: "GET"} )
      .then((resp) => { return resp.json() })
      .then((resp) => { this.setState({ data: resp }) })
      .then(()=> {console.log(this.state.data)})
      .then(()=>{ this.setState({ show: true }) })

      setTimeout(()=>{this.setState({ show: false })}, 5000)
  }

  exe2 = ()=>{
    const info = this.state.data
    const CharCon = { border: "2px solid white", backgroundColor: "rgb(78, 246, 226)", color: "black", height: "100px", width:"50%", margin: "0px auto", display: "block", paddingTop: "15px" }
    return (
        <div style={CharCon}>
          <div>Name: {info.name}</div>
          <div>Gender: {info.gender}</div>
          <div>Height: {info.height}</div>
          <div>Mass: {info.mass}</div>
        </div>
    )
  }


  render() {
    const MainSty = { backgroundColor: "black", textAlign: "center", color: "white", height: "100vh" }
    const PicSty ={ paddingTop: "25px" }
    return (
      <div style={MainSty} >
        <img style={PicSty} src={Logo} alt="Missing Pic"/>
        <h2>Star-Wars</h2>
        <p>Input a number between 1 and 87 to get one Star Wars Character.</p>
        <form onSubmit={this.exe1}>
          <input type="text" value={this.state.number} onChange={(eve)=>{this.setState( {number: eve.target.value })}} />
          <input type="submit" value="Find Character"/>
        </form>
        <br/>

        { this.state.show ? React.createElement(this.exe2) : <div>No data yet...</div> }

      </div>
    )
  }
}
