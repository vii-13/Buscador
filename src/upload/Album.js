import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { NewPhoto } from "./NewPhoto";
import { fire } from "../base";

const db = fire.firestore();

export const Album = () => {
  const [images, setImages] = useState([]);
  const [albumName, setAlbumName] = useState("");

  const match = useRouteMatch("/:album");
  const { album } = match.params;

  useEffect(() => {
    const unmount = db
      .collection("albums")
      .doc(album)
      .onSnapshot((doc) => {
        setImages(doc.data().images || []);
        setAlbumName(doc.data().name);
      });
    return unmount;
  }, []);

  return (
    <>
      <section>
        <header>
          <p>
            <Link className="salir" to="/subir">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="red"
                class="bi bi-x-octagon-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
              </svg>
            </Link>
          </p>
          <div className="formSubir">
            <NewPhoto currentAlbum={album} />
          </div>

          <h1 className="border albumName">{albumName}</h1>
        </header>
        {images.map((image, ind) => (
          <aside key={image.name + ind}>
            <a href={image.url} target="blank">
              <img src={image.url} alt="album" />
            </a>
          </aside>
        ))}
      </section>
    </>
  );
};
