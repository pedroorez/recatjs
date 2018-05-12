// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { animateScroll } from 'react-scroll';

class Player extends Component {
    constructor(props){
        super(props);
        this.setState({
            width: 800,
            height: (800/16)*9,
            isReady: false,
            videoId: this.props.videoId,
            ready: true,
        });
        this.onResize = this.onResize.bind(this);
        this.readyhandler = this.readyhandler.bind(this);
    }

    onResize(width) {
        this.setState({
            width: width,
            height: (width/16)*9,
        });

        if (this.state.player){
            const player = this.state.player;
            player._IFrameContainer.width = this.state.width;
            player._IFrameContainer.height = this.state.height;
        }
    }

    readyhandler() {
        this.setState({ isReady: true });
    }

    componentDidUpdate(){
        const isReady = this.props.videoId && !this.state.player;
        const hasChanged = this.props.videoId != this.state.videoId;
        
        if (isReady || hasChanged) {
            this.setState({ isReady: false });
            
            let options = {
                id: this.props.videoId,
                access_token: this.props.token,
                width: this.state.width,
                height: this.state.height,
                type: this.props.type,
                show_title: false,
                mse: true,
                autoplay: true,
                events: {
                    onPlayerReady: this.readyhandler,
                }
            };

            // Mount Component
            const player = new window.MediastreamPlayer('webtv', options);
            // Scroll to Componenet
            animateScroll.scrollToTop();
            this.setState({ 
                videoId: this.props.videoId, 
                player 
            });
        }
    }

    render(){
        return (
            <div>
                <LoadingIndicator busy={! this.state.ready}/>
                <div id="webtv" className={this.state.ready ? '' : 'hidden'}/>
                <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
            </div>
        );
    }                                                                       
}

Player.propTypes = {
    type: PropTypes.any,
    token: PropTypes.any,
    videoId: PropTypes.any,
};

// EXPORT COMPONENT

export { Player };