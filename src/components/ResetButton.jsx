import React from 'react';
import { Button } from 'react-bootstrap';

export default function ResetButton({ onReset }) {
  return (
    <div className="text-center my-3">
      <Button variant="danger" onClick={onReset}>
        Reset All Tiers
      </Button>
    </div>
  );
}
