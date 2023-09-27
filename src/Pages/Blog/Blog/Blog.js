import React, { useEffect } from 'react';
import BlogHeader from '../BlogHeader/BlogHeader';
import BlogOneHome from '../../Home/BlogOneHome/BlogOneHome';

const Blog = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
            <BlogHeader></BlogHeader>
            <BlogOneHome isShow={false}></BlogOneHome>
        </div>
    );
};

export default Blog;