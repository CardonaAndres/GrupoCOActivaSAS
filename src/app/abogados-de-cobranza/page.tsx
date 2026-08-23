import type { Metadata } from 'next';
import { serviceLandings } from '@/data/service-pages/service-landing.data';
import { ServiceLandingPage } from '@/components/service-pages/ServiceLandingPage';
import { buildServiceLandingMetadata } from '@/global/metadata/services/service-landing-metadata';

const data = serviceLandings['abogados-de-cobranza'];

export const metadata: Metadata = buildServiceLandingMetadata('abogados-de-cobranza');

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
