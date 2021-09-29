import React from 'react';
import css from './CartMap.module.css';
import { YMaps, Map, Placemark } from "react-yandex-maps";

function CartMap(){
    return(
        <div className={css.box}>
            <h3 className={css.our__offis}>Наш офис</h3>
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

export default CartMap;