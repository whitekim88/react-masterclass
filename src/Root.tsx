import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Root(): JSX.Element {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
