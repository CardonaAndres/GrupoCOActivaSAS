import '@/main/assets/css/index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from '@/main/configs/config';
import { HomePage } from './spa/pages/HomePage';

export const App = () => {
  return (
    <Router>

      <Routes>
        <Route path={router.home} element={<HomePage />} />
      </Routes>

    </Router>
  )
}

