import Rreact from 'react';
import css from './TransportSlider.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function TransportSlider(){
    const settings = {
        autoplaySpeed: 3000,
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
                       <img className={css.logo} src="/img/transportSlider.svg" alt="" />
                       <p className={css.text}>ПОДАЧА МАШИНЫ</p>
                    </div>
                </div>
                <div>
                <div className={css.name}>
                       <img className={css.logo} src="/img/transportSlider2.svg" alt="" />
                       <p className={css.text}>ПОГРУЗКА</p>
                    </div>
                </div>
                <div>
                <div className={css.name}>
                       <img className={css.logo} src="/img/transportSlider3.svg" alt="" />
                       <p className={css.text}>ДОСТАВКА</p>
                    </div>
                </div>
                <div>
                <div className={css.name}>
                       <img className={css.logo} src="/img/transportSlider4.svg" alt="" />
                       <p className={css.text}>РАЗГРУЗКА</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default TransportSlider;