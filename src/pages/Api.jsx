import React from 'react'
const srcAPI  = "https://swapi.co/api/people/1"
import Logo from './img/one.jpg'

export default class extends React.Component {
  state = { data: "", search: "", show: false }

    infoGET = (eve) => {
      eve.preventDefault()
      console.log(this.state.search)

      fetch( srcAPI, { method: "GET" } )
        .then((resp) => { return resp.json() } )
        .then((resp) => { this.setState({ data: resp }) });



      this.setState({ show: true })
      setTimeout( () => { this.setState({ show: false }) } , 2500)
    }

    infoUPDATE = (eve) => {

    }

    infoREND = () => {
      console.log(this.state.data)
      return(
        <div>{this.state.data.name}</div>
      )
    }

  render() {
    return(
      <div>
        <div>
          <img src={Logo} alt="Missing pic"/>
        </div>
        <p>Stars Wars API.</p>
        <form onSubmit={this.infoGET}>
          <p>Maraconda</p>
          <input type="text" value={this.state.search} onChange={ (eve) => { this.setState({ search: eve.target.value }) } }/>
          <input type="submit" value="Searc Character"/>
        </form>

        <h4>Data from API:</h4>
        { this.state.show ? React.createElement(this.infoREND) : <div>No Data yet...</div> }

      </div>
    )
  }
}


// Axios.get("https://swapi.co/api/")
//   .then((resp) => { console.log(resp.data) } )


// {this.state.data.films}
