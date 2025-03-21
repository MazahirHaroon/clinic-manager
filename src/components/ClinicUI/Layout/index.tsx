import { Outlet } from 'react-router';

import Navbar from './Navbar';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Layout;
