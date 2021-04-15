import React, { Component } from 'react';
import Buscador from './componentes/Buscador';

import {
  db,
  googleAuthProvider,
  firebase
} from './componentes/config/firebase';
import Button from './componentes/Button';


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
