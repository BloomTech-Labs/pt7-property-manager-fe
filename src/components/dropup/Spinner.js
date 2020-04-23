import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

export default () => 
  <div className='spinner fadein'>

    <FontAwesomeIcon icon={faCloudUploadAlt} size='5x' color='#28a745'  />
  </div>