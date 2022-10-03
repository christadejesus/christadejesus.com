import styled from "styled-components";
import { Link } from "react-router-dom";
import { VscSmiley } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiBuymeacoffee } from "react-icons/si";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  font-size: 1.6rem;
  color: var(--neutral-dk);
  background: var(--neutral-lt);

  .footer-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    max-width: 400px;
    padding: 40px 20px 0 20px;
    margin: 40px 0 20px 0;
    border-top: 1px solid var(--neutral-md);
  }
  .footer-links a {
    text-transform: lowercase;
    text-decoration: none;
    color: var(--neutral-dk);
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
    background: var(--primary-1);
    color: var(--neutral-lt);
    padding: 8px;
    border-radius: 2px;
  }
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Let's Connect</h2>
      <div className="social-container">
        <a
          href="https://linkedin.com/in/christa-dejesus/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/christadejesus"
          target="_blank"
          rel="noreferrer"
          className="social-link"
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
        <Link to="/styleguide" className="footer-link">
          Styleguide
        </Link>
        {/*<a href="/" className="footer-link">
          Blog
  </a>*/}
      </div>
      <p>
        Made with <VscSmiley className="smiley-icon" /> and{" "}
        <SiBuymeacoffee className="coffee-icon" /> by Christa DeJesus.
      </p>
    </FooterWrapper>
  );
};

export default Footer;
