import logo from './logo.svg';
import './App.css';
import Player from './Component/Player';
import { useState, useEffect } from 'react';


function App() {

  const [songs] =useState([
    { title:"kesariya",
      artist:"Hardy Sandhu",
      img_src:"./Images/kesariyajpg.jpg",
      src:"./Songs/Kesariyaa.mp3"
    },
    { title:"Baarish",
      artist:"Honey Singh",
      img_src:"./Images/Baarish.jpg",
      src:"./Songs/Baarishh.mp3"
    },
    { title:"Vijeta",
      artist:"arjit Singh",
      img_src:"./Images/vijeta.jpg",
      src:"./Songs/vijeta.mp3"
    },
    { title:"tum Hi Ho",
      artist:"arjit Singh",
      img_src:"./Images/tumhiho.webp",
      src:"./Songs/tumhiho.mp3"
    }

  ]);

  const [curSongIndex,setCurSongIndex] = useState(0);
  const [nextSongIndex,setNextSongIndex] = useState(0);

  useEffect(()=>{
    setNextSongIndex(()=>{
      if(curSongIndex+1 < songs.length-1)
      {
        return curSongIndex+1;
      }
      else
      {
        return 0;
      }

    })

  },[curSongIndex,songs.length]);

  return (
    <div className="App">
      <Player
      curSongIndex = {curSongIndex}
      setCurSongIndex={setCurSongIndex}
      nextSongIndex={nextSongIndex}
      songs = {songs}
      ></Player>
    </div>
  );
}

export default App;
