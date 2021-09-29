import React from 'react';
import Movers from '../../view/movers/Movers';
import css from './Loading.module.css';

function Loading(){
    return(
        <div>
            <div className={css.container}>
                <h1 className={css.title}>Услуги грузчиков и упаковщиков:</h1>
                <div className={css.loading}>
                   <div className={css.box}>
                        <img className={css.img} src="/img/loading.svg" alt="" />
                        <h3 className={css.name}>Погрузка - разгрузка имущества</h3>
                        <p className={css.text}>Наши грузчики имеют большой опыт погрузо-разгрузочных работ. Всё ваше имущество будет аккуратно и бережно перемещено на новое место</p>
                    </div>
                    <div className={css.box}>
                        <img className={css.img} src="/img/loading2.svg" alt="" />
                        <h3 className={css.name}>Такелажные работы</h3>
                        <p className={css.text}>Решим все вопросы с перемещением тяжелых и крупногабаритных предметов. Перевезем сейфы, шкафы и другие</p>
                    </div>
                    <div className={css.box}>
                        <img className={css.img} src="/img/loading3.svg" alt="" />
                        <h3 className={css.name}>Сборка - разборка мебели</h3>
                        <p className={css.text}>Наши мебельщики умеют правильно разобрать и собрать как офисную мебель, спальные и кухонные гарнитуры. Для этого у нас есть навыки и все необходимые инструменты</p>
                    </div>
                    <div className={css.box}>
                        <img className={css.img} src="/img/loading4.svg" alt="" />
                        <h3 className={css.name}>Демонтаж - монтаж бытовой техники </h3>
                        <p className={css.text}>Отключим перед вывозом кухонную технику, мойки, офисные коммуникации и подключим всё на новом месте</p>
                    </div>
                </div>
            </div>
            <Movers/>
        </div>
    );
}

export default Loading;