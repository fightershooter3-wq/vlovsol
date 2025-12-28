import React from 'react';

export default function Page() {
  // Guard against server-side access to `window` to avoid SSR build errors (e.g. Vercel)
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  // Example layout that uses the guarded isMobile variable for responsive styling
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '16px' : '48px',
        background: '#f7f7f7',
      }}
    >
      <div
        style={{
          width: isMobile ? '100%' : '800px',
          background: '#fff',
          borderRadius: 8,
          padding: isMobile ? '16px' : '32px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
        }}
      >
        <h1 style={{ fontSize: isMobile ? 20 : 28, margin: 0 }}>Welcome to Vlovsol</h1>
        <p style={{ marginTop: 12, color: '#444' }}>
          This page guards access to window so it can safely build on the server.
        </p>
      </div>
    </main>
  );
}
