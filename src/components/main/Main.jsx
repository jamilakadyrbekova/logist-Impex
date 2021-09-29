import React from 'react';
import Derections from '../../derections/Derections';
import CartMap from '../cartMap/CartMap';
import Company from '../company/Company';
import Section from '../section/Section';
import Services from '../services/Services';
import Carusel from '../slider/Slider';
import css from './Main.module.css';

function Main(){
    return(
       <div>
            <div className={css.container}>
                <img className={css.image} src="/img/log.png" alt="" />
                <div className={css.wrapper}>
                    <h2 className={css.title}>Грузоперевозки в Бишкеке</h2>
                    <p className={css.text}>ОТПРАВКА И ДОСТАВКА ВАШЕГО ГРУЗА ПО ВСЕМУ МИРУ</p>
                </div>
            </div>
            <Section/>
            <Company/>
            <Services/>
            <Derections/>
            <Carusel/>
            <CartMap/>
       </div>
    );
}

export default Main;