import React, {useState, useEffect, useRef} from 'react';
import s from './ContactForm.module.scss'

function ContactForm({handleSubmit, error}) {
  const refKeyword = useRef();
  const imageRefs = []

  const [number, setNumber] = useState('+7(___)___-__-__')
  const [focus, setFocus] = useState(0)

  useEffect(() => {
    window.addEventListener('keydown', addNumber);
    window.addEventListener('keydown', navigationWithArrow);
    console.log(imageRefs[focus])
    return () => {
      window.removeEventListener('keydown', addNumber);
      window.removeEventListener('keydown', navigationWithArrow);
    };
  }, [number, imageRefs[0], focus]);

  const addNumber = (e) => {
    let arr = number.split('')
    console.log(e)
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
      Number.isInteger(+key) ? arr[arr.indexOf('_') > 0 ? arr[arr.indexOf('_')] = key : null] : null
    }
    setNumber(arr.join(''))
  }
  
  const button = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Стереть', 0]
    
    return arr.map((item, index) => {
        return( 
          <li className={index == focus ? s.active +' '+ s.button : s.button} key={arr.indexOf(item)} ref={ref => {
            ref !=null ? imageRefs.push(ref) : null}}onClick={()=> addNumber(item)} >
              <span name={item}>{item}</span>
          </li> 
        )
    })
}

  const navigationWithArrow = (e) => {
    if(e.code === "ArrowUp"){
      focus > 2 ? setFocus(focus - 3) : null
    }
    if(e.code === "ArrowDown") {
      if(focus == null) {
        setFocus(4)
      }else if(focus < 8){
        setFocus(focus + 3)
      }
    }
    if(e.code === "ArrowLeft") {
      if(focus == 0) {
        setFocus(0)
      }else{
        setFocus(focus - 1)
      }
    }
    if(e.code === "ArrowRight") {
      if(focus == 10) {
        setFocus(10)
      }else if(focus < 10){
        setFocus(focus + 1)
      }
    }
    if(e.code === "Enter") {
      focus != 9 ? addNumber(focus+1) : addNumber('Стереть')
    }
  }
  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      <h3 className={s.title}>Введите ваш номер мобильного телефона</h3>
      <div className={s.input__wrapper}>
        <label htmlFor="phoneNumber">{number}</label>
        <input type="tel" name="phoneNumber" id="phoneNumber" value={number} onChange={addNumber} autoComplete="off" ref={refKeyword}/>
      </div>
      <p className={s.text}>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
      <ul className={s.keyboard} >
          {button()}
      </ul>
    </form>
  )
}
export default ContactForm
