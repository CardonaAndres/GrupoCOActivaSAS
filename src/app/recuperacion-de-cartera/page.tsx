import type { Metadata } from 'next';
import { serviceLandings } from '@/data/service-pages/service-landing.data';
import { ServiceLandingPage } from '@/components/service-pages/ServiceLandingPage';
import { buildServiceLandingMetadata } from '@/global/metadata/services/service-landing-metadata';

const data = serviceLandings['recuperacion-de-cartera'];

export const metadata: Metadata = buildServiceLandingMetadata('recuperacion-de-cartera');

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
