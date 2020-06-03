import React, {useState} from 'react';
import './Burger.css'


const Burger = (props) => {
    
    return (
        <div className={'BurgerContener'} open={props.open} onClick={() => props.setOpen(!props.open)}>
            <div className={'bar'}></div>
            <div className={'bar'}></div>
            <div className={'bar'}></div>
        </div>
    )
}

export default Burger;