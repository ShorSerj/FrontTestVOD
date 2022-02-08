import React, {useEffect, useState} from 'react';
import s from './Slider.module.scss'

const Slider = ({setPage, playVideo}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const buttonsRefs = []

  useEffect(() => {
    window.addEventListener('keydown', navigationWithArrow);
    return () => {
      window.removeEventListener('keydown', navigationWithArrow);
    };
  }, [activeIndex,buttonsRefs]);

const img = [
    <img key={'slide1'} src={'/img/slider_1.jpg'} />,
    <img key={'slide2'} src={'/img/slider_2.jpg'} />,
    <img key={'slide3'} src={'/img/slider_3.jpg'} />,
]

const prevImgIndex = activeIndex === 0 ? false : activeIndex - 1

const nextImgIndex = activeIndex === img.length - 1 ? false : activeIndex + 1

const nextBtn = () =>{
    setActiveIndex((current) => {
        const res = current < img.length - 1 ? current + 1 : img.length - 1
        return res
    })
}
const prevBtn = () =>{
    setActiveIndex((current) => {
        const res = current > 0 ? current - 1 : 0
        return res
    })
}

const navigationWithArrow = (e) => {
    if(e.code === "ArrowLeft") {
        prevBtn()
    }
    if(e.code === "ArrowRight") {
        nextBtn()
    }
    if(e.code === "Enter") {
            setPage(0)
            playVideo() 
    }
  }


  return (
    <div className={s.slider}>
        <div className={s.slider_img + ' ' + s.slider_img_prev}
                key={prevImgIndex}>
            {img[prevImgIndex]}
        </div>
        <div className={s.slider_img}
                key={activeIndex}>
            {img[activeIndex]}
        </div>
        <div className={s.slider_img + ' ' + s.slider_img_next}
                key={nextImgIndex}>
            {img[nextImgIndex]}
        </div>
        <div className={s.buttonsControl}>
            <button 
                className={s.navigation + ' ' + (activeIndex !== 0 ? s.active  : null)} 
                ref={ref => {
                    ref !=null & activeIndex !== 0 ? buttonsRefs.push(ref) : null}}
                onClick={()=> prevBtn()}><span>&#60;</span></button>
            <button  
                className={s.navigation + ' ' + (activeIndex !== img.length-1 ? s.active : null)}
                ref={ref => {
                    ref !=null & activeIndex !== img.length-1 ? buttonsRefs.push(ref) : null}} 
                onClick={()=> nextBtn()}>
                    <span>&#62;</span>
            </button>
        </div> 
        <div className={s.close} 
        ref={ref => {
                    ref !=null ? buttonsRefs.push(ref) : null}} 
        onClick={()=> setPage(0) & playVideo()}
        >&#x2715;</div>
    </div>
  )
}
export default Slider
