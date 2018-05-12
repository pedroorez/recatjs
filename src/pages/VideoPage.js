// IMPORT PACKAGE REFERENCES
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CUSTOM COMPONENTS
import { Trilho } from '../components/Trilho/Trilho';
import { Player } from '../components/Player/Player';

// CUSTOM PACKAGES REFERENCES
import { getVideoData } from '../state/actions/LoginActions';
import { fetchHome } from '../state/actions/HomeActions';

class VideoPage extends Component {
    componentWillMount() {
        const videoId = this.props.match.params.id;
        this.setState({ videoId });
        this.props.getVideoData(videoId);
        this.props.fetchHome();
    }

    componentDidUpdate(){
        const videoId = this.props.match.params.id;
        if (this.state.videoId != videoId){
            this.componentWillMount();
        }
    }

    render(){
        return (
            <main>
                <h2> {this.props.nome} </h2>
                <section>
                    <Player videoId={this.props.msid} type='media'/>
                </section>
                <section>
                    <Trilho content={this.props.home.videos_mais_vistos} title="Recentes" />
                </section>
                <section>
                    <Trilho content={this.props.home.videos_mais_vistos} title="Mais Vistos" />
                </section>
            </main>
        );
    }                                                                       
}

VideoPage.propTypes = {
    getVideoData: PropTypes.any,
    fetchHome: PropTypes.any,
    mstoken: PropTypes.any,
    nome: PropTypes.any,
    msid: PropTypes.any,
    home: PropTypes.any,
    match: PropTypes.any,
};

const mapStateToProps = state => {
    const { mstoken, msid, nome } = state.login;
    const { home } = state.home;
    return { mstoken, msid, home, nome };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getVideoData, fetchHome }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(VideoPage);


// EXPORT COMPONENT

export { hoc as VideoPage };