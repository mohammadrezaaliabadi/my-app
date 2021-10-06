import Button from '../Button/Button';
import './ProductItem.css';
const ProductItem = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={data.image} className="card-img" />
      </div>

      <div className="card-body">
        <h3 className="card-title">{data.name}</h3>
        <span className="card-sub">💎</span>
        <h4 className="card-ditails">{data.price}</h4>
        {/* <Button className="card-button">More!</Button> */}
      </div>
    </div>
  );
};

export default ProductItem;
