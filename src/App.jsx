import React, {useState, useEffect, useRef} from 'react';
import YouTube from 'react-youtube';
import './styles/reset.css'
import s from './App.module.scss'
import Banner from './components/Banner/Banner.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';


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
      // rel:0,
      // ecver:2,
      // modestbranding:1,
      // iv_load_policy:3,
      // ytp_pause_overlay:0
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => setVisual(true), 1000);
    return () => {
      clearTimeout(timer);
      setVisual(false)
    }
  }, [page]);

  const _onReady = (event)=> {
    setVideo(event.target)
    // console.log(event.target)
    // video.setShuffle(false)
  }

  const stopVideo = (event)=> {
    // video.setShuffle(true)
    video.pauseVideo()
  }
  const playVideo = (event)=> {
    video.playVideo()
  }
  return (
    <>
      <YouTube className={s.video} videoId="M7FIvfx5J10" opts={opts} onReady={_onReady} stopVideo={stopVideo}/>
      {page == 0 ? <Banner visual={visual} setPage={setPage} stopVideo={stopVideo}/> : null}
      {page == 1 ? <ContactForm visual={visual} setPage={setPage} /> : null}

      {/* <ContactForm /> */}
    </>
  )
}

export default App

