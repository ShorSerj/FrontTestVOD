import React from 'react'
import s from './Keybard.module.scss'

const Keyboard = (prop) => {

    const button = () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Стереть',0]
        return arr.map(item => {
            return( 
                <div className={item === 'Стереть' ? s.button +' '+ s.clear : s.button} key={arr.indexOf(item)} onClick={()=> prop.addNumber(item)} tabIndex="-1">
                    <span tabIndex="-1">{item}</span>
                </div>
            )
        })
    }
    
    return( 
        <div className={s.keyboard} tabIndex="0">
            {button()}
        </div>
    )
}

export default Keyboard