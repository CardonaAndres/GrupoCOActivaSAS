import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cityLandingData } from '@/data/local-pages/city-landing.data';
import { CityLandingPage } from '@/components/local-pages/CityLandingPage';
import { buildCityMetadata } from '@/global/metadata/local/city-metadata';

export async function generateStaticParams() {
  return Object.keys(cityLandingData).map((ciudad) => ({ ciudad }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ciudad: string }>;
}): Promise<Metadata> {
  const { ciudad } = await params;
  return buildCityMetadata(ciudad);
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ ciudad: string }>;
}) {
  const { ciudad } = await params;
  const data = cityLandingData[ciudad];

  if (!data) notFound();

  return <CityLandingPage data={data} />;
}
