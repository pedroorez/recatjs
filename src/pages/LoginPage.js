// IMPORT PACKAGE REFERENCES
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';


// CUSTOM PACKAGES REFERENCES
import { logUser } from '../state/actions/LoginActions';
import { LoadingIndicator } from '../components/shared/LoadingIndicator/LoadingIndicator';
import { Redirect } from 'react-router-dom';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.loguser = this.loguser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    loguser(event){
        event.preventDefault();
        this.props.logUser(this.state.email, this.state.password);
    }

    render(){
        if (this.props.isLogged) {
            return <Redirect to='/canal/45'/>;
        }
          
        return (
            <main>
                <LoadingIndicator busy={this.props.fetching}/>
                <Alert color="danger" className={this.props.failed ? '' : 'hidden'}>
                    Usuario ou Senha incorretos.
                </Alert>
                <Form onSubmit={this.loguser} className={this.props.fetching ? 'hidden' : ''}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input required type="email" name="email" value={this.state.email} 
                            onChange={this.handleChange} placeholder="torcedor@eiplus.com.br" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Senha</Label>
                        <Input required type="password" name="password" value={this.state.password} 
                            onChange={this.handleChange} placeholder="Senha Secreta" />
                    </FormGroup>
                    <Button >Entrar no EI-Plus</Button>
                </Form>
            </main>
        );
    }                                                                       
}

LoginPage.propTypes = {
    logUser: PropTypes.any,
    isLogged: PropTypes.any,
    fetching: PropTypes.any,
    fetched: PropTypes.any,
    failed: PropTypes.any,
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, isLogged } = state.login;

    return { fetching, fetched, failed, isLogged };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ logUser }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(LoginPage);


// EXPORT COMPONENT

export { hoc as LoginPage };