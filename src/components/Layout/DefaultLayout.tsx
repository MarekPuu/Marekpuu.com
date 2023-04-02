import './Layout.css';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import { logPageView } from '../../utils/analytics';

const DefaultLayout = () => {
  const location = useLocation();
  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <div className="default_layout_container">
      <div className="default_layout_outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
