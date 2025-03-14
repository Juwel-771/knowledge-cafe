import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = (blog) =>{
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
    // console.log(blog)
  };

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // console.log('Remove Bookmark', id);

    const remaingBookmark = bookmarks.filter(bookmark => bookmark.id!==id);
    setBookmarks(remaingBookmark);
 }

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs handleAddToBookmarks = {handleAddToBookmarks} handleMarkAsRead = {handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
