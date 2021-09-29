import React from 'react';
import css from './Derections.module.css';

function Derections(){
  

    return(
        <div className={css.container}>
             <img className={css.img} src="/img/kompas1.webp" alt="" />
             <div className={css.box}>
                <h2 className={css.title}>ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ</h2>
                <p className={css.text}>Наша компание отправляет груз в любую страну. Вместе с этим, есть ряд направлений, работу с которыми мы выполняем часто.</p>
                <div className={css.wrapper}>
                    <div className={css.boxs}>
                        <img className={css.image} src="/img/kazahstana.jpg" alt="" />
                        <p>Казахстан</p>
                    </div>
                    <div className={css.boxs}>
                        <img className={css.image} src="/img/russia.png" alt="" />
                        <p>Россия</p>
                    </div>
                </div>
             </div>
        </div>
    );
}

export default Derections;