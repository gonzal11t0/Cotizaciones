import React from 'react';
import styled from 'styled-components';
import '../styles/responsive.css'

const Logos = styled.img`
    display: block;
    height:59px;
    margin:0 auto;
    position:relative;
    text-align:center;
    top:50px;
    width:170px;
`;

const Logo = () => {
    return (
        <Logos role='img' aria-label='logo pagina' aria-controls='logo-1' rel="preload" src='https://www.infodolar.com/shared/images/logos/infodolar.png' alt='logo' />
    );
};

export default Logo;
