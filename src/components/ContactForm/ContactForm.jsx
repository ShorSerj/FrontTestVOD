import React, { useState, useEffect } from 'react';
import s from './ContactForm.module.scss'
import Keyboard from './Keybard/Keyboard.jsx'

function ContactForm(props) {
  const [number, setNumber] = useState('')

  const onNumberChange = (e) => {

  }
  return (
    <form className={s.contactForm}>
      <h3 className={s.title}>Введите ваш номер мобильного телефона</h3>
      <div className={s.input__wrapper}>
        <label htmlFor="phoneNumber">{number}</label>
        <input autoFocus={true}
          type="tel"
          id='phoneNumber'
          placeholder="Your phone number"
        />
      </div>
      <p className={s.text}>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
      <Keyboard onNumberChange={onNumberChange}/>
    </form>
  )
}

export default ContactForm

