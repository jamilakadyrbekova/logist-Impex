import React from 'react';
import Castoms from '../../view/customs/Customs';
import Slope from '../../view/slope/Slope';
import css from './OurService.module.css';

function OurServices(){
    return(
        <div className={css.box}>
            <h1 className={css.title}>Автоперевозки</h1>
            <h5 className={css.name}>Преимущества автоперевозки грузов:</h5>
            <p className={css.text}>1. Для перевозки грузов автомобильным транспортом достаточно наличия дороги. Конечно, чем она будет лучше – тем быстрее и качественнее можно реализовать доставку. Быстрая доставка порой является главным условием заказчика, и она вполне возможна при выборе данного выбора доставки.</p>
            <p className={css.text}>2.Доставка грузов при участии грузового автотранспорта возможна в самые отдаленные и труднодоступные регионы. Когда вблизи нет железнодорожного полотна или места для посадки воздушных судов, автоперевозка – настоящее спасение.</p>
            <p className={css.text}>3.Габариты и грузоподъемность автомобиля подбираются в зависимости от веса и размеров груза. Можно заказать компактный автофургон или автопоезд соразмерно перевозимому товару. В некоторых случаях грузы от разных заказчиков компонуются в один автомобиль, и клиенту не нужно переплачивать за «покупку» всей машины, хотя перевезти нужно всего несколько небольших коробок.</p>
            <p className={css.text}>4.Стоимость автоперевозки всегда будет дешевле аналогичной доставки грузов, к примеру, самолетом.</p>
            <p className={css.text}>5.Экономия на погрузочно-разгрузочных работах. Перед отправкой машину загружают и выгружают непосредственно в пункте назначения. В случае с другими видами доставки данную процедуру приходится повторять несколько раз.</p>
            <div className={css.boxs}>
               <img className={css.image} src="/img/ourService.jpg" alt="" />
            </div>
            <Castoms/>
            <Slope/>
        </div>
    );
}

export default OurServices;