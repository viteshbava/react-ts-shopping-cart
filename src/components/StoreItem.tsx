import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const CardImg = styled(Card.Img)`
  height: 200px;
  object-fit: cover
`;

const StyledDiv = styled.div`
  gap: .5rem;
`;

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className='h-100'>
      <CardImg variant='top' src={imgUrl} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline'>
          <span className='fs-2'>{name}</span>
          <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
        </Card.Title>
        <div className='mt-auto'>
          {quantity === 0 ? (
            <Button onClick={() => increaseCartQuantity(id)} className='w-100'>
              + Add To Cart
            </Button>
          ) : (
            <StyledDiv className='d-flex align-items-center flex-column'>
              <StyledDiv className='d-flex align-items-center justify-content-center'>
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className='fs-3'>{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </StyledDiv>
              <Button onClick={() => removeFromCart(id)} variant='danger' size='sm'>
                Remove
              </Button>
            </StyledDiv>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
