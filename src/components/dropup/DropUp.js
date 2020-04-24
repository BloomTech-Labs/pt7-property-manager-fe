import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Spinner from "./Spinner";
import pulse from "./upload-icon.svg"
import axios from 'axios';
import './DropUp.scss';

function DragAndCrop() {

  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/lambda-labs-property-manager/image/upload";
  const CLOUDINARY_UPLOAD_PRESET ="vlm9y5gn"; 
  // const [pictures, setPictures]=useState({})
  //   console.log("pictures", pictures)
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files "I alredy did something"
    let formData = new FormData();
    let file = acceptedFiles[0];
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET )
    
    axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }, 
      data:formData
      
    }).then(function (respose){

        console.log("response claudinary on DropZone",respose);
        sessionStorage.setItem('document', respose.data.url); 
    })
    .catch(function(error){
       console.log(error);
       
    });
    console.log(formData);
    console.log('acceptFiles', file);
    
  }, [])
  
  const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
 
  
  const files = acceptedFiles.map(file => (
    
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <button  style={{background:"none", border:"none", color:"red"}}>x</button>
      </li>
    ));
   
  return (
   <section>
    <div className='drop-zone' style={{cursor: 'pointer'}} {...getRootProps()} >
      <input {...getInputProps()} />
      {
        isDragActive ?
       <img src={pulse} className="pulse" alt="" />:
       <p style={{fontSize:"2.5rem"}}>Drag and drop your documents in here, or click to select files</p>
      }
       </div>
     <aside>
     <h4 style={{fontSize:"2.5rem"}}>Files</h4>
     <ul style={{fontSize:"2.5rem"}}>{files}</ul>
     </aside>
   </section>
    )
}


export default DragAndCrop