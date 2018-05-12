// IMPORT PACKAGE REFERENCES
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Destaques } from '../components/Destaques/Destaques';
import { Trilho } from '../components/Trilho/Trilho';
import { fetchHome } from '../state/actions/HomeActions';
import { LoadingIndicator } from '../components/shared/LoadingIndicator/LoadingIndicator';

class HomePage extends Component {
    componentWillMount() {
        this.props.fetchHome();
    }

    render(){
        return (
            <main>
                <LoadingIndicator busy={!this.props.home}/>
                <div className={this.props.home ? '' : 'hidden'}>
                    <section>
                        <Destaques destaques={this.props.home.destaques} />
                    </section>
                    <section>
                        <Trilho content={this.props.home.aovivo} title="Ao Vivo" />
                    </section>
                    <section>
                        <Trilho content={this.props.home.videos_mais_vistos} title="Recentes" />
                    </section>
                    <section>
                        <Trilho content={this.props.home.videos_mais_vistos} title="Mais Vistos" />
                    </section>
                </div>
            </main>
        );
    }                                                                       
}

HomePage.propTypes = {
    fetchHome: PropTypes.any,
    home: PropTypes.any,
    fetching: PropTypes.any,
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, home } = state.home;

    return { fetching, fetched, failed, home };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchHome }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(HomePage);


// EXPORT COMPONENT

export { hoc as HomePage };