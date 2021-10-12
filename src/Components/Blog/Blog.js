import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import './Blog.css';
const Blog = ({ blog }) => {
  const [count, setCount] = useState(0);
  const handleClickButton = () => {
    setCount(count + 1);
  };

  return (
    <div className="blog">
      <h2 className="blog-title">{blog.title}</h2>
      <img className="blog-img" srcSet={blog.image} alt="" />
      <h3 className="blog-subject">
        <span style={{ color: 'red' }}>♥</span> {count}
      </h3>
      <p className="blog-description">{blog.content}</p>
      <Button className="btn-like" handleClick={handleClickButton}>
        ♥
      </Button>
    </div>
  );
};

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
