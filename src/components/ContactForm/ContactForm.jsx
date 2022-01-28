import React from 'react';
import s from './ContactForm.module.scss'
import Keyboard from './Keybard/Keyboard.jsx'

function ContactForm(prop) {
  return (
    <div className={s.contactForm}>
      <h3 className={s.title}>Введите ваш номер мобильного телефона</h3>
      <div className={s.input__wrapper}>
        <label htmlFor="">+7(___)___-__-__</label>
        <input
          className={s.input__login} 
          type="tel"
          placeholder=""
        />
      </div>
      <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
      <Keyboard/>
    </div>
  )
}

export default ContactForm
