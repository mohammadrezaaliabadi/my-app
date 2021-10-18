import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './Products.css';

const Products = (props) => {
  const { data } = props;
  return (
    <div className="cards ">
      {data?.map((product) => (
        <ProductItem data={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
