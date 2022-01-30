import React from 'react';
import './styles/reset.css'
import Banner from './components/Banner/Banner.jsx';
import ContactReduxForm from './components/ContactForm/ContactForm.jsx';


function App(prop) {
  return (
    <>
      <Banner/>
      <ContactReduxForm/>
    </>
  )
}

export default App

