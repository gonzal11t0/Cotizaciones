import React from 'react';
import { Route, Routes, Link} from 'react-router-dom';
import styled from 'styled-components';
import Dolar from '../monedas/Dolar';
import Euro from '../monedas/Euro';
import Libra from '../monedas/Libra';
import Real from '../monedas/Real';
import PesoUruguayo from '../monedas/PesoUruguayo';
import DolarBlue from '../monedas/DolarBlue';
import ContadoConLiqui from '../monedas/DolarContadoLiqui';
import Contacto from './Contacto';
import '../styles/style.css'
import '../styles/responsive.css'

const Header = styled.header`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    width:800px;
    height: auto;
    margin: 0 auto;
    margin-top: 80px;
    background-color: #278444;
    margin-left: auto;
    margin-right: auto;
`;

const Ul = styled.ul`
    list-style-type: none;
    padding: 0px;
`;

const Li = styled.li`
    position: relative;
    display: inline;
    padding: 15px 10px;
    margin-right:50px; 
    margin-left:90px;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    &:hover {
        text-decoration: underline 2px;
        ul {
            display: block;
        }
    }
`;

const StyledLink = styled(Link)`
    color: #ffff;
    font-family: Helvetica;
    font-size:1rem;
    text-decoration: none;
`;

const MenuVertical = styled.ul`
    position: absolute;
    display: none;
    list-style: none;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0;
    z-index:1;
`;

const SubLi = styled.li`
    padding: 10px 1px 10px 10px;`;

    const IconContainer = styled.div`
    padding: 5px;
    display: flex;
    float: right;
    margin-top: 0px;
    margin-left: auto;
    padding-right: 5vh;
`;


const Menu = () => {
    return (
            <>
                <Header role="navigation">
                    <nav  aria-label='Menu de la pagina con Home-Monedas incluidas Dolar,Euro,Real,Dolar Bluue, Dolar ccl, Libra, Peso Uruguayo'>
                        <Ul className='menu-horizontal'>
                            <Li>
                                <StyledLink aria-controls="panel1-content" to="/Home">Home</StyledLink>
                            </Li>
                            <Li>
                                <StyledLink aria-controls="panel2-content" to="/Monedas">Monedas</StyledLink>
                                <MenuVertical className='menu-vertical'>
                                    <SubLi>
                                        <StyledLink aria-controls="panel3-content" to='/Monedas/Dolar'>$ Dolar</StyledLink>
                                    </SubLi>
                                    <SubLi>
                                        <StyledLink aria-controls="panel4-content" to='/Monedas/Euro'>$ Euro</StyledLink>
                                    </SubLi>
                                    <SubLi>
                                        <StyledLink aria-controls="panel5-content" to='/Monedas/Real'>$ Real</StyledLink>
                                    </SubLi>
                                    <SubLi>
                                        <StyledLink aria-controls="panel6-content" to='/Monedas/DolarBlue'>$ Dolar Blue</StyledLink>
                                    </SubLi>
                                    <SubLi>
                                        <StyledLink aria-controls="panel7-content" to='/Monedas/ContadoConLiqui'>$ Dolar Contado Liqui</StyledLink>
                                    </SubLi>
                                    <SubLi>
                                        <StyledLink aria-controls="panel8-content" to='/Monedas/Libra'>$ Libra</StyledLink>
                                    </SubLi>
                                    <SubLi>
                                        <StyledLink aria-controls="panel9-content" to='/Monedas/PesoUruguayo'>$ Peso uruguayo</StyledLink>
                                    </SubLi>
                                </MenuVertical>
                            </Li>
                            <Li><StyledLink to="./Contacto">Contacto</StyledLink></Li>
                            <IconContainer className='icon'>
                            </IconContainer>
                        </Ul>
                    </nav>
                </Header>
                <Routes>
                    <Route path='/Contacto' element={<Contacto/>} />
                    <Route path='/Dolar' element={<Dolar/>} />
                    <Route path='/Euro' element={<Euro/>} />
                    <Route path='/Libra' element={<Libra/>} />
                    <Route path='/Real' element={<Real/>} />
                    <Route path='/PesoUruguayo' element={<PesoUruguayo/>} />
                    <Route path='/DolarBlue' element={<DolarBlue/>} />
                    <Route path='/ContadoConLiqui' element={<ContadoConLiqui/>} />
                </Routes>
            </>
    );
};

export default Menu;
