import React from 'react';
import {Link} from 'react-router-dom';
import css from './Footer.module.css';

function Footer(){
    return(
        <div className={css.container}>
            <div className={css.box}>
                <img className={css.img} src="/img/logo.png" alt="" />
                <p className={css.text}>"Logist Impex" – это компания, <br /> предоставляющая услуги по <br /> международным грузовым <br /> перевозкам. </p>
            </div>
            <div className={css.name}>
                <h4 className={css.title}>О компании</h4>
                <hr />
                <ul className={css.link}>
                    <Link to="about">
                        <li className={css.list}>О нас</li>
                    </Link>
                    <Link to="review">
                       <li className={css.list}>Отзывы</li>
                    </Link>
                    <Link to="/documents">
                        <li className={css.list}>Документы</li>
                    </Link>
                    <Link to="/articles">
                        <li className={css.list}>Статьи</li>
                    </Link>
                </ul>
            </div>
            <div>
                <div>
                    <h4 className={css.title}>Контактный номер:</h4>
                    <hr />
                    <p className={css.list}>+ 996 555 460 001</p>
                    <p className={css.list}>+ 996 502 460 002</p>
                </div>
                <div>
                    <h4 className={css.titles}>Адрес:</h4>
                    <hr />
                    <p className={css.list}>Калык Акиев 1а</p>
                </div>
            </div>
            <div>
                <div>
                    <h4 className={css.title}>Email:</h4>
                    <hr />
                    <p className={css.list}>logistimpexinfo@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;