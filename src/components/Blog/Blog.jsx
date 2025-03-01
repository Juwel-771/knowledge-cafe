
import { prototype } from "postcss/lib/previous-map";
import PropTypes from "prop-types";

const Blog = ({blog}) => {
    const {title} = blog; 
    return (
        <div>
            <h2 className="text-4xl">{title}</h2>
        </div>
    );
};

// Blog.protoType = {
//     blog: PropTypes.object.isRequired;
// }

export default Blog;