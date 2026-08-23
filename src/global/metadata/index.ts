// Export common metadata
export { ContactMetadata } from "./common/contact-metadata";
export { AboutUsMetadata } from "./common/about-us-metadata";
export { PrivacyMetadata } from "./common/privacy-metadata";
export {
  RootLayoutMetada,
  RootLayoutViewport,
  schemaOrgJSONLD,
} from "./common/root-layout-metada";

// Export services metadata
export { InsolvenciaMetadata } from './services/insolvencia-metadata';
export { CobroCarteraMetadata } from "./services/cobro-cartera-metadata";
export { buildServiceLandingMetadata } from "./services/service-landing-metadata";

// Export local metadata
export { buildCityMetadata } from "./local/city-metadata";

// Export blog metadata
export { BlogMetadata } from "./blog/blog-metadata";
export { generateBlogSlugMetadata } from "./blog/slug-metadata";
