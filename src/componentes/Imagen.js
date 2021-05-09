import React from "react";

const Imagen = (props) => {
  const { largeImageURL, previewURL, tags } = props.imagen;

  return (
    <div className="col-12 col-sm-6 col-md-4  col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="ver">
          <a
            href={largeImageURL}
            target="_blank"
            className="btn btn-danger
                    btn-block rounded-pill"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Imagen;
