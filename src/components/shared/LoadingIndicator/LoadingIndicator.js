// IMPORT STYLES
import '../../../styles/components/_loading.scss';

// IMPORT PACKAGE REFERENCES
import React from 'react';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';


// COMPONENT

const LoadingIndicator = (props) => (
    <div className='loading-wrapper'>
        <ScaleLoader
            color={'#d70907'} 
            height='90'
            width='11'
            margin='2px'
            radius='5'
            loading={props.busy}
            className='text-center' 
        />
    </div>
);


// CONFIGURE COMPONENT PROP TYPES

LoadingIndicator.propTypes = {
    busy: PropTypes.bool
};


// EXPORT COMPONENT

export { LoadingIndicator };