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

    // Scrollbar
    html {
        --scrollbarBG: #33364d33;
        --thumbBG: #33364dff;
        }
    body::-webkit-scrollbar {
        width: 11px;
    }
    body {
        scrollbar-width: thin;
        scrollbar-color: var(--thumbBG) var(--scrollbarBG);
    }
    body::-webkit-scrollbar-track {
        background-color: var(--scrollbarBG);
    }
    body::-webkit-scrollbar-thumb {
        background-color: var(--thumbBG) ;
        border-radius: 6px;
        border: 2px solid #FFF3;
    }

    // Base
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
        &::before {
            content: "￫ ";
        }
        li::before{
            content:'• '
        }
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
