import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import { PropTypes } from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md: w-1/3 bg-slate-500 p-6 ml-3 mt-3'>
            <h3 className='text-center text-2xl'>Total Bookmarked: {bookmarks.length} </h3>
            <h4> </h4>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark = {bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.PropTypes = {
    bookmarks: PropTypes.object
}
export default Bookmarks;  