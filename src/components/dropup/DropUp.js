import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import './DropUp.scss';

function DragAndCrop() {

  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/lambda-labs-property-manager/image/upload";
  const CLOUDINARY_UPLOAD_PRESET ="vlm9y5gn"; 
  
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
        console.log(respose);
    }).catch(function(error){
       console.log(error);
       
    });
    console.log(formData);
    console.log('acceptFiles', file);
    
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className='drop-zone' {...getRootProps()} >
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}


export default DragAndCrop