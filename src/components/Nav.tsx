import { NavLink } from 'react-router';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about" end>
        About
      </NavLink>
      <NavLink to="/development" end>
        Development
      </NavLink>
      <NavLink to="/ux" end>
        UX
      </NavLink>
      <NavLink to="/blog" end>
        Blog
      </NavLink>
      <NavLink to="/contact" end>
        Contact
      </NavLink>
    </nav>
  );
};

export default Nav;
