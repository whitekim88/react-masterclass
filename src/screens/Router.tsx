import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import About from './About';
import Home from './Home';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
