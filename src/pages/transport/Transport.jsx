import React from 'react';
import TransportSlider from '../../components/TransportSlider/TransportSlider';
import Transports from '../../view/Transports/Transports';
import TransportViews from '../../view/transportViews/TransportViews';
import css from './Transport.module.css';

function Transport(){
    return(
        <div>
            <div className={css.container}>
                <div className={css.next}>
                    <img className={css.image} src="/img/kazah.jpg" alt="" />
                    <img className={css.image} src="/img/kyrzys.jpg" alt="" />
                    <img className={css.image} src="/img/rassian.jpg" alt="" />
                </div>
                <TransportViews/>
            </div>
            <h2 className={css.title}>Этапы перевозки:</h2>
            <TransportSlider/>
            <Transports/> 
                
        </div>
    );
}

export default Transport;