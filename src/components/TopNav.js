import styled from "styled-components";
import { Link } from "react-router-dom";
import { SiFacebook, SiTwitter, SiGithub } from "react-icons/si";
import { RiMenuFill } from "react-icons/ri";

const NavWrapper = styled.div`
  padding: 0px 40px;
  height: 70px;
  font-size: 1.8rem;
  color: var(--neutral-lt);
  background: var(--neutral-black);
  border-bottom: 1px solid var(--neutral-lt);

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
    color: var(--color-neutral-dk);
    text-transform: lowercase;
  }
  .nav-link:hover {
    color: var(--primary-2);
  }
  .logo {
    display: block;
    line-height: 1;
    color: var(--neutral-lt);
    font-family: var(--font-standard);
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 0.05rem;
    font-weight: 600;
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
  .social-link:hover {
    color: var(--neutral-lt);
  }
  .menu-btn {
    display: none;
    font-size: 2.4rem;
    color: var(--neutral-lt);
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
      background: var(--neutral-black);
      width: 0;
      height: 0;
      opacity: 0;
      overflow: hidden;
    }
    .nav-link {
      padding: 10px;
      font-size: 2rem;
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
    }
    .social-link {
      font-size: 3rem;
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
          <a
            href="https://blog.christadejesus.com"
            className="nav-link"
            onClick={toggleNav}
          >
            Blog
          </a>
          <div className="social-container">
            <a
              href="https://www.facebook.com/christa.dev/"
              target="_blank"
              rel="noreferrer"
              class="social-link"
            >
              <SiFacebook />
            </a>
            <a
              href="https://twitter.com/christa_dev"
              target="_blank"
              rel="noreferrer"
              class="social-link"
            >
              <SiTwitter />
            </a>
            <a
              href="https://github.com/indychrista"
              target="_blank"
              rel="noreferrer"
              class="social-link"
            >
              <SiGithub />
            </a>
          </div>
        </div>
        <button class="btn menu-btn" id="menu-btn" onClick={toggleNav}>
          <RiMenuFill />
        </button>
      </nav>
    </NavWrapper>
  );
};

export default TopNav;
