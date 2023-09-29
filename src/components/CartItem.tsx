import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import styled from 'styled-components';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProps = {
  id: number;
  quantity: number;
};

const ItemImg = styled.img`
  width: 125px;
  height: 75px;
  object-fit: cover
`;

const Quantity = styled.span`
  font-size: .65rem;
`;
const UnitPrice = styled.div`
  font-size: .75rem;
`;

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();

  const foundItem = storeItems.find((item) => item.id === id);
  if (!foundItem) return null;
  const { imgUrl, name, price } = foundItem;

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <ItemImg src={imgUrl} alt={name} />
      <div className='me-auto'>
        <div>
          {name}
          {quantity > 1 && (
            <>
              {' '}
              <Quantity className='text-muted'>x{quantity}</Quantity>
            </>
          )}
        </div>
        <UnitPrice className='text-muted'>{formatCurrency(price)}</UnitPrice>
      </div>
      <div>{formatCurrency(price * quantity)}</div>
      <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
