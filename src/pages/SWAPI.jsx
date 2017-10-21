import React from  'react'
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
    return (
        <div>
          <div>Name: {info.name}</div>
          <div>Gender: {info.gender}</div>
          <div>Height: {info.height}</div>
          <div>Mass: {info.mass}</div>
        </div>
    )
  }


  render() {
    return (
      <div>
        <p>Hello</p>
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
