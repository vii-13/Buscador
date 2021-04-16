import React, { Component } from 'react';

class Buscador extends Component{

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        // Tomamos el valor del input
        const termino = this.busquedaRef.current.value;

        // Lo enviamos al componente principal
        this.props.datosBusqueda(termino);

    }

    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="from-group col-md-8">
                        <input ref= {this.busquedaRef} type="text" className="form-control form-control-lg" 
                        placeholder="Busca tu imagen. Ejemplo: Luna" />
                    </div>

                    <div className="from-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" 
                        value="Buscar..." />
                    </div>
                </div>
            </form>
        );
    }
}



export default Buscador