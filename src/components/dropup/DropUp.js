import React, { useCallback, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import pulse from "./upload-icon.svg";
import "./DropUp.scss";

function DragAndCrop() {
  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/lambda-labs-property-manager/image/upload";
  const CLOUDINARY_UPLOAD_PRESET = "vlm9y5gn";

  const [myFiles, setMyFiles] = useState([]); // added Hook

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files "I alredy did something"
    setMyFiles([...myFiles, ...acceptedFiles]); ///Set the state
    let formData = new FormData();
    let file = acceptedFiles[0];
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    axios({
      url: CLOUDINARY_URL,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: formData,
    })
      .then(function (respose) {
        console.log("response claudinary on DropZone", respose);
        sessionStorage.setItem("document", respose.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });
  },[myFiles]);
  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop,
  });
  //*********HANDLE REMOVE FILE *************** */
  const handleRemoveFile = useCallback(
    (fileName) => {
      const dt = new DataTransfer();
      const files = Array.from(inputRef.current.files);

      // Add selected fiels to DataTransfer object
      sessionStorage.setItem("document", "");
      for (let file of files) {
        file.name !== fileName && dt.items.add(file); // Add only file name not matched files
      }

      inputRef.current.files = dt.files; // Overwrite files
      setMyFiles(Array.from(dt.files)); // Set states to render file list to manage deletion
    },[inputRef]);
  //***************USEMEMO HOOK************************* */
  const files = useMemo(
    () =>
      myFiles.map((file) => (
        <li key={file.name}>
          {file.name} ({file.size} bytes)
          <button
            style={{ background: "none", border: "none", color: "red" }}
            onClick={() => handleRemoveFile(file.name)}
          >
            <FontAwesomeIcon icon={faTrashAlt} size="xs" />
          </button>
        </li>
      )),
    [handleRemoveFile, myFiles]
  );
  /***************************END************************/

  return (
    <section>
      <div
        className="drop-zone"
        style={{ cursor: "pointer" }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <img src={pulse} className="pulse, size" alt="" />
        ) : (
          <p style={{ fontSize: "2.5rem" }}>
            Drag and drop your documents in here, or click to select files
          </p>
        )}
      </div>
      <aside>
        <h4 style={{ fontSize: "2.5rem" }}>Files</h4>
        <ul style={{ fontSize: "2.5rem" }}>{files}</ul>
      </aside>
    </section>
  );
}

export default DragAndCrop;