import React from 'react';
import s from './Keyboard.module.scss'

function Keyboard({imageRefs, focus, addNumber}) {  
  const button = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Стереть', 0]
    return arr.map((item, index) => {
        return( 
          <li className={index == focus ? item == 'Стереть' ? s.active +' '+ s.button +' '+ s.clear :  s.active +' '+ s.button : item == 'Стереть' ? s.button +' '+ s.clear :  s.button} key={arr.indexOf(item)} ref={ref => {
            ref !=null ? imageRefs.push(ref) : null}}onClick={()=> addNumber(item)} >
              <span name={item}>{item}</span>
          </li> 
        )
    })
  }

  return (
    <>
      <ul className={s.keyboard} >
          {button()}
      </ul>
    </>
    
  )
}
export default Keyboard
