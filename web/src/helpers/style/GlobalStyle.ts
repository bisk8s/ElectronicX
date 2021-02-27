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

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background-color: #33364dff;
        color: #FFFFFF
    }
`;
