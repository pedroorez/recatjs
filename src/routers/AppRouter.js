// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { LoginPage } from '../pages/LoginPage';
import { VideoPage } from '../pages/VideoPage';
import { CanalPage } from '../pages/CanalPage';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/video/:id' component={VideoPage} />
                <Route path='/canal/:id' component={CanalPage} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </Fragment>
    </BrowserRouter>
);