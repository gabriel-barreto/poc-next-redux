import { Music } from 'protocols';

import * as S from './styled';

type Props = {
  items: Music[];
  onRemoveItem: (id) => void;
};

export function Playlist({ items, onRemoveItem }: Props) {
  if (!items.length) return null;
  return (
    <S.Wrapper>
      <S.List>
        {items.map(({ artist, duration, id, title }) => (
          <S.Item key={id}>
            <S.ItemContainer>
              <S.Title>{title}</S.Title>
              <S.SecondaryInfosWrapper>
                <S.SecondaryInfo>{artist}</S.SecondaryInfo>
                <S.Separator>-</S.Separator>
                <S.SecondaryInfo>{duration} seg(s).</S.SecondaryInfo>
              </S.SecondaryInfosWrapper>
            </S.ItemContainer>
            <S.RemoveButton onClick={() => onRemoveItem(id)}>✘</S.RemoveButton>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  );
}
