import React from 'react';
import css from './Slider.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




function Carusel(){
    const settings = {
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    
    return(
        <div className={css.slider}>
            <Slider {...settings} >
            <div>
                <div className={css.name}>
                   <img src="/img/slider2.jpg" alt="" />
                   <p className={css.text} >Компания Logist Impex предоставляет транспортные услуги любых грузов по Кыргызстану и за его пределами.
                   Опытная команда поможет вам перевезти ваш груз из точки А в точку Б!
                   </p>
                </div>
            </div>
            <div>
                <div className={css.name}>
                   <img src="/img/slider3.jpg" alt="" />
                   <p className={css.text}>Мы осуществляем автомобильные грузоперевозки по направлению Кыргызстан — Казахстан. Мы предлагаем комплексные решения – широкий спектр транспортно-логистических услуг по оптимальной цене.</p>
                </div>
            </div>
            <div>
                <div className={css.name}>
                   <img src="/img/slider4.jpg" alt="" />
                   <p className={css.text}>Мы оказываем услуги по перевозке грузов из Кыргызстана в Россию. Кыргызстан является важным связующим звеном на пути товаров из Азии в Россию. Здесь находятся крупнейшие оптовые рынки, откуда товары из Китая поступают, прежде всего, на территорию России и Казахстана.</p>
                </div>
            </div>
            <div>
                <div className={css.name}>
                    <img src="/img/slider5.png" alt="" />
                    <p className={css.text}>Автомобильные грузоперевозки считаются наиболее востребованным и популярным видом транспортных услуг. Этот вид будет оптимальным решением для грузовладельцев, которым необходима максимальная свобода в выборе пути доставки своих грузов на международных направлениях.</p>
                </div>
            </div>
          
        </Slider>
        </div>
    );
}

export default Carusel;