import React, { Component } from 'react';
import Imagen from './Imagen'
import Paginacion from './Paginacion';

class Resultado extends Component {
    mostrarImagenes = () => {


        const imagenes = this.props.imagenes;

        if(imagenes.lenght === 0) return null;

        //console.log(imagenes);
        

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen => (
                        <Imagen
                        Key={Imagen.id}
                        imagen={imagen}

                        />

                    ) ) }

                </div>
                <Paginacion 
                      paginaAnterior={this.props.paginaAnterior}
                      paginaSiguiente={this.props.paginaSiguiente}
                />
            </React.Fragment>
        )

    }

    render() {
        return ( 
            <React.Fragment>
                {this.mostrarImagenes() }
            </React.Fragment>
           
        );
    }
}

export default Resultado;