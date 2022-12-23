import React, { useRef, useEffect,useState} from 'react'
import Details from './Details'
import Control from './Control'

export default function Player(props) {
  
    const audioElement = useRef(null);
    const [isPlaying,setIsPlaying] = useState(false);
   
    const skipSong = (forwards)=>{

        if(forwards)
        {
            props.setCurSongIndex(()=>{
                let temp = props.curSongIndex;
                temp++;

                if(temp>props.songs.length-1)
                {
                    temp=0;
                }

                return temp;
            });
        }
        else
        {
            props.setCurSongIndex(()=>{
                let temp = props.curSongIndex;
                temp--;

                if(temp<0)
                {
                    temp=props.songs.length-1;
                }
                return temp;
            })
        }


    };
    useEffect(()=>{

        if(isPlaying)
            audioElement.current.play()
        else
            audioElement.current.pause()
    });



    return (
    <div className='player' >
      
      {
          isPlaying?
          <h4>
                Playing now...
          </h4>
          :
          <h4></h4>

      }
    

    <Details song = {props.songs[props.curSongIndex]}></Details>

    <Control 
    
    isPlaying={isPlaying}
    setIsPlaying={setIsPlaying}
    skipSong={skipSong}

    ></Control>
    
    <audio className='player_audio'
    src={props.songs[props.curSongIndex].src}
    ref = {audioElement} 
    controls
    ></audio>
    <p>
        Next Up:
        <span>
            {props.songs[props.nextSongIndex].title}
            <br/>
            by: {props.songs[props.nextSongIndex].artist}
        </span>
    </p>
    </div>
  )
}
 