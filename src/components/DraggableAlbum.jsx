import { useDraggable } from '@dnd-kit/core';

export function DraggableAlbum({ album }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: album.id,
    data: { album },
  });

  return (
    <div ref={setNodeRef} {...attributes} {...listeners}>
      <img src={album.image} alt={`Album cover of ${album.name}`} width={100} />
      <p>{album.name}</p>
    </div>
  );
}
