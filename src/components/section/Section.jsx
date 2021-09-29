import React from 'react';
import css from './Section.module.css';

function Section(){
    return(
        <div className={css.container}>
            <div className={css.box}>
                <img className={css.img} src="/img/icon.svg" alt="" />
                <p className={css.title}>СОХРАНИМ ВАШ <br /> ТОВАР</p>
                <p className={css.text}>Доставление груза в срок</p>
            </div>
            <div className={css.box}>
                <img className={css.img} src="/img/icon4.svg" alt="" />
                <p className={css.title}>УМЕНЬШИМ <br /> РИСКИ</p>
                <p className={css.text}> Времени, нервов, финансов</p>
            </div>
            <div className={css.box}>
                <img className={css.img} src="/img/icon3.svg" alt="" />
                <p className={css.title}>ВЫГОДНЫЕ <br /> МАРШРУТЫ</p>
                <p className={css.text}>Организуем весь путь доставки</p>
            </div>
            <div className={css.box}>
                <img className={css.img} src="/img/icon2.svg" alt="" />
                <p className={css.title}>БЕЗ <br /> ПЕРЕПЛАТ</p>
                <p className={css.text}>Итоговая цена не превысит договорную</p>
            </div>
        </div>
    );
}

export default Section;