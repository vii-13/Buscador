import React, { Component } from 'react';
import Buscador from './componentes/Buscador';

class App extends Component {
  
  state = {
    termino:'',
    imagenes: []
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const URL = `https://pixabay.com/api/?key=21166249-df6dd5dc586305b77e6a6b598&q=${termino}&per_page=30`;
    // console.log(URL)

    fetch(URL)
      .then (respuesta => respuesta.json() )
      .then (resultado => this.setState({imagenes : resultado.hits}) )
    }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }
  render(){
    return (
      <div className="container">
        <div className="jumbotron">
          <br/>
          <p className="lead text-center">Buscador de Imagenes</p>
          <br/>
          <Buscador  datosBusqueda={this.datosBusqueda}/>
        </div>
      </div>
    );
  }
  }

export default App;
