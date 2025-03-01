
import { IoBookmark } from "react-icons/io5";
// import PropTypes from "prop-types";

const Blog = ({blog, handleAddToBookmarks}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog; 
    return (
        <div className="mb-20">
            <img className="w-full" src={cover}  alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between">
                <div className="flex ml-2">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl"> {author} </h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span> {reading_time} min read</span>
                    <button className="ml-2 text-2xl text-red-600" onClick={()=> handleAddToBookmarks(blog)}> <IoBookmark /> </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href="">{hash} </a></span>)
            }
        </div>
    );
};

// Blog.PropTypes = {
//     blog: propTypes.object
// }

export default Blog;