import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { RiMenuFill } from "react-icons/ri";

const NavWrapper = styled.div`
  padding: 0px 40px;
  height: 60px;
  font-size: 1.8rem;
  background: var(--color-neutral-mdlt);
  border-bottom: 1px solid var(--color-neutral-lt);

  .nav-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .nav-links {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .nav-links a {
    color: var(--color-neutral-dk);
    text-transform: lowercase;
  }
  .nav-links a:hover {
    opacity: 80%;
  }
  .logo {
    display: block;
    line-height: 1;
    color: var(--color-neutral-dk);
    font-family: var(--font-accent);
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-weight: 500;
  }

  .menu-btn {
    display: none;
    font-size: 2rem;
    color: var(--color-neutral-dk);
  }

  /* MEDIA QUERIES */
  @media screen and (max-width: 750px) {
    padding: 0px 20px;
    .menu-btn {
      display: block;
    }
    .nav-links {
      position: absolute;
      right: 0px;
      top: 60px;
      flex-direction: column;
      text-align: center;
      padding: 40px 10px;
      background: linear-gradient(
        var(--color-neutral-lt),
        var(--color-neutral-mdlt)
      );
      border-bottom: 1px solid var(--color-neutral-lt);
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
      width: 0;
      height: 0;
      opacity: 0;
      overflow: hidden;
    }
    .nav-links a {
    }
    .nav-links a:hover {
      opacity: initial;
    }
    .nav-link {
      padding: 10px;
    }
    .nav-link:hover {
      background: var(--color-neutral-wht);
    }
    .active {
      width: 100%;
      height: initial;
      opacity: initial;
    }
    .icon-active {
      opacity: 50%;
    }
  }
`;

function toggleNav() {
  const navLinks = document.getElementById("nav-links");
  const menuBtn = document.getElementById("menu-btn");
  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("icon-active");
}

const TopNav = () => {
  return (
    <NavWrapper>
      <nav className="nav-container">
        <Link to="/" onClick={toggleNav}>
          <div className="logo-container">
            <span className="logo logo-first">Christa</span>
            <span className="logo logo-last">DeJesus</span>
          </div>
        </Link>
        <div className="nav-links" id="nav-links">
          <Link to="/" className="nav-link" onClick={toggleNav}>
            Home
          </Link>
          <Link to="/projects" className="nav-link" onClick={toggleNav}>
            Projects
          </Link>
          <Link to="/blog" className="nav-link" onClick={toggleNav}>
            Blog
          </Link>
          <Link to="/about" className="nav-link" onClick={toggleNav}>
            About
          </Link>
          <HashLink to="#contact" className="nav-link" onClick={toggleNav}>
            Contact
          </HashLink>
        </div>
        <button class="btn menu-btn" id="menu-btn" onClick={toggleNav}>
          <RiMenuFill />
        </button>
      </nav>
    </NavWrapper>
  );
};

export default TopNav;
