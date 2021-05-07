import React, { useState } from "react";
import { fire } from "../base";

const db = fire.firestore();

export const NewAlbumForm = () => {
  const [albumName, setAlbumName] = useState("");

  const onAlbumNameChange = (e) => {
    setAlbumName(e.target.value);
  };

  const onAlbumCreate = () => {
    if (!albumName) {
      return;
    }
    db.collection("albums").doc(albumName).set({
      name: albumName,
    });
    setAlbumName("");
  };

  return (
    <>
      <button className="btn btn-danger" onClick={onAlbumCreate}>
        Crear Album
      </button>
      <input
        className="border border-secondary"
        value={albumName}
        onChange={onAlbumNameChange}
        type="text"
        placeholder="Escribe nombre...."
      />
    </>
  );
};
