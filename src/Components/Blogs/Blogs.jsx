/* eslint-disable operator-linebreak */
/* eslint-disable arrow-parens */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-array-index-key */
import { Pagination } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import usePagination from '../../Hooks/usePagination';
import Blog from '../Blog/Blog';
import './Blogs.css';
import ThemeContext from '../../Context/ThemeContext';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const PER_PAGE = 3;
  const UP = usePagination(blogs, PER_PAGE);
  const themeValues = useContext(ThemeContext);
  const loadPosts = async () => {
    setLoading(() => true);
    const responsePosts = await fetch(
      'http://www.mocky.io/v2/5e9278be3100005b00462cbd'
    );
    const posts = await responsePosts.json();
    setBlogs(posts);

    setLoading(() => false);
  };
  useEffect(loadPosts);
  const useStyles = makeStyles(() => ({
    ul: {
      '& .MuiPaginationItem-root': {
        color: themeValues.theme.foreground,
      },
    },
  }));
  const classes = useStyles();

  return (
    <>
      <div className="blogs">
        {loading &&
          UP.currentData().map((b, i) => (
            <Blog blog={b} key={`blog-${b.id}${i}`} />
          ))}
      </div>
      <div className="blog__pagination">
        {blogs.length !== 0 && (
          <Pagination
            classes={{
              ul: classes.ul,
            }}
            count={UP.maxPage}
            onChange={UP.jump}
            color="primary"
          />
        )}
      </div>
    </>
  );
};

export default Blogs;
