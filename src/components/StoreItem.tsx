import { Card } from 'react-bootstrap';
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

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  return (
    <Card>
      <CardImg variant='top' src={imgUrl} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline'>
          <span className='fs-2'>{name}</span>
          <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
