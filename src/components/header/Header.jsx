import React from 'react';
import css from './Header.module.css';
import {Link} from 'react-router-dom';
import BurgerMenu from '../burgerMenu/BurgerMenu';

function Header(){
    return(
        <div>
            <a href="+996 502 46 00 02"><img className={css.whatsapp} src="/img/whatsapp.svg" alt="" /></a>
            <div className={css.container}>
                <div className={css.left}>
                    <Link to="/">
                       <img className={css.img} src="/img/logo.png" alt="" />
                    </Link>
                </div>
                <BurgerMenu/>
                <nav className={css.right}>
                    <ul className={css.list}>
                        <Link to="/about">
                           <li className={css.list_item}>О нас</li>
                        </Link>
                        <Link to="service">
                           <li className={css.list_item}>Наши услуги</li>
                        </Link>
                        <Link to="partner">
                           <li className={css.list_item}>Партнеры</li>
                        </Link>
                        <Link to="transportation">
                            <li className={css.list_item}>Грузоперевозки</li>
                        </Link>
                        <Link to="contact">
                            <li className={css.list_item}>Контакты</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;