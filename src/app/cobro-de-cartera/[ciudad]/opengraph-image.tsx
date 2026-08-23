import { cityLandingData } from '@/data/local-pages/city-landing.data';
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/global/seo/og-image';

export const alt = 'Cobro de cartera empresarial — Grupo Coactiva SAS';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return Object.keys(cityLandingData).map((ciudad) => ({ ciudad }));
}

export default async function CityOpengraphImage({
  params,
}: {
  params: Promise<{ ciudad: string }>;
}) {
  const { ciudad } = await params;
  const data = cityLandingData[ciudad];

  return renderOgImage({
    eyebrow: data?.hasOffice ? `Sede ${data.cityName}` : `Cobertura ${data?.cityRegion ?? 'Colombia'}`,
    title: `Cobro de cartera en ${data?.cityName ?? 'Colombia'}`,
    subtitle: 'Cobranza y recuperación de cartera empresarial · Pago por resultados',
  });
}
