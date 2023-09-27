import React from 'react';

const BlogHeader = () => {
    return (
        <div>
            <section class="page-header">
            <div class="page-header__bg"></div>
            <div class="page-header__shape1"></div>
            <div class="page-header__shape2"></div>
            <div class="page-header__shape3 wow slideI" data-wow-delay="300ms"></div>
            <div class="container">
                <ul class="page-header__breadcrumb list-unstyled">
                    <li><a href="index.html">Home</a></li>
                    <li><span>Blog</span></li>
                </ul>
                <h2 class="page-header__title">Blog posts</h2>
            </div>
        </section>
        </div>
    );
};

export default BlogHeader;