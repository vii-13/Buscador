import React, { useState } from "react";
import firebase from "firebase";
import { fire } from "../base";

const db = fire.firestore();
const storage = fire.storage();

export const NewPhoto = ({ currentAlbum }) => {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = async () => {
    if (file != null) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      db.collection("albums")
        .doc(currentAlbum)
        .update({
          images: firebase.firestore.FieldValue.arrayUnion({
            name: file.name,
            url: await fileRef.getDownloadURL(),
          }),
        });
    }
  };

  return (
    <>
      <input type="file" onChange={onFileChange} />
      <button className="btn btn-danger" onClick={onUpload}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-upload"
          viewBox="0 0 16 16"
        >
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
          <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
        </svg>
      </button>
    </>
  );
};
