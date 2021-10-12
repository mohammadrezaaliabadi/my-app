import ProductItem from '../ProductItem/ProductItem';
import './Products.css';

const Products = props => {
  return (
    <div className={`cards `}>
      {props.data?.map(product => {
        return <ProductItem data={product} key={product.id} />;
      })}
    </div>
  );
};

export default Products;
