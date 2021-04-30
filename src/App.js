import React, { Component } from "react";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";
import BotonSubir from "./componentes/BotonSubir";

class App extends Component {
  state = {
    termino: "",
    imagenes: [],
    pagina: "",
  };

  scroll = () => {
    const elemento = document.querySelector(".container");
    elemento.scrollIntoView("smooth", "start");
  };

  paginaAnterior = () => {
    //Leer el state de la pagina actual
    let pagina = this.state.pagina;
    // Resta uno a la pagina actual

    //Si la pagina es 1 ya no era asi atras :v
    if (pagina === 1) return null;
    pagina--;
    //Agregar el cambio al state
    this.setState(
      {
        pagina,
      },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );
  };

  paginaSiguiente = () => {
    //Leer el state de la pagina actual
    let pagina = this.state.pagina;
    // Sumar uno a la pagina actual
    pagina++;
    //Agregar el cambio al state
    this.setState(
      {
        pagina,
      },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );
  };

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const URL = `https://pixabay.com/api/?key=21166249-df6dd5dc586305b77e6a6b598&q=${termino}&
    per_page=30&page=${pagina}`;
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino: termino,
        pagina: 1,
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div className="menu">
          <BotonSubir />
          <p className="lead text-center fs-1 fw-bold">Buscador de Imagenes</p>

          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>

        <br />

        <div className="jumbotron">
          <div className="row content-center">
            <Resultado
              imagenes={this.state.imagenes}
              paginaAnterior={this.paginaAnterior}
              paginaSiguiente={this.paginaSiguiente}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
