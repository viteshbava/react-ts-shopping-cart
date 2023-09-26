import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const CustomStyledButton = styled(Button)`
  width: 3rem;
  height: 3rem;
  position: relative;
`;

const StyledButton = ({ children }) => {
  return (
    <CustomStyledButton variant='outline-primary' className='rounded-circle'>
      {children}
    </CustomStyledButton>
  );
};

export default StyledButton;
