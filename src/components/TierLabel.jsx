import React from 'react';

export default function TierLabel({ tier }) {
  const emojiMap = {
    S: '🌟',
    A: '🔥',
    B: '👍',
    C: '😐',
    E: '💀',
  };

  return (
    <h2>
      Tier {tier} {emojiMap[tier]}
    </h2>
  );
}
