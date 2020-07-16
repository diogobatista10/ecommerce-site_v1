import React from 'react';
import './menu-item.styles.scss';

const MenuItem = (props) => {
    const { title, imageUrl, size } = props.item;
    return (
        <div className={`${size ? size : ''} menu-item`}>
            <div style={{
                backgroundImage: `url(${imageUrl})`
            }} className='background-image' />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>{props.subtitle}</span>
            </div>
        </div>
    );
};

export default MenuItem;