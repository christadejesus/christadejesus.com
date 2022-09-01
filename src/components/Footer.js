import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHeart, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiBuymeacoffee } from "react-icons/si";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px 20px;
  margin-top: 40px;
  text-align: center;
  font-size: 1.6rem;
  color: var(--neutral-mdlt);
  background: var(--neutral-black);
  h2 {
    color: var(--neutral-lt);
  }
  .footer-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    max-width: 400px;
    padding: 40px 20px 0 20px;
    margin: 40px 0 20px 0;
    border-top: 1px solid var(--neutral-dk);
  }
  .footer-links a {
    text-transform: lowercase;
    text-decoration: none;
    color: var(--neutral-mdlt);
  }
  .footer-links a:hover {
    color: var(--primary-2);
  }
  .social-container {
    display: flex;
    gap: 20px;
  }
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background: var(--neutral-lt);
    color: var(--neutral-black);
    padding: 8px;
    border-radius: 1px;
  }
  .social-link:hover {
    background: var(--primary-2);
    transform: translateY(-5px);
    transition: 300ms ease;
  }
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Let's Connect</h2>
      <div className="social-container">
        <a
          href="https://www.facebook.com/christa.dev/"
          target="_blank"
          rel="noreferrer"
          class="social-link"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/christa_dev"
          target="_blank"
          rel="noreferrer"
          class="social-link"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/indychrista"
          target="_blank"
          rel="noreferrer"
          class="social-link"
        >
          <FiGithub />
        </a>
      </div>
      <div className="footer-links">
        <Link to="/" className="footer-link">
          Home
        </Link>

        <Link to="/projects" className="footer-link">
          Projects
        </Link>
        <a
          href="https://christadejesusblog.gatsbyjs.io/"
          className="footer-link"
        >
          Blog
        </a>
      </div>
      <p>
        Made with <FaHeart className="heart-icon" /> and{" "}
        <SiBuymeacoffee className="coffee-icon" /> by Christa DeJesus.
      </p>
    </FooterWrapper>
  );
};

export default Footer;
