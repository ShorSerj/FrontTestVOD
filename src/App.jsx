import React, {useState, useEffect, useRef} from 'react';
import YouTube from 'react-youtube';
import './styles/reset.css'
import s from './App.module.scss'
import Banner from './components/Banner/Banner.jsx';
import Slider from './components/Slider/Slider.jsx';
import Contact from './components/ContactForm/Contact.jsx';


function App(props) {
  const [visual, setVisual] = useState(false)
  const [page, setPage] = useState(0)
  const [video, setVideo] = useState(false)

  const opts = { 
    playerVars: {
      autoplay: 1,
      mute:1,
      cc_load_policy:1,
      modestbranding:1,
      controls:0,
      showinfo:0,
      start:0,
      end:60,
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => setVisual(true), 5000);
    return () => {
      clearTimeout(timer);
      setVisual(false)
    }
  }, [page, video]);

  const _onReady = (event)=> {
    setVideo(event.target)
  }

  const stopVideo = (event)=> {
    video.pauseVideo()
  }
  const playVideo = (event)=> {
    video.playVideo()
  }
  return (
    <main>
      <YouTube className={s.video} videoId="M7FIvfx5J10" opts={opts} onReady={_onReady} stopVideo={stopVideo}/>
      {page == 0 ? <Banner visual={visual} setPage={setPage} stopVideo={stopVideo} video={video}/> : null}
      {page == 1 ? <Contact visual={visual} setPage={setPage} playVideo={playVideo}/> : null} 
      {page == 2 ? <Slider setPage={setPage} playVideo={playVideo} />: null}
    </main>
  )
}

export default App

