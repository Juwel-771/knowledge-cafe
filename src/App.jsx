import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = (blog) =>{
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
    // console.log(blog)
  }

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs handleAddToBookmarks = {handleAddToBookmarks}></Blogs>
        <Bookmarks bookmarks = {bookmarks} ></Bookmarks>
      </div>
    </>
  )
}

export default App
