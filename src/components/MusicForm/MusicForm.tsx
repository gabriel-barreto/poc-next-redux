import { randomBytes } from 'crypto';
import { useState, useRef } from 'react';

import { Music } from 'protocols';

import * as S from './styled';

type Props = {
  onSubmit: (music: Music) => void;
};

const INITIAL_STATE = { title: '', duration: 0, artist: '' };

export function MusicForm({ onSubmit }: Props) {
  const [music, setMusic] = useState({ ...INITIAL_STATE });
  const firstInputRef = useRef<HTMLInputElement>();

  function onInput({ target }) {
    if (!target) return;

    const { name, value } = target;
    setMusic((prev) => ({ ...prev, [name]: value }));
  }

  function $onSubmit(e) {
    e.preventDefault();

    const id = randomBytes(8).toString('hex');
    onSubmit({ ...music, id });
    setMusic({ ...INITIAL_STATE });

    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }

  return (
    <S.Form method="POST" name="music" onSubmit={$onSubmit}>
      <S.Fieldset>
        <S.Field
          ref={firstInputRef}
          value={music.title}
          placeholder="Título"
          type="text"
          name="title"
          onInput={onInput}
        />
        <S.Field
          value={music.duration}
          type="number"
          placeholder="Duração (em seg.)"
          name="duration"
          onInput={onInput}
        />
        <S.Field
          value={music.artist}
          placeholder="Artista"
          type="text"
          name="artist"
          onInput={onInput}
        />
      </S.Fieldset>
      <S.Button type="submit">Adicionar</S.Button>
    </S.Form>
  );
}
