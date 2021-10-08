import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import { MdAdd, MdRemoveShoppingCart } from 'react-icons/md';
import Button from '../Button/Button';
import './ProductItem.css';
const ProductItem = ({ data }) => {
  const { carts, dispatchCart } = useContext(CartContext);
  const added = carts.includes(data.id);
  const handleAdd = () => {
    if (added) {
      dispatchCart({ type: 'REMOVE_FROM_CART', id: data.id });
    } else {
      dispatchCart({
        type: 'ADD_TO_CART',
        id: data.id,
      });
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        <img src={data.image} className="card-img" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{data.name}</h3>
        <span className="card-sub">💎</span>
        <h4 className="card-ditails">{data.price}</h4>
        <Button handleClick={handleAdd} className="card-button">
          {added ? (
            <>
              <MdRemoveShoppingCart />
              Remove from Cart
            </>
          ) : (
            <>
              <MdAdd />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
