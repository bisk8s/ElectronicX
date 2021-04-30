import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    justify-content:flex-start;
`;

const primaryColor = '#000';

export const LogoPlace = styled.img`
    padding: 0;
`;

export const Headline = styled.h1`
    font-family: 'Boltz';
    padding: 0.25em;
    font-weight: 300;
    font-size:2em;
`;

export const NavButton = styled(Link)`
  color:${primaryColor};

  font-family: Boltz;
  text-decoration:none;

  font-size: 1em;
  
  padding: 0.25em 1em;
  border: 2px solid ${primaryColor};
  border-radius: 3px;
`;

export const RightPanel = styled.div`
    display:flex;
    flex:1;
    align-items:flex-start;
    justify-content:flex-end;
    flex-direction:row;
    
`;

export const Separator = styled(Grid)`
    margin: 1em 0.25em;
    
    padding: 0em;
    border: 2px solid ${primaryColor};
    border-radius: 3px;

    height:4em;
    width:0px;
`;
