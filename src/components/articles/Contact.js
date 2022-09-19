import styled from "styled-components";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import StandardArticle from "../containers/StandardArticle";
import AccentBorder from "../containers/AccentBorder";

const Wrapper = styled.div`
  .contact-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .contact-header {
    text-align: center;
  }
  .social-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .social-link {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    font-size: 2rem;
    color: var(--color-neutral-wht);
    background: var(--color-primary-1);
    border-radius: 50%;
  }
  .social-link {
    color: var(--color-neutral-dk);
    text-decoration: none;
    width: 230px;
  }
  .social-link:hover {
    opacity: 70%;
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 1200px) {
    .social-container {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      width: 100%;
    }
  }
`;

const Contact = () => {
  return (
    <StandardArticle id="contact">
      <AccentBorder>
        <Wrapper>
          <div className="contact-flex">
            <header className="contact-header">
              <h2>Let's Connect</h2>
              <p>
                The best way to contact me and see the latest updates is to
                connect on any of the social media platforms below.
              </p>
            </header>
            <section className="social-container">
              <a
                href="https://www.facebook.com/christa.dev/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <div className="social-icon">
                  <FaFacebookF />
                </div>{" "}
                Join on Facebook
              </a>
              <a
                href="https://twitter.com/christa_dev"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <div className="social-icon">
                  <FaTwitter />
                </div>{" "}
                Follow on Twitter
              </a>
              <a
                href="https://github.com/christadejesus"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <div className="social-icon">
                  <FiGithub />
                </div>
                Connect on Github
              </a>
            </section>
          </div>
        </Wrapper>
      </AccentBorder>
    </StandardArticle>
  );
};

export default Contact;
