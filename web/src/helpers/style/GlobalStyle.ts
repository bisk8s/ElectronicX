import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Boltz from '@public/fonts/Boltz-Regular.woff';
import BoltzWoff2 from '@public/fonts/Boltz-Regular.woff2';

export default createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'Boltz';
        src: local('Boltz'), local('Boltz'),
        url(${Boltz}) format('woff2'),
        url(${BoltzWoff2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    html, body{
        background-color: #33364dff;
        color: #FFFFFF;
        font-family:  'Lucida Sans', Helvetica, Arial, Sans-Serif;
        //
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }

    // TEXT
    h1 {
        font-weight: 300;
        font-size: 1.75em;
    }
    h2 {   
        font-weight: 300;
        font-size: 1.5em;
        line-height: 1em;
        line-height: 2em;
        text-indent: 0.5em;
    }
    h3 {
        font-weight: 300;
        font-size: 1em;
        line-height: 1.5em;
        text-indent: 2em;
    }
    p {
        color: #adb7bd;
        font-size: 1em;
        line-height: 1.5em;
        padding-left: 1.5em;
        margin: 0;
    }
    a {
        color: #109e92;
        text-decoration: underline;
    }
    a:hover {
        color: #ffffff;
    }

    // LIST
    @import url('https://fonts.googleapis.com/css2?family=Raleway&family=Sigmar+One&display=swap');

    ol {
        list-style-position: inside;
        counter-reset: list;
    }

    li {
        font-family: 'Raleway', sans-serif;
        
        color: #adb7bd;
        font-size: 1em;
        line-height: 1.5em;
        padding-left: 2.5em;
        margin: 0;
    }

    li::before {
        content: "￫ ";
    }

    .socialLinks{
        width: 100%;
        max-width: 550px;
        display: flex;
        align-content: 'center';
        justify-content: space-around;

        margin: 1em auto;
    }
`;
