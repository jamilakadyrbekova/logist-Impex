import React from 'react';
import { Link } from 'react-router-dom';
import css from './Company.module.css';

function Company(){
    return(
        <div className={css.container}>
            <div className={css.box}>
                <h3 className={css.title}>О компании</h3>
                <hr className={css.line} />
                <p className={css.text}>«LOGIST IMPEX» учитывает <br /> интересы каждого <br /> клиента, добиваясь в каждом <br />  случае оптимального <br /> соотношения качества, скорости и <br /> стоимости перемещения груза.</p>
                <Link to="about">
                    <button className={css.btn}>Подробнее</button>
                </Link>
            </div>
            <img className={css.img} src="/img/about.jpg" alt="" />
        </div>
    );
}

export default Company;