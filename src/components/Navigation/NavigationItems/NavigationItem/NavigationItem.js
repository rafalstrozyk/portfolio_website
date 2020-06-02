import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.css';

const navigationItem = (props) => (
    <li className={'navigationItem'}>
       <NavLink
       className={'link'}
        to={props.link}
        exact={props.exact}
        activeClassName={'active'}
       >{props.children}</NavLink>
    </li>
);

export default navigationItem;