import React from 'react'
import {faBackward,faPause,faForward, faPlay} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 

function Control(props) {



  return (
    <div className='control'>

      <button className="control_skipbtn" onClick={()=>props.skipSong(false)}>
          <FontAwesomeIcon icon ={faBackward}/>
      </button>

      <button className='control_playbutton' onClick={()=>props.setIsPlaying(!props.isPlaying)}>
        <FontAwesomeIcon icon ={props.isPlaying ? faPause : faPlay}/>
      </button>

      <button className='control_skipbtn' onClick={()=>props.skipSong(true)}>
        <FontAwesomeIcon icon ={faForward}/>
      </button>

    </div>
  )
}

export default Control;