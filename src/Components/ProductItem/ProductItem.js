import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import { MdAdd, MdRemoveShoppingCart } from 'react-icons/md';
import Button from '../Button/Button';
import './ProductItem.css';
import useElementOnScreen from '../../Hooks/useElementOnScreen';
import { Link } from 'react-router-dom';
const ProductItem = ({ data }) => {
  const [containerRef, hiddenClassName] = useElementOnScreen(
    {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    },
    'hidden-product-item'
  );
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
    <div ref={containerRef} className={`card ${hiddenClassName}`}>
      <div className="card-header">
        <img src={data.image} alt={data.name} className="card-img" />
      </div>
      <div className="card-body">
        <Link to={`/product/${data.id}`}>
          <h3 className="card-title">{data.name}</h3>
        </Link>
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
