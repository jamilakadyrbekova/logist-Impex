import css from './TransportViews.module.css';

function TransportViews(){
    return(
        <div>
            <h1 className={css.title}>Виды грузовых перевозок</h1>
            <div className={css.boxs}>
                <div className={css.box}>
                   <img className={css.img} src="/img/transport.svg" alt="" /> 
                   <h3 className={css.tema}>Бишкек</h3>
                   <p className={css.text}>ГРУЗОПЕРЕВОЗКИ ПО БИШКЕКУ</p>
                </div> 
                <div className={css.box}>
                    <img className={css.img} src="/img/transport2.svg" alt="" /> 
                    <h3 className={css.tema}>Регионы</h3>
                    <p className={css.text}>ПЕРЕВОЗКИ ГРУЗОВ ПО РЕГИОНАМ КР</p>
                </div> 
                <div className={css.box}>
                    <img className={css.img} src="/img/transport3.svg" alt="" /> 
                    <h3 className={css.tema}>Международные</h3>
                    <p className={css.text}>ПЕРЕВОЗКИ ГРУЗОВ ИЗ КАЗАХСТАНА И РОССИИ</p>
                </div> 
            </div>
        </div>
    );
}

export default TransportViews;