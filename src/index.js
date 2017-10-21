import React from 'react'
import ReactDOM from 'react-dom'
// import Api from './pages/Api.jsx'
import SWAPI from './pages/SWAPI.jsx'

class GralComp extends React.Component {
  render() {
    return(
      <div>
        <SWAPI/>
      </div>
    )
  }
}

ReactDOM.render( <GralComp/>, document.getElementById("root") );
