import React from 'react';
import css from './BurgerMenu.module.css';
import {Link} from 'react-router-dom';
import Modal from '@material-ui/core/Modal';


function BurgerMenu(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <div>
             <div onClick={handleOpen} className={css.burger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
             >  
             <div className={css.paper}>
               <div className={css.modal_box}>
                 <p className={css.modal}  onClick={handleClose}>X</p>
                </div>
               <div>
                    <ul className={css.list}>
                         <Link to="/about">
                            <li onClick={handleClose} className={css.menu}>О нас</li>
                         </Link>
                         <Link to="service">
                            <li onClick={handleClose} className={css.menu}>Наши услуги</li>
                         </Link>
                         <Link to="partner">
                            <li onClick={handleClose} className={css.menu}>Партнеры</li>
                         </Link>
                         <Link to="transportation">
                             <li onClick={handleClose} className={css.menu}>Грузоперевозки</li>
                         </Link>
                         <Link to="contact">
                             <li onClick={handleClose} className={css.menu}>Контакты</li>
                         </Link>
                     </ul>
               </div>
             </div>
                </Modal>
        </div>
    );
}

export default BurgerMenu;