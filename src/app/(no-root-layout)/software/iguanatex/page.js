'use client';

import React from 'react';
import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    window.location.replace('https://www.jonathanleroux.org/software/iguanatex/');
  }, []);

  // Render a fallback message for users with JS disabled
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>
        IguanaTex has moved permanently to 
        <a href="https://www.jonathanleroux.org/software/iguanatex/">this location</a>.
      </p>
      <p>Redirecting you automatically...</p>
    </div>
  );
}
