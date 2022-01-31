import React, {useState, useEffect} from 'react';
import { reduxForm } from 'redux-form';
import s from './ContactForm.module.scss'
import Keyboard from './Keybard/Keyboard.jsx'

function ContactForm({handleSubmit, error}) {
  const [number, setNumber] = useState('+7(___)___-__-__')

  useEffect(() => {
    window.addEventListener('keydown', addNumber);

    return () => {
      window.removeEventListener('keydown', addNumber);
    };
  }, []);

  const addNumber = (e) => {
    console.log('click', e)
    let arr = number.split('')
    if(e.nativeEvent?.inputType === "deleteContentBackward" || e == "Стереть"){
      if(arr.indexOf('_')> 0 && arr.indexOf('_') > 3){
        if(Number.isInteger(+arr[arr.indexOf('_') - 1])){
          arr[arr.indexOf('_') - 1] = '_'
        }else {
          arr[arr.indexOf('_') - 2] = '_'
        }
      }else {
        arr[arr.length-1] = '_'
      }
    }else {
      let key = e.nativeEvent?.data || e?.key || e
      Number.isInteger(+key) ? arr[arr.indexOf('_') > 0 ? arr[arr.indexOf('_')] = key : null] : null
    }
    setNumber(arr.join(''))
  }
  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      <h3 className={s.title}>Введите ваш номер мобильного телефона</h3>
      <div className={s.input__wrapper}>
        <input type="tel" name="phoneNumber" id="phoneNumber" value={number} onChange={addNumber} autoFocus={true} autoComplete="off" tabIndex="0"/>
      </div>
      <p className={s.text}>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
      <Keyboard addNumber={addNumber} />
    </form>
  )
}

export default ContactForm

