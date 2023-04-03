import React, { useState } from 'react';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import Search from '../components/Search';
import {blogList} from '../data.js';
import EmptyList from '../components/EmptyList';


const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');
// search submit
  const handleSearchSubmit= (e)=>{
      e.preventDefault();
      handleSearchResults();
  }
// search for blogs by category
  const handleSearchResults=()=>{
    const allBlogs=blogList;
    const filteredBlogs = allBlogs.filter((blog)=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
    setBlogs(filteredBlogs)
  };
  
  const handleClearSearch=()=>{
    setBlogs(blogList);
    setSearchKey('');
  }

  return (
    <div>
        <Header/>

        <Search 
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e)=>setSearchKey(e.target.value)} />

        {!blogs.length?<EmptyList/>:<BlogList blogs={blogs}/>}
    </div>
  )
}

export default Home