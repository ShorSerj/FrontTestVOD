import React, {useState, useEffect} from 'react';
import { validNumber } from '../common/validation/validation.js'
import Keyboard from './Keyboard/Keyboard.jsx'
import s from './Contact.module.scss'

function Contact({setPage, playVideo, numberIsValid, messageError}) {
  const imageRefs = []
  const [number, setNumber] = useState('+7(___)___-__-__')
  const [focus, setFocus] = useState(null)
  const [check, setCheck] = useState(false);
  const [validation, setValidation] = useState(false);
  const [valid, setValid] = useState('');
  const [fullNumber, setFullNumber] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', addNumber);
    window.addEventListener('keydown', navigationWithArrow);
    return () => {
      window.removeEventListener('keydown', addNumber);
      window.removeEventListener('keydown', navigationWithArrow);
    };
  }, [number, focus, check]);

  useEffect(() => {
    validTest()
  }, [number]);
  useEffect(() => {
    console.log(valid)
  }, [valid]);

  useEffect(() => {
    if (fullNumber){
      setValidation(true)
      numberIsValid ? setValidation(true) : setValidation(false)
    }
  }, [check, numberIsValid, fullNumber]);

  const addNumber = (e) => {
    let arr = number.split('')
    if(e.code === "Backspace" || e == "Стереть"){
      if(arr.indexOf('_')> 0 && arr.indexOf('_') > 3){
        if(Number.isInteger(+arr[arr.indexOf('_') - 1])){
          arr[arr.indexOf('_') - 1] = '_'
        }else {
          arr[arr.indexOf('_') - 2] = '_'
        }
      }else {
        arr[arr.length-1] = '_'
      }
      
    }else if(e.code !== 'Space'){
      let key = e?.key || e
       if(Number.isInteger(+key)){
         if(arr.indexOf('_') > 0){
          arr[arr.indexOf('_')] = key 
         }
       }
    }
    setNumber(arr.join(''))
  }

  const navigationWithArrow = (e) => {
    if(e.code === "ArrowUp"){
      if(focus == null) {
        setFocus(0)
      }else if((focus == 0 & imageRefs.length <= 12) || (focus == 1 & imageRefs.length <= 12) || (focus == 2 & imageRefs.length <= 12)){
        setFocus(11)
      }else if((focus == 0 & imageRefs.length == 13) || (focus == 1 & imageRefs.length == 13) || (focus == 2 & imageRefs.length == 13)){
        setFocus(12)
      }else if((focus == 0 & imageRefs.length > 13) || (focus == 1 & imageRefs.length > 13) || (focus == 2 & imageRefs.length > 13)){
        setFocus(13)
      }else if(focus > 0 & focus < 10){
        setFocus(focus - 3)
      }else if(focus == 10){
        setFocus(focus - 2)
      }else{
        setFocus(focus - 1)
      }
    }

    if(e.code === "ArrowDown") {
      if(focus == null) {
        setFocus(0)
      }else if(focus < 7 || (focus== 9 & imageRefs.length > 12)){
        setFocus(focus + 3)
      }else if(focus == 7 || focus == 8 || (focus== 9 & imageRefs.length > 12) || (focus == 10 & imageRefs.length > 12)){
        setFocus(focus + 2)
      }else if((focus == 9 & imageRefs.length <= 12) || (focus == 10 & imageRefs.length <= 12)){
        setFocus(11)
      }else if(focus == 12 & imageRefs.length == 13){
        setFocus(11)
      }else if(focus == 12 & imageRefs.length > 13){
        setFocus(focus + 1)
      }else if(focus == 13){
        setFocus(11)
      }else{
        setFocus(0)
      }
    }
    if(e.code === "ArrowLeft") {
      if((focus == 0 & imageRefs.length > 13) || focus === null) {
        setFocus(13)
      }else if(focus == 0 & imageRefs.length > 12){
        setFocus(12)
      }else if(focus == 0 & imageRefs.length <= 12){
        setFocus(11)
      }else {
        setFocus(focus - 1)
      }
    }
    if(e.code === "ArrowRight") {
      if((focus == 11 & imageRefs.length <= 12) || focus === null){
        setFocus(0)
      }else if(focus == 12 & imageRefs.length == 13){
        setFocus(0)
      }else if(focus == 13 & imageRefs.length > 13){
        setFocus(0)
      }else{
        setFocus(focus + 1)
      }
    }
    if(e.code === "Enter") {
      if(focus < 10) {
        focus != 9 ? addNumber(focus+1) : addNumber('Стереть')
      }else if(focus == 10) {
        addNumber(0)
      }else if(focus == 12){
        soldCheckbox()
      }else if (focus == 11){
        setPage(0)
        playVideo()
      }else if (focus == 13){
        onSubmit()
      }
    }
  }

  const soldCheckbox = () => {
    setCheck(!check)
  }

const validTest = () => {
  let arr = number.split('')
  let tel = []
  for(let i = 2; i < arr.length; i++){
    if(Number.isInteger(+arr[i])){
      tel.push(arr[i])
    }
  }
  tel = tel.join('')
 
  if(arr.indexOf('_') == -1){
    setFullNumber(true)
    validNumber(tel)
  } else {
    setFullNumber(false)
    setValidation(false)
  }
}
const onSubmit = (e) => {
  e?.preventDefault()
  setPage(2)
  return false
}
  return (
    <div className={s.container}>
      <div className={s.content}>
        <form className={s.contactForm} onSubmit={onSubmit} >
          <h3 className={s.title}>Введите ваш номер мобильного телефона</h3>
          <div className={s.input__wrapper}>
            <label htmlFor="tel">{number}</label>
            <input type="tel" name="tel" id="tel" value={number} onChange={addNumber} autoComplete="off" />
          </div>
          <p className={s.text}>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
          <Keyboard imageRefs={imageRefs} focus={focus} addNumber={addNumber}/>
          <div className={s.checkbox}>
            {validation 
            ? <>
                <label htmlFor="checkbox" className={s.checkbox__style + ' ' + (focus == 12   ? s.checkbox__active   : null)}>
                  {check && <span className={s.checked}>&#10003;</span>}
                </label>
                <input type="checkbox" id='checkbox' checked={check} onChange={soldCheckbox} ref={ref => {
                    ref !=null ? imageRefs.push(ref) : null}}/>
                <p>Согласие на обработку персональных данных</p>
              </>
            : <span className={s.validationError}>{messageError}</span>
            }
          </div>
          <button className={(validation & check ? s.button__submite_enable : s.button__submite)  + ' ' + (focus == 13 ? s.button__submite_active : s.button__submite)} ref={ref => {
                ref !=null & validation & check ? imageRefs.push(ref) : null}} onClick={() => validNumber()}>Подтвердить номер</button>
        </form>
        <div className={s.close + ' ' + (focus == 11 ? s.close_active : '')} ref={ref => {
                ref !=null ? imageRefs.push(ref) : null}} onClick={()=> setPage(0) & playVideo()}>&#x2715;</div>
        <div className={s.qrCode__wrapper}>
          <p className={s.qrCode__text}>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
          <img  className={s.qrCode__img} src="/img/qr-code.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact