import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import s from './ContactForm.module.scss'
import Keyboard from './Keybard/Keyboard.jsx'

function ContactForm({handleSubmit, error}) {

  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      <h3 className={s.title}>Введите ваш номер мобильного телефона</h3>
      <div className={s.input__wrapper}>
        <label htmlFor="phoneNumber">{'number'}</label>
        <Field component={'input'} name={'phoneNumber'} 
          id={'phoneNumber'}
          placeholder={"Your phone number"}
        />
      </div>
      <p className={s.text}>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
      <Keyboard />
    </form>
  )
}
const ContactReduxForm = reduxForm({form:'contact'})(ContactForm)

export default ContactReduxForm

