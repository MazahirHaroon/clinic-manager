import { Outlet } from 'react-router';

import Navbar from '../../components/ClinicUI/Navbar';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Layout;
