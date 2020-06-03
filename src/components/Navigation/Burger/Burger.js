import React from 'react';
import {StyledBurger} from './Burger.style';


const Burger = (props) => {
    
    return (
        <StyledBurger  open={props.open} onClick={() => props.setOpen(!props.open)}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
}

export default Burger;