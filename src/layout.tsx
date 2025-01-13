import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import './index.css';

function Layout() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
