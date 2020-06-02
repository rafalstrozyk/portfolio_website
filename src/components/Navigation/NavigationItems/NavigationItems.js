import React from 'react';
import {ReactComponent as HomeLogo } from '../../../assets/images/SVG/home.svg'
import {ReactComponent as CogLogo  }from '../../../assets/images/SVG/cog.svg'
import {ReactComponent as UserLogo } from '../../../assets/images/SVG/user.svg'
import {ReactComponent as FolderLogo} from '../../../assets/images/SVG/folder.svg'
import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul>
        <NavigationItem link='/' exact><HomeLogo/>Home</NavigationItem>
        <NavigationItem link='/me' ><UserLogo/>O mnie</NavigationItem>
        <NavigationItem link='/skills' ><CogLogo/>Umiejętności</NavigationItem>
        <NavigationItem link='/projects' ><FolderLogo className={classes.Logo} />Projekty</NavigationItem>
    </ul>
);

export default navigationItems;