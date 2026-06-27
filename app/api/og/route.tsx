import { ImageResponse } from 'next/og'; // Handles HTML-to-image conversions

export const runtime = 'edge'; // Enforces ultra-fast edge execution

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'white',
          background: 'linear-gradient(to bottom right, #000000, #111111)',
          width: '100%',
          height: '100%',
          padding: '50px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <span style={{ fontSize: 35, color: '#FFD700', marginBottom: 20 }}>WEB DESIGN KING</span>
        <span>High Performance Studio</span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
