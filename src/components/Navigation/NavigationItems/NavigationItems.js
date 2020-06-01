import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul>
        <NavigationItem>Nav item 1</NavigationItem>
        <NavigationItem>Nav item 2</NavigationItem>
        <NavigationItem>Nav item 3</NavigationItem>
    </ul>
);

export default navigationItems;