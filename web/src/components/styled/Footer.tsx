import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const footerHeight = '50px';
const SocialLinksWrapper = styled.div`
    width: 100%;
    max-width: 550px;
    display: flex;
    align-content: 'center';
    justify-content: space-around;

    margin: 1em auto;
`;

export const FooterWapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    justify-content:flex-start;
    background-color: #FFFFFFAA;
    position:fixed;
    bottom:0;
    width:100%;
    height:${footerHeight};
`;
export const FooterSafeArea = styled.div`
    background-color: #FFFFFF;
    height:${footerHeight};
    width:100%;
    margin-top: 1em;
`;

type FooterLinkProps = {
  href: string
  shieldConfig:string
   alt: string
}

const FooterLink = ({ href, shieldConfig, alt }:FooterLinkProps) => (
  <a href={href} rel="nofollow noreferrer noopener" target="_blank">
    <img src={`https://img.shields.io/badge/${shieldConfig}`} alt={alt} />
  </a>
);

const indianaConfig = '-Indiana_Technologies-green?logo=data:image/png;base64,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&';
export const SocialLinks = () => (
  <SocialLinksWrapper>
    <FooterLink href="https://www.indianatechnologies.dev/" alt="Indiana Technologies" shieldConfig={indianaConfig} />
    <FooterLink href="https://www.linkedin.com/in/guilherme-lucena-03b932127/" alt="Linked In" shieldConfig="-Gui%20Lucena-blue?logo=Linkedin&logoColor=white" />
    <FooterLink href="mailto:bisk8scode@gmail.com" alt="Gmail" shieldConfig="-bisk8scode@gmail.com-ED5556?logo=Gmail&logoColor=white" />
  </SocialLinksWrapper>
);

export const Footer = () => (
  <>
    <FooterSafeArea />
    <FooterWapper>
      <SocialLinks />
    </FooterWapper>
  </>
);

export const ContentWrapper = styled(Grid)`
    min-height: calc(100vh - ${footerHeight});
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    padding: 1em;
`;
