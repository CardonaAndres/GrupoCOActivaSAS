import '@/main/assets/css/index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from '@/main/configs/config';
import { HomePage } from '@/spa/pages/HomePage';
import { WhatsappButton } from '@/main/components/WhastappButton';
import { ContactPage } from '@/spa/pages/ContactPage';
import { Footer } from '@/spa/components/Footer';

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={router.home} element={<HomePage />} />
          <Route path={router.contact} element={<ContactPage />} />
        </Routes>
      </Router>

      <Footer />
      <WhatsappButton />
    </>
  )
}

