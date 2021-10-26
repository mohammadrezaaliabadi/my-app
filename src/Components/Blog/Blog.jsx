/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import './Blog.css';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';

import ThemeContext from '../../Context/ThemeContext';

const Blog = ({ blog }) => {
  const themeValues = useContext(ThemeContext);
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: '1rem',
      }}
      className={`${themeValues.theme.className}`}
    >
      <CardMedia
        component="img"
        height="231"
        width="144"
        image={blog.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2">{blog.content}</Typography>
      </CardContent>
      <CardActions>
        <Checkbox
          color="secondary"
          sx={{ '& .MuiSvgIcon-root': { fontSize: '2rem' } }}
          icon={<FavoriteBorder className={`${themeValues.theme.className}`} />}
          checkedIcon={<Favorite />}
        />
        <Checkbox
          color="secondary"
          sx={{ '& .MuiSvgIcon-root': { fontSize: '2rem' } }}
          icon={
            <BookmarkBorderIcon className={`${themeValues.theme.className}`} />
          }
          checkedIcon={<BookmarkIcon />}
        />
        <IconButton aria-label="share">
          <ShareIcon
            sx={{ fontSize: '2rem' }}
            className={`${themeValues.theme.className}`}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

Blog.prototype = {
  blog: PropTypes.string.isRequired,
};

/* <div className="blog">
<h2 className="blog-title">{blog.title}</h2>
<img className="blog-img" srcSet={blog.image} alt="" />
<h3 className="blog-subject">
  <span style={{ color: 'red' }}>♥</span>
  {count}
</h3>
<p className="blog-description">{blog.content}</p>
<Button className="btn-like" handleClick={handleClickButton}>
  ♥
</Button>
</div> */
export default Blog;
// class Blog2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   componentDidMount() {
//     this.setState({ count: this.state.count - 1 });
//   }
//   //   componentDidUpdate() {
//   //     this.setState({ count: this.state.count - 2 });
//   //   }
//   componentWillUnmount() {
//     this.setState({ count: this.state.count - 3 });
//   }
//   handleClickButton = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     const { blog } = this.props;
//     const { count } = this.state;
//     return (
//       <div className="blog">
//         <h2 className="blog-title">{blog.title}</h2>
//         <h5 className="blog-title-description">{blog.titleDes}</h5>
//         <img className="blog-img" src={blog.image} alt="" srcset="" />
//         <h3 className="blog-subject">
//           <span style={{ color: 'red' }}>♥</span> {count}
//         </h3>
//         <p className="blog-description">{blog.content}</p>
//         <Button className="btn-like" handleClick={this.handleClickButton}>
//           ♥
//         </Button>
//       </div>
//     );
//   }
// }
