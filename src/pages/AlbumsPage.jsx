import React, { useState } from 'react';
import { initialAlbums } from '../utils/albumList';

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core';
import { Container, Row, Col } from 'react-bootstrap';

import { AlbumCard } from '../components/AlbumCard';
import { DraggableAlbum } from '../components/DraggableAlbum';
import { DropTier } from '../components/DropTier';
import SearchBar from '../components/SearchBar';
import ResetButton from '../components/ResetButton';


const tierLabels = ['S', 'A', 'B', 'C', 'E'];

export default function AlbumsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [tiers, setTiers] = useState({
    S: [],
    A: [],
    B: [],
    C: [],
    E: [],
  });
  const [draggingAlbum, setDraggingAlbum] = useState(null);

  const sensors = useSensors(useSensor(PointerSensor));

  const onDragStart = (event) => {
    const { active } = event;
    setDraggingAlbum(active.data.current.album);
  };

  const onDragEnd = (event) => {
    const { active, over } = event;
    console.log('Dragging onto:', over?.id); //

    if (!over || !tierLabels.includes(over.id)) return;

    const album = active.data.current.album;
    const fromTier = findTierOfAlbum(album.id);
    const toTier = over.id;

    if (fromTier === toTier) return;

    setTiers((prev) => {
      const newTiers = { ...prev };
      if (fromTier) {
        newTiers[fromTier] = newTiers[fromTier].filter((a) => a.id !== album.id);
      }
      newTiers[toTier] = [...newTiers[toTier], album];
      return newTiers;
    });

    setDraggingAlbum(null);
  };

  const findTierOfAlbum = (id) => {
    return tierLabels.find((tier) =>
      tiers[tier].some((album) => album.id === id)
    );
  };

  const handleReset = () => {
    setTiers({
      S: [],
      A: [],
      B: [],
      C: [],
      E: [],
    });
  };

  const albumsInTiers = new Set(
    Object.values(tiers).flat().map((album) => album.id)
  );

  const filteredPool = initialAlbums.filter(
    (album) =>
      !albumsInTiers.has(album.id) &&
      album.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      <div className="album-pool my-4 d-flex flex-wrap gap-3 justify-content-center">
        {filteredPool.map((album) => (
          <DraggableAlbum key={album.id} album={album} />
        ))}
        {filteredPool.length === 0 && (
          <p className="text-muted">No albums found or all are placed in tiers.</p>
        )}
      </div>

      <ResetButton onReset={handleReset} />

      <Row>
        {tierLabels.map((tier) => (
          <Col key={tier} md={4} className="mb-4">
            <DropTier id={tier} albums={tiers[tier]} />
          </Col>
        ))}
      </Row>

      <DragOverlay>
        {draggingAlbum && <AlbumCard album={draggingAlbum} />}
      </DragOverlay>
</DndContext>

  );
}
