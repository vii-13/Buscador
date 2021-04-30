import React, { Component } from "react";
import BotonHome from "./BotonHome";

class Subir extends Component {
  render() {
    return (
      <div className="container">
        <div className="menu2">
          <BotonHome />
          <p className="lead text-center fs-1 fw-bold">Sube tus Imagenes</p>
        </div>
      </div>
    );
  }
}

export default Subir;
