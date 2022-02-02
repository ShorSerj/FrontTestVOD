import React from 'react';
import './styles/reset.css'
import s from './App.module.scss'
import Banner from './components/Banner/Banner.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';


function App(prop) {
  return (
    <>
      {/* <Banner/> ./img/VanDamme.mp4*/}
      <iframe className={s.video} src="https://www.youtube.com/embed/M7FIvfx5J10?autoplay=1&mute=1" allow='autoplay' >
        <p>Твой браузер устарел для отображения элемента iframe</p>
      </iframe>
      <ContactForm />
    </>
  )
}

export default App

