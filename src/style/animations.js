import { keyframes } from 'styled-components';

export const newSiteAnimation = keyframes `
	0% {
        opacity: 0;
        transform: translateX(-50%);
    }
    
    70% {
        transform: translateX(10%);
    }

	100% {
        opacity: 1;
        transform: translateX(0);
	}
`
