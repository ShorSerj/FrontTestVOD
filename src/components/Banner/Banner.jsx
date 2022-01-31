import React from 'react';
import s from './Banner.module.scss'

function Banner(prop) {
  return (
    <div className={s.baner}>
        <div className={s.title}>
            <h3>Исполните мечту вашего малыша!</h3>
            <h3>Подарите ему собаку!</h3>
        </div>
        <img src="/img/qr-code.png" alt="" />
        <p className={s.baner__instruction}>Сканируйте QR-код или нажмите ОК</p>
      <button className={s.baner__button} tabIndex="0">OK</button>
    </div>
  )
}

export default Banner
