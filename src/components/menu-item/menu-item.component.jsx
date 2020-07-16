import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = (props) => {
    const { title, imageUrl, size, linkUrl } = props.item;
    return (
        <div className={`${size ? size : ''} menu-item`} onClick={() => props.history.push(`${props.match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);