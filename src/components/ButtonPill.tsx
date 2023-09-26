import styled, { css } from 'styled-components';

export const ButtonPillStyles = css`
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(25%, 25%);
`;

const StyledButtonPill = styled.div`
  ${ButtonPillStyles}
`;

const ButtonPill = ({ children }) => {
  return (
    <StyledButtonPill className='rounded-circle bg-danger d-flex justify-content-center align-items-center'>
      {children}
    </StyledButtonPill>
  );
};

export default ButtonPill;
