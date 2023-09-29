import { Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';
import { useEffect } from 'react';

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems, cartQuantity } = useShoppingCart();

  useEffect(() => {
    if (cartQuantity === 0) closeCart();
  }, [cartQuantity, closeCart]);

  // get total value
  const totalValue = cartItems.reduce((total, currItem) => {
    const foundItem = storeItems.find((item) => item.id === currItem.id);
    return total + currItem.quantity * (foundItem?.price || 0);
  }, 0);

  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className='ms-auto fw-bold fs-5'>Total {formatCurrency(totalValue)}</div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
