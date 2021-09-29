import css from './Contact.module.css';
import { YMaps, Map, Placemark } from "react-yandex-maps";

function Contact(){
    return(
        <div>
            <h1 className={css.title}>Контакты</h1>
            <div className={css.container}>
                <div className={css.box}>
                    <h3 className={css.text}>Адрес:</h3>
                    <p className={css.name}>Кыргызстан, г. Бишкек, <br />
                       ул. Калыка Акиева 1А
                    </p>
                    <h3 className={css.text}>Телефон:</h3>
                    <p className={css.name}>+996 502 46 00 02</p>
                    <h3 className={css.text}>Электронная почта:</h3>
                    <p className={css.name}>logistimpexinfo@gmail.com</p>
                    <h3 className={css.text}>Режим работы:</h3>
                    <p className={css.name}>09:00-18:00 </p>
                </div>
                <img className={css.image} src="/img/logotip.png" alt="" />
            </div>
            <div className={css.map}>
            <YMaps>
                <Map height={"100%"} width={"100%"} defaultState={{ center: [42.8667, 74.5667], zoom: 12 }}>
                    <Placemark geometry={[42.864433, 74.576105]} />
                </Map>
            </YMaps>
            </div>
        </div>
    );
}

export default Contact;