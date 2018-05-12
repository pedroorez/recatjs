// IMPORT STYLES
import '../../styles/components/_footer.scss';

// IMPORT PACKAGE REFERENCES
import React from 'react';

import appleButton from '../../images/apple-store-button.png';
import googleButton from '../../images/google-play-button.png';

// COMPONENT 
import { NavItem, Nav, NavLink, Container, Row, Col } from 'reactstrap';

export const Footer = () => (
    <Container className='footer'>
        <Row>
            <Col xs="6" md='8'>
                <Nav>
                    <NavItem>
                        <NavLink href="#">Ajuda</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Fale Conosco</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Termos de Uso</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Política de Privacidade</NavLink>
                    </NavItem>
                </Nav>
            </Col>
            <Col xs="6" md='4' className='appstore-space'>
                <img src={appleButton}/>
                <img src={googleButton}/>
            </Col>
        </Row>
        <Row className='copyright'>
             © 2099 Recatjs Corporated Inc Ltda.
        </Row>
    </Container>
);