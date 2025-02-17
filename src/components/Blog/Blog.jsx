
import { prototype } from "postcss/lib/previous-map";
import PropTypes from "prop-types";

const Blog = ({blog}) => {
    return (
        <div>

        </div>
    );
};

Blog.protoType = {
    blog: PropTypes.object.isRequired;
}

export default Blog;