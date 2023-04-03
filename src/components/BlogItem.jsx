import React from 'react';
import { blogList } from '../data';
import Chip from './Chip';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BlogItem = ({blog: {id, description, title, createdAt, authorName, authorAvatar, category, cover}}) => {
  return (
    <div className='blogItemWrap'>
      <img src={cover} alt='cover' className='blogItemCover'/>
      <Chip label={category}/>
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt='authorAva'/>
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItemLink' to={`/blog/${id}`}><BsArrowRight/></Link>
      </footer>
    </div>
  )
}

export default BlogItem