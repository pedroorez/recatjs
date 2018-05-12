// IMPORT PACKAGE REFERENCES
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CUSTOM COMPONENTS
import { Player } from '../components/Player/Player';

// CUSTOM PACKAGES REFERENCES
import { getStreamingKey } from '../state/actions/LoginActions';

class CanalPage extends Component {
    componentDidMount() {
        const canalId = this.props.match.params.id;
        this.props.getStreamingKey(canalId);
    }

    render(){
        return (
            <main>
                <section>
                    <h2> {this.props.nome} </h2>
                    <Player token={this.props.mstoken} videoId={this.props.msid} type='live'/>
                </section>
            </main>
        );
    }                                                                       
}

CanalPage.propTypes = {
    getStreamingKey: PropTypes.any,
    mstoken: PropTypes.any,
    msid: PropTypes.any,
    nome: PropTypes.any,
    match: PropTypes.any,
};

const mapStateToProps = state => {
    const { mstoken, msid, nome } = state.login;
    return { mstoken, msid, nome };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getStreamingKey }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(CanalPage);


// EXPORT COMPONENT

export { hoc as CanalPage };