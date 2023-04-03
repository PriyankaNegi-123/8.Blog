import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({blogs}) => {
  return (
    <div className='blogListWrap'>
        {blogs.map((blog)=>{
            return (
                <BlogItem blog={blog} key={blog.id}/>
        )})
        }     
    </div>
  )
}

export default BlogList