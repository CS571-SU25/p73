import React from 'react';
import { Form } from 'react-bootstrap';

export default function SearchBar({ value, onChange }) {
  return (
    <Form.Group controlId="albumSearch">
      <Form.Label visuallyHidden>Search albums</Form.Label>
      <Form.Control
        type="text"
        placeholder="Search albums..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search albums by name"
      />
    </Form.Group>
  );
}
