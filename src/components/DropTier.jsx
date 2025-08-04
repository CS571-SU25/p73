import { useDroppable } from '@dnd-kit/core';
import { AlbumCard } from './AlbumCard';
import TierLabel from './TierLabel';

export function DropTier({ id, albums }) {
  const { setNodeRef, isOver } = useDroppable({ id });

//   return (
//     <div ref={setNodeRef} className="tier-column">
//       <h2>Tier {id}</h2>
//       {albums.map((album) => (
//         <AlbumCard key={album.id} album={album} />
//       ))}
//     </div>
//   );


  return (
    <div
      ref={setNodeRef}
      className="tier-column"
      style={{
        backgroundColor: isOver ? '#e0ffe0' : '#f7f7f7',
        border: '2px dashed #ccc',
        padding: '1rem',
        minHeight: '200px',
        borderRadius: '8px',
        transition: 'background-color 0.2s ease',
      }}
    >
      <TierLabel tier={id} />
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
}


