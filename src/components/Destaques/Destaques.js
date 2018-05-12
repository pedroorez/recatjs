import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

import altImageBanner from '../../images/alt-image-banner.jpg';


const CardSlider = (props) => (
    <div>
        <div className="item">
            <a href={props.card.urls} className="item-link">
                <div className="item-text">
                    <div className="item-title">{props.card.titulo}</div>
                    <div className="item-subtitle">{props.card.descricao}</div>
                </div>
                <img src={props.card.imagem} onError={props._onError}/>
            </a>
        </div>
    </div>
);

CardSlider.propTypes = {
    card: PropTypes.any,
    _onError: PropTypes.any,
};


class Destaques extends Component {

    constructor(props) {
        super(props);
    }

    _onError(e){
        e.target.src = altImageBanner;
    }
    
    render() {

        const contents = () => {
            const list = this.props.destaques || [];
            return  list.map((content) => (
                <CardSlider key={content.id} onError={this._onError} card={content}/>
            ));
        };

        const conteudo = contents();

        const swiperConfig = { 
            autoplay: {
                delay: 4000,
            },
            observer: true, 
            observeParents: true,
            effect: 'cube',
            cubeEffect: {
                shadow: false,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            loop: true,
        };

        const contents_final = () => {
            const list = conteudo || [];
            return  list.map((content, index) => (
                <div key={index} className="swiper-slide">
                    {content}
                </div>
            ));
        };

        return (
            <Swiper {...swiperConfig} >
                {contents_final()}
            </Swiper>
        );
    }
}

Destaques.propTypes = {
    destaques: PropTypes.array,
};

export { Destaques };