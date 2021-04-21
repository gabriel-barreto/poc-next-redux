import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light.alpha(0.64)};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: 2.4rem;
  margin: 0 1.6rem;
  width: 64rem;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RemoveButton = styled.button.attrs({
  type: 'button',
})`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  color: white;
  height: 4rem;
  width: 4rem;
`;

export const Item = styled.li`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  :not(:first-of-type) {
    border-top: 1px solid ${({ theme }) => theme.colors.dark.alpha(0.08)};
    padding: 1.6rem 0 0 0;
    margin: 1.6rem 0 0 0;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

export const SecondaryInfosWrapper = styled.span`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const SecondaryInfo = styled.p`
  color: ${({ theme }) => theme.colors.dark.alpha(0.48)};
  font-size: 1.4rem;
`;

export const Separator = styled.span`
  color: ${({ theme }) => theme.colors.dark.alpha(0.24)};
  font-size: 1.2rem;
  margin: 0 0.4rem;
`;
