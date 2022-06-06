import React, { Component } from 'react'
import Cabecalho from './cabecalho'
import Artigo from './artigo'
import Footer from './footer'
import './App.css'

class App extends Component {

  render() {
    return (
      <div>
        <Cabecalho />
        <Artigo />
        <Footer />
      </div>
    )
  }

}

export default App;
