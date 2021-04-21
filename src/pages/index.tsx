import { useState } from 'react';

import { MusicForm, Playlist } from 'components';

export default function Home() {
  const [items, setItems] = useState([]);

  function onNewMusicAdd(music) {
    setItems((prev) => [...prev, music]);
  }

  function removeMusicFromPlaylist(id) {
    const index = items.findIndex(({ id: _id }) => _id === id);
    if (index < 0) return;

    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  return (
    <div>
      <MusicForm onSubmit={onNewMusicAdd} />
      <Playlist items={items} onRemoveItem={removeMusicFromPlaylist} />
    </div>
  );
}
