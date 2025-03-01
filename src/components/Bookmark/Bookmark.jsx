import React from 'react';
import { PropTypes } from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h4 className='text-2xl'>{title}</h4>
        </div>
    );
};

Bookmark.PropTypes = {
    bookmarks: PropTypes.object
}

export default Bookmark;