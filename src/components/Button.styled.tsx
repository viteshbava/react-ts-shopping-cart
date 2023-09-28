import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { ReactNode } from 'react';

const CustomStyledButton = styled(Button)`
  width: 3rem;
  height: 3rem;
  position: relative;
`;

interface StyledButtonProps {
  children: ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  return (
    <CustomStyledButton variant='outline-primary' className='rounded-circle'>
      {children}
    </CustomStyledButton>
  );
};

export default StyledButton;
