import React from "react";
import { Link } from "react-router-dom";
import { NewAlbumForm } from "./NewAlbumForm";

export const HomeSubir = ({ albums }) => {
  return (
    <>
      <div className="btnC">
        <NewAlbumForm />
      </div>
      <section>
        {albums.map((album) => (
          <Link to={`/${album.id}`}>
            <aside
              className="shadow-lg p-3 mb-5 bg-body rounded album"
              key={album.name}
            >
              <img src={album.images ? album.images[0].url : ""} alt="album" />
              <h3>{album.name}</h3>
            </aside>
          </Link>
        ))}
      </section>
    </>
  );
};
