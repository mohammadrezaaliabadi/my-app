import Blog from '../Blog/Blog';
import './Blogs.css';
import BLOGS from './BLOGS.json';

const Blogs = () => {
  return (
    <div>
      <div className="header-container">
        <h1 className="main-header">Blogs</h1>
      </div>
      <div className="blogs">
        {BLOGS.map(b => {
          return <Blog blog={b} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
