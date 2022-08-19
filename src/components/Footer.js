import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  margin-top: 40px;
  font-size: 1.4rem;
  text-align: center;
  background: var(--color-neutral-mdlt);
  border-top: 1px solid var(--color-neutral-mdlt);

  .footer-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    max-width: 400px;
  }
  .footer-links a {
    text-transform: lowercase;
    text-decoration: none;
    color: var(--color-neutral-dk);
  }
  .heart {
    color: var(--color-accent-2);
    font-size: 1.8rem;
  }
  .coffee {
    color: var(--color-primary-1);
    font-size: 1.8rem;
  }
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-links">
        <Link to="/" className="footer-link">
          Home
        </Link>

        <Link to="/projects" className="footer-link">
          Projects
        </Link>
        <Link to="/blog" className="footer-links">
          Blog
        </Link>
        <Link to="/about" className="footer-link">
          about
        </Link>
        <Link to="/contact" className="footer-link">
          Contact
        </Link>
      </div>
      <p>
        Made with <FaHeart className="heart" /> and{" "}
        <SiBuymeacoffee className="coffee" /> by Christa DeJesus.
      </p>
    </FooterWrapper>
  );
};

export default Footer;
