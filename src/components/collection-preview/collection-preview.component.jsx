import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = (props) => {
    const { title, items, imageUrl } = props;

    return <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => {
                    return <CollectionItem key={item.id} name={item.name} price={item.price} />
                })}
        </div>
    </div>
};

export default CollectionPreview;
