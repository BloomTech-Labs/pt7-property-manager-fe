import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import "./Spinner.scss";
// import { faCog } from '@fortawesome/free-solid-svg-icons'
export default () => 
  <div className=''>
{/* <FontAwesomeIcon icon={faCloudUploadAlt} size='5x' color='#28a745'  /> */}
<FontAwesomeIcon icon={faCloudUploadAlt} size='5x' color='#28a745' className = "pulse" cx = "50%" cy = "50%" r = "10px" />

{/* <FontAwesomeIcon icon={faCog} size='5x' color='#28a745' spin /> */}
  </div>