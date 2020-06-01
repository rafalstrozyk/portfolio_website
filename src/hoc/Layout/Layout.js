import React from 'react';

import Aux from '../Auxing/Auxing';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import styles from './Layout.css';

const layout = (props) => {

    return (
        <Aux >
            <Toolbar />
            <main className={'test'}>
                <h1 >Main</h1>
            </main>
        </Aux>
    );
} 

export default layout;