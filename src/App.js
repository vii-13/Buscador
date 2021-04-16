import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

import {
  db,
  googleAuthProvider,
  firebase
} from './componentes/config/firebase';
import Button from './componentes/Button';


class App extends Component {
  
  state = {
    termino:'',
    imagenes: [],
    pagina: ''
  }
  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start')
  }
paginaAnterior = () => {
 //Leer el state de la pagina actual
 let pagina = this.state.pagina;
 // Resta uno a la pagina actual

 //Si la pagina es 1 ya no era asi atras :v
 if(pagina === 1) return null;
 pagina-- ;
 //Agregar el cambio al state
 this.setState({
   pagina
 }, () => {
  this.consultarApi();
  this.scroll();
});

 //console.log(pagina);

}
paginaSiguiente = () => {
 //Leer el state de la pagina actual
 let pagina = this.state.pagina;
 // Sumar uno a la pagina actual
 pagina++ ;
 //Agregar el cambio al state
 this.setState({
   pagina
 }, () => {
  this.consultarApi();
  this.scroll();
});
 //console.log(pagina);
}

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const URL = `https://pixabay.com/api/?key=21166249-df6dd5dc586305b77e6a6b598&q=${termino}&
    per_page=30&page=${pagina}`;

    fetch(URL)
    .then(respuesta => respuesta.json() )
    .then(resultado => this.setState({ imagenes : resultado.hits }) )
    }

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi();
    })
  }
  render(){
    return (
      <div className="container">
        <div className="jumbotron">
        <div>
          <br/>
          <p className="lead text-center fs-1 fw-bold">Buscador de Imagenes</p>
          <br/>
          <Buscador  
                  datosBusqueda={this.datosBusqueda}
          />
        </div>
        <div className="row content-center">
              <Resultado 
                 imagenes={this.state.imagenes}
                 paginaAnterior={this.paginaAnterior}
                 paginaSiguiente={this.paginaSiguiente}
                />
                <p className="text-center fw-bold">PARA VER RECOMENDACIONES HAS CLICK EN SIGUIENTE</p>
        </div>
        </div>
      </div>
    );
  }
  }

 
function app () {
  const signInWithGoogle = async () => {


    // Coloca el lenguaje de preferencia del dispositivo
    firebase.auth().useDeviceLanguage();
    
    // Inicio el procedo de login dentro de un try ... catch
    
    try {
    await firebase.auth().signInWithPopup(googleAuthProvider);
    
    } catch (e) {
    
    console.error(e.message);
    
    }
    return(
    <div>
      <Button onClick={signInWithGoogle} > Sing in with Google</Button>
    </div> 
    );
     
    }



}



export default App;
