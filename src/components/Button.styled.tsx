import styled from 'styled-components';
import { Button, ButtonProps } from 'react-bootstrap';
import { ReactNode } from 'react';

const CustomStyledButton = styled(Button).attrs<ButtonProps>(() => ({
  variant: 'outline-primary',
  className: 'rounded-circle',
}))`
  width: 3rem;
  height: 3rem;
  position: relative;
`;

interface StyledButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({ onClick, children }) => {
  return <CustomStyledButton onClick={onClick}>{children}</CustomStyledButton>;
};

export default StyledButton;
