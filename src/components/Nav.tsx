import { NavLink } from "react-router"

const Nav = () => {
    return (
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about" end>About</NavLink>
        </nav>
    )
}

export default Nav