// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import { Link } from 'react-router-dom';

// CUSTOM 
import { logOffUser, loadSession } from '../../state/actions/LoginActions';

// TODO:
// Remover FontAwesome

class Header extends Component {
    constructor(props) {
        super(props);
  
        this.toggle = this.toggle.bind(this);
        this._onClickLink = this._onClickLink.bind(this);
        this._onClickLogOff = this._onClickLogOff.bind(this);
        this.state = {
            isOpen: false
        };
        this.props.loadSession();
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    _onClickLink(){
        this.setState({
            isOpen: false,
        });
    }
    
    _onClickLogOff(){
        this.props.logOffUser();
        this._onClickLink();
    }

    render() {
        return (
            <div>
                <Navbar light expand="lg">
                    <NavbarBrand tag={Link} to="/">
                        <a className="navbar-brand">
                            <i className="fab fa-2x" style={{color: 'dodgerblue'}}></i>
                        </a>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="mr-2"> 
                        <i className="fas fa-bars"></i> 
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink onClick={this._onClickLink} tag={Link} to="/about/">About?</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this._onClickLink} tag={Link} to="/about/">Conteúdos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this._onClickLink} tag={Link} to="/about/">Busca</NavLink>
                            </NavItem>
                            <NavItem className={this.props.isLogged ? '' : 'hidden'}>
                                <NavLink onClick={this._onClickLink} tag={Link} to="/video/">Video</NavLink>
                            </NavItem>
                            <NavItem className={this.props.isLogged ? 'hidden' : ''}>
                                <NavLink onClick={this._onClickLink} tag={Link} to="/login/">Entrar</NavLink>
                            </NavItem>
                            <NavItem className={this.props.isLogged ? '' : 'hidden'}>
                                <NavLink tag={Link} onClick={this._onClickLogOff} to="/home/">Sair</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

Header.propTypes = {
    isLogged: PropTypes.any,
    logOffUser: PropTypes.any,
    loadSession: PropTypes.any,
};

const mapStateToProps = state => {
    const { isLogged } = state.login;
    return { isLogged };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ logOffUser, loadSession }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Header);

export { hoc as Header };