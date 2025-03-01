
import { prototype } from "postcss/lib/previous-map";
import PropTypes from "prop-types";
import { IoBookmark } from "react-icons/io5";

const Blog = ({blog}) => {
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
                    <button className="ml-2 text-2xl text-red-600"> <IoBookmark /> </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href="">{hash} </a></span>)
            }
        </div>
    );
};

// Blog.protoType = {
//     blog: PropTypes.object.isRequired;
// }

export default Blog;