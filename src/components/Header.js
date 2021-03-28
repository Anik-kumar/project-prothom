import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header>
      <nav>
        <Link to="/" className="header-link">Home</Link>
        <Link to="/fruits" className="header-link">Fruits</Link>
        <Link to="/about" className="header-link">About</Link>
        <Link to="/contact" className="header-link">Contact</Link>
      </nav>
    </header>
  )
}

export default Header;