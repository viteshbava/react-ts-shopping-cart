import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { formatCurrency } from '../utilities/formatCurrency';

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
  /* quatity testing placeholder */
  const quantity = 1;
  /*  */
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
            <Button className='w-100'>+ Add To Cart</Button>
          ) : (
            <StyledDiv className='d-flex align-items-center flex-column'>
              <StyledDiv className='d-flex align-items-center justify-content-center'>
                <Button>-</Button>
                <div>
                  <span className='fs-3'>{quantity}</span> in cart
                </div>
                <Button>+</Button>
              </StyledDiv>
              <Button variant='danger' size='sm'>
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
