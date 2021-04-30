import { createGlobalStyle } from 'styled-components';

import Boltz from '@public/fonts/Boltz-Regular.woff';
import BoltzWoff2 from '@public/fonts/Boltz-Regular.woff2';

export default createGlobalStyle`  
    @font-face {
        font-family: 'Boltz';
        src: local('Boltz'), local('Boltz'),
        url(${Boltz}) format('woff2'),
        url(${BoltzWoff2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    // Scrollbar
    html {
        --scrollbarBG: #33364d33;
        --thumbBG: #33364dff;
        margin:0;
        padding:0;
        }
    body::-webkit-scrollbar {
        width: 11px;
        height: 11px;
    }
    body {
        scrollbar-width: thin;
        scrollbar-color: var(--thumbBG) var(--scrollbarBG);

        margin:0;
        padding:0;
    }
    body::-webkit-scrollbar-track {
        background-color: var(--scrollbarBG);
    }
    body::-webkit-scrollbar-thumb {
        background-color: var(--thumbBG) ;
        border-radius: 6px;
        border: 2px solid #FFF3;
    }
    a{text-decoration:none}
`;
