import React from 'react';
import { Link } from 'react-router-dom';
import css from './Services.module.css';

function Services(){
    return(
        <div className={css.container}>
            <h1 className={css.title}>Получите комплекс транспортных услуг </h1>
            <div className={css.boxs}>
                <Link to="transport">
                    <div className={css.box}>
                        <img className={css.img} src="./img/services.svg" alt="" />
                        <h4 className={css.tema}>ТРАНСПОРТ</h4>
                        <p className={css.text}>Для перевозок и <br /> экспресс-доставки</p>
                    </div>
                </Link>
                <Link to="registration">
                    <div className={css.box}>
                        <img className={css.img} src="/img/services2.svg" alt="" />
                        <h4 className={css.tema}>ОФОРМЛЕНИЯ</h4>
                        <p className={css.text}>Услуги по таможенному оформлению</p>
                    </div>
                </Link>
               <Link to="documents">
                    <div className={css.box}>
                         <img className={css.img} src="/img/services3.svg" alt="" />
                         <h4 className={css.tema}>ДОКУМЕНТЫ</h4>
                         <p className={css.text}>Получим за вас все разрешения</p>
                     </div>
               </Link>
                <Link to="loading">
                    <div className={css.box}>
                        <img className={css.img} src="/img/services4.svg" alt="" />
                        <h4 className={css.tema}>ПОГРУЗКА</h4>
                        <p className={css.text}>ПОГРУЗИМ И РАЗГРУЗИМ АККУРАТНО</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Services;