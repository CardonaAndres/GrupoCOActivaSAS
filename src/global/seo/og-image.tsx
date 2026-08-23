import { ImageResponse } from 'next/og';

/**
 * Plantilla de imagen social propia (1200x630) servida desde el dominio.
 *
 * Puntos B3, B4 y B5 del diagnóstico: hasta ahora las 8 páginas comerciales no
 * declaraban imagen social y los 23 artículos apuntaban a fotografías de banco
 * alojadas en un CDN externo. Con esta plantilla cada URL genera su propia
 * tarjeta, con identidad de marca y bajo control técnico propio.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

interface OgImageOptions {
  /** Línea superior: categoría, ciudad o sección. */
  eyebrow?: string;
  /** Titular principal de la tarjeta. */
  title: string;
  /** Línea inferior de apoyo. */
  subtitle?: string;
}

export const renderOgImage = ({ eyebrow, title, subtitle }: OgImageOptions) =>
  new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          backgroundColor: '#083344',
          backgroundImage:
            'linear-gradient(135deg, #083344 0%, #155e75 55%, #0e7490 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: 26,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#a5f3fc',
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: 14,
                height: 44,
                backgroundColor: '#22d3ee',
                borderRadius: 999,
                display: 'flex',
              }}
            />
            Grupo Coactiva SAS
          </div>
          {eyebrow ? (
            <div style={{ fontSize: 26, color: '#67e8f9', display: 'flex' }}>
              {eyebrow}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: title.length > 60 ? 60 : 72,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: '960px',
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '2px solid rgba(165, 243, 252, 0.35)',
            paddingTop: '28px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              color: '#cffafe',
              maxWidth: '680px',
            }}
          >
            {subtitle ?? 'Cobro y recuperación de cartera empresarial en Colombia'}
          </div>
          <div style={{ display: 'flex', fontSize: 24, color: '#a5f3fc' }}>
            grupocoactivasas.com
          </div>
        </div>
      </div>
    ),
    OG_SIZE
  );
