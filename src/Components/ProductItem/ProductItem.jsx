/* eslint-disable import/named */
/* eslint-disable comma-dangle */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdRemoveShoppingCart } from 'react-icons/md';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
} from '@mui/material';
import CartContext from '../../Context/CartContext';
import Button from '../Button/Button';
import './ProductItem.css';
import useElementOnScreen from '../../Hooks/useElementOnScreen';
import { PRODUCTS_RELATIVE_PATH_IMAGE } from '../../configs/general';
import ThemeContext from '../../Context/ThemeContext';
import { formatCurrency } from '../../utils/format';

const ProductItem = ({ data }) => {
  const [containerRef, hiddenClassName] = useElementOnScreen(
    {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    },
    'hidden-product-item'
  );
  const themeValues = useContext(ThemeContext);
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
    <Card
      ref={containerRef}
      className={`card ${hiddenClassName} ${themeValues.theme.className}`}
      sx={{ maxWidth: 345 }}
    >
      <Link
        to={`/product/${data.id}`}
        style={{ color: 'inherit', textDecoration: 'inherit' }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image={`${PRODUCTS_RELATIVE_PATH_IMAGE}${data.image}`}
            alt={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {formatCurrency(data.price, 'en-us', 'USD')}
              💎
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
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
      </CardActions>
    </Card>
  );
};

export default ProductItem;
