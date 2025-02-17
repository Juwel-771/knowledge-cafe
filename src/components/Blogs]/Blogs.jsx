import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => console.log(data));
    }, [])

    return (
        <div>
            <h2>Blog Presented Here: </h2>            
        </div>
    );
};

export default Blogs;