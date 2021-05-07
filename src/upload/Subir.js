import React, { useEffect, useState } from "react";
import BotonHome from "../componentes/BotonHome";
import { fire } from "../base";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Album } from "./Album";
import { HomeSubir } from "./HomeSubir";

const db = fire.firestore();

function Subir() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const unmount = db.collection("albums").onSnapshot((snapshot) => {
      const tempAlbums = [];
      snapshot.forEach((doc) => {
        tempAlbums.push({ ...doc.data(), id: doc.id });
      });
      setAlbums(tempAlbums);
    });
    return unmount;
  }, []);

  return (
    <>
      <div className="container">
        <div className="menu2">
          <BotonHome />
          <p className="lead text-center fs-1 fw-bold">Sube tus Imagenes</p>
        </div>
        <br />
        <div className="jumbotron">
          <Router>
            <Switch>
              <Route
                exact
                path="/subir"
                render={() => <HomeSubir albums={albums} />}
              />
              <Route path="/:album" component={Album} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default Subir;
