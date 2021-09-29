import css from './Transports.module.css';

function Transports(){
    return(
        <div>
            <p className={css.title}>Виды траспорта</p>
            <div className={css.boxs}>
                <div className={css.name}>
                    <img className={css.transport} src="/img/transport4.png" alt="" />
                    <p className={css.text}>ГРУЗОВОЙ МИКРОАВТОБУС</p>
                </div>
                <div className={css.name}>
                    <img className={css.transport} src="/img/transport5.jpg" alt="" />
                    <p className={css.text}>ГРУЗОВОЙ ФУРГОН</p>
                </div>
                <div className={css.name}>
                    <img className={css.transport} src="/img/transport6.jpg" alt="" />
                    <p className={css.text}>АВТО-МАШИНА</p>
                </div>
            </div>
        </div>
    );
}

export default Transports;