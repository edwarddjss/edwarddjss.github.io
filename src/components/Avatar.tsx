'use client';

import { useState } from 'react';

// Shows the photo at /me.png. If it ever fails to load, falls back to a clean
// monogram so nothing looks broken.
export function Avatar({ src = '/me.png', monogram }: { src?: string; monogram: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="avatar">
      <div className="avatar-fallback" aria-hidden={!failed}>
        {monogram}
      </div>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" onError={() => setFailed(true)} loading="eager" />
      )}
    </div>
  );
}
