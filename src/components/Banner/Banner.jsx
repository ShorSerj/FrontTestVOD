import React from 'react';
import s from './Banner.module.scss'

const Banner = ({visual, setPage, stopVideo}) => {
  return (
    <div className={visual ? s.baner_visual : s.baner}>
        <div className={s.title}>
            <h3>Исполните мечту вашего малыша!</h3>
            <h3>Подарите ему собаку!</h3>
        </div>
        <img src="/img/qr-code.png" alt="" />
        <p className={s.baner__instruction}>Сканируйте QR-код или нажмите ОК</p>
      <button className={s.baner__button} onClick={(e) => {
        setPage(1)
        // player.stopVideo();
        console.log('hi')
        stopVideo()
      }}>OK</button>
    </div>
  )
}
export default Banner
