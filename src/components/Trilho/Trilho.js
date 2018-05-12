import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';

import '../../styles/components/_trilho.scss';
import '../../styles/components/_card-slider.scss';
import 'swiper/dist/css/swiper.min.css';

import altImageBanner from '../../images/alt-image-banner.jpg';


const CardSlider = (props) => (
    <div>
        <Link to={props.card.url} className="item-link">
            <div className="card">
                <img className="card-img-top" src={props.card.imagem} 
                    alt="Card image cap" onError={props.onError}/>
                <div className="card-body">
                    <h5 className="card-title">{props.card.titulo}</h5>
                </div>
            </div>
        </Link>
    </div>
);

CardSlider.propTypes = {
    card: PropTypes.any,
    onError: PropTypes.any,
};

class Trilho extends Component {
    _onError(e){
        e.target.src = altImageBanner;
    }

    render() {

        const contents = () => {
            const list = this.props.content || [];
            return  list.map((content) => (
                <div key={content.id} className="swiper-slide">
                    <CardSlider card={content} onError={this._onError}/>
                </div>
            ));
        };

        const swiperConfig = { 
            observer: true, 
            observeParents: true,
            slidesPerView: 5,
            spaceBetween: 20,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                }
            }
        };

        if(this.props.content) {
            return (
                <div className="trilho-wrapper">
                    <h2 className="title-trilho">{this.props.title}</h2>
                    <Swiper {...swiperConfig} >
                        {contents()}
                    </Swiper>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
        
    }
}

Trilho.propTypes = {
    content: PropTypes.array,
    swiperConfig: PropTypes.any,
    title: PropTypes.string
};

export { Trilho };