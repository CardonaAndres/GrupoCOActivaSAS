import '@/main/assets/css/index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from '@/main/configs/config';
import { HomePage } from '@/spa/pages/HomePage';
import { WhatsappButton } from '@/main/components/WhastappButton';
import { ContactPage } from '@/spa/pages/ContactPage';
import { Footer } from '@/spa/components/Footer';
import { AboutUsPage } from './spa/pages/AboutUsPage';
import { ServicePage } from './spa/pages/ServicePage';
import { AlliesPage } from './spa/pages/AlliesPage';
import { MetaTags } from './main/components/MetaTags.tsx';
import { PrivacityPage } from './spa/pages/PrivacityPage.tsx';
import { FloatingContactButton } from './main/components/FloatingContactButton.tsx';
import { FAQPage } from './spa/pages/FAQPage.tsx';
import { SedePage } from './spa/pages/SedePage.tsx';
import { BlogPage } from './spa/pages/BlogPage.tsx';
import { BlogPostPage } from './spa/components/BlogPostPage.tsx';

export const App = () => {
  return (
    <>
      <MetaTags />
      <Router>
        <Routes>
          <Route path={router.home} element={<HomePage />} />
          <Route path={router.contact} element={<ContactPage />} />
          <Route path={router.about} element={<AboutUsPage />} />
          <Route path={router.services} element={<ServicePage />} />
          <Route path={router.allies} element={<AlliesPage />} />
          <Route path={router.privacity} element={<PrivacityPage />} />
          <Route path={router.FAQ} element={<FAQPage />} />

          <Route path={router.medellinUrlOne} element={<SedePage city="Medellín" />} />
          <Route path={router.sedeMedellin} element={<SedePage city="Medellín" />} />
          <Route path={router.bogotaUrlOne} element={<SedePage city="Bogotá" />} />
          <Route path={router.sedeBogota} element={<SedePage city="Bogotá" />} />

          <Route path={router.blogPage} element={<BlogPage />} />
          <Route path={router.blogPost} element={<BlogPostPage />} />

          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>

      <Footer />
      <WhatsappButton />
      <FloatingContactButton />
    </>
  )
}

