/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useCallback } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCounts, setPageCounts] = useState(0);
  const [activePageNumber, setActivePageNumber] = useState(1);

  const loadPosts = async () => {
    setLoading(() => true);
    const responsePosts = await fetch(
      'http://www.mocky.io/v2/5e9278be3100005b00462cbd',
    );
    const posts = await responsePosts.json();
    setBlogs(posts);

    setLoading(() => false);
  };
  useEffect(loadPosts, []);

  const calculatePageCounts = useCallback(() => {
    if (blogs.length % 3 > 0) {
      return parseInt(blogs.length / 3 + 1, 10);
    }
    return parseInt(blogs.length / 3, 10);
  }, [blogs]);

  useEffect(() => {
    setPageCounts(calculatePageCounts());
  }, [blogs, calculatePageCounts]);

  const handleClickOnPages = useCallback((pageNumber) => {
    setActivePageNumber(pageNumber);
  }, []);
  const paginationArrowHandler = useCallback(
    (direction) => {
      if (direction) {
        if (activePageNumber < pageCounts) {
          setActivePageNumber(activePageNumber + 1);
        }
      } else if (activePageNumber > 1) {
        setActivePageNumber(activePageNumber - 1);
      }
    },
    [activePageNumber, pageCounts],
  );

  return (
    <>
      <div className="blogs">
        {loading && (
          <div className="blog-btn-container">
            <h3 className="main-header">Data is Loading.</h3>
          </div>
        )}
        {blogs.length !== 0
          && blogs
            .slice(3 * (activePageNumber - 1), 3 * activePageNumber)
            .map((b, i) => <Blog blog={b} key={`blog-${b.id}${i}`} />)}
      </div>
      {blogs.length !== 0 && (
        <ul className="pagination">
          <button
            type="button"
            onClick={paginationArrowHandler.bind(this, false)}
            className="page"
          >
            ◀
          </button>
          {new Array(pageCounts).fill(0).map((item, index) => (
            <button
              type="button"
              onClick={handleClickOnPages.bind(this, index + 1)}
              className="page"
              key={`index_${index}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={paginationArrowHandler.bind(this, true)}
            className="page"
          >
            ▶
          </button>
        </ul>
      )}
    </>
  );
};

export default Blogs;
