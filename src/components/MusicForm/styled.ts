import styled from 'styled-components';

export const Form = styled.form`
  align-items: center;
  display: flex;
  padding: 1.6rem;
  width: 100%;
`;

export const Fieldset = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 0.8rem;
  margin: 0 1.6rem 0 0;
  max-width: 64rem;
`;

export const Field = styled.input`
  box-sizing: border-box;
  border: 0.1rem solid ${({ theme }) => theme.colors.dark.alpha(0.4)};
  color: ${({ theme }) => theme.colors.dark.alpha(0.8)};
  border-radius: 0.4rem;
  font-family: sans-serif;
  font-size: 1.6rem;
  height: 4.8rem;
  outline: 0;
  padding: 0.8rem 1.6rem;
  transition: border-color 400ms;
  width: 100%;
  will-change: border-color;

  ::placeholder {
    color: ${({ theme }) => theme.colors.dark.alpha(0.4)};
    transition: color 400ms;
    will-change: color;
  }

  :focus {
    border-color: ${({ theme }) => theme.colors.primary} !important;
  }

  :hover {
    border-color: ${({ theme }) => theme.colors.primaryLight};
    ::placeholder {
      color: ${({ theme }) => theme.colors.dark.alpha(0.64)};
    }
  }
`;

export const Button = styled.button.attrs({
  type: 'submit',
})`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.4rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: none;
  box-sizing: border-box;
  color: white;
  display: flex;
  font-weight: 600;
  height: 4.8rem;
  justify-content: center;
  padding: 0.8rem 32px;
  text-transform: uppercase;
`;
