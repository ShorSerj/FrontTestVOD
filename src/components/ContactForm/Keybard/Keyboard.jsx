import React from 'react'
import s from './Keybard.module.scss'

const Keyboard = (prop) => {
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'backspace']
    return( 
        <div className={s.keyboard}>
            {buttons.map(item => {
                <div className={s.button}>{item}</div>
            })}
        </div>
    )
}

export default Keyboard