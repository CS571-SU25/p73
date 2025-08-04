import React from 'react';
import { Card } from 'react-bootstrap';

export function AlbumCard({ album }) {
  return (
    <Card style={{ width: '8rem', marginBottom: '1rem' }} aria-label={`Album card for ${album.name}`}>
      <Card.Img
        variant="top"
        src={album.image}
        alt={`Album cover of ${album.name}`}
        style={{ height: '8rem', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: '0.9rem' }}>{album.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
