import styled from "styled-components";
import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import { RiMenuFill } from "react-icons/ri";
import logo from "../assets/logo192.png";

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0px 40px;
  height: 70px;
  font-size: 1.8rem;
  background: var(--neutral-lt);
  z-index: 1000;

  a {
    border: none;
  }
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
  .nav-link {
    color: var(--primary-1);
    text-transform: lowercase;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .logo-img {
    max-width: 50px;
    border-radius: 3px;
  }
  .logo-name span {
    display: block;
    line-height: 1;
    color: var(--primary-1);
    font-family: var(--font-sans-alt);
    font-size: 2rem;
    letter-spacing: 0.2rem;
    font-weight: 400;
  }
  .social-container {
    display: flex;
    gap: 10px;
    margin: 0 auto;
  }
  .social-link {
    font-size: 2rem;
    color: var(--primary-2);
  }
  .menu-btn {
    display: none;
    font-size: 2.6rem;
    font-weight: 600;
    color: var(--primary-1);
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
      top: 70px;
      flex-direction: column;
      text-align: center;
      padding: 40px 10px;
      background: var(--primary-1);
      width: 0;
      height: 0;
      opacity: 0;
      overflow: hidden;
    }
    .nav-link {
      padding: 10px;
      font-size: 2rem;
      color: var(--neutral-white);
    }
    .active {
      width: 100%;
      height: 100vh;
      opacity: initial;
    }
    .icon-active {
      color: var(--primary-2);
    }
    .social-container {
      gap: 20px;
      padding-top: 20px;
    }
    .social-link {
      font-size: 3rem;
      color: var(--neutral-white);
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
            <img src={logo} alt="logo" className="logo-img" />
            <div className="logo-name">
              <span className="logo-first">Christa</span>
              <span className="logo-last">DeJesus</span>
            </div>
          </div>
        </Link>
        <div className="nav-links" id="nav-links">
          <Link to="/" className="nav-link" onClick={toggleNav}>
            Home
          </Link>
          <Link to="/projects" className="nav-link" onClick={toggleNav}>
            Projects
          </Link>
          <Link to="/styleguide" className="nav-link" onClick={toggleNav}>
            Styleguide
          </Link>
          {/*<a href="/" className="nav-link" onClick={toggleNav}>
            Blog
  </a>*/}
          <div className="social-container">
            <a
              href="https://twitter.com/christa_dev"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <SiTwitter />
            </a>
            <a
              href="https://linkedin.com/in/christa-dejesus/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://github.com/christadejesus"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <SiGithub />
            </a>
          </div>
        </div>
        <button className="btn menu-btn" id="menu-btn" onClick={toggleNav}>
          <RiMenuFill />
        </button>
      </nav>
    </NavWrapper>
  );
};

export default TopNav;
