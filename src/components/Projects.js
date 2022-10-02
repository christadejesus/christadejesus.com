import MainContentWrapper from "./containers/MainContentWrapper";
import FreeCodeCamp from "./articles/FreeCodeCamp";
import { SiFreecodecamp, SiFrontendmentor } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";
import Button from "./buttons/Button";
import FrontendMentor from "./articles/FrontendMentor";
import { HashLink as Link } from "react-router-hash-link";

const Wrapper = styled.div`
  header {
    margin-top: 70px;
  }
  header .heading-group {
    margin: 0 auto 40px auto;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  header h1 {
    margin-bottom: 20px;
  }
  #projects-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    max-width: 600px;
    margin: 0 auto;
  }
  .projects-link {
    display: block;
    min-width: 150px;
    width: fit-content;
    border: none;
    color: inherit;
  }
  .projects-link:hover {
    color: var(--accent-1);
    opacity: initial;
    border: none;
  }
  .btn-icon {
    font-size: 2rem;
    line-height: 0rem;
  }
  .btns-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin: 40px 0px;
  }
  h2 {
    text-align: center;
  }
`;
const Projects = () => {
  return (
    <Wrapper>
      <header className="content-area content-area-primary">
        <div className="heading-group">
          <span className="fancy fancy-large fancy-center">my recent</span>
          <h1 id="top">Projects</h1>
        </div>
        <aside>
          <nav id="projects-nav">
            <Link to="#landing-pages" className="projects-link">
              Landing Pages
            </Link>
            <Link to="#components" className="projects-link">
              Components
            </Link>
            <Link to="#low-code" className="projects-link">
              No/Low-Code
            </Link>
            <Link to="#challenges" className="projects-link">
              Challenges
            </Link>
            <Link to="#blogs" className="projects-link">
              Blogs
            </Link>
            <Link to="#design" className="projects-link">
              Design
            </Link>
          </nav>
        </aside>
      </header>
      <MainContentWrapper>
        <article>
          <section className="content-area content-area-lt">
            <h2>Challenge Inspired Projects</h2>
            <p>
              I love a good challenge! These are projects I've submitted for
              certifications, courses, and challenges, as well as variations of
              my original submissions. Click any image to see the live demo or
              connect with my profiles on the platforms:
            </p>
            <div className="btns-container">
              <Button
                primary
                as="a"
                href="https://www.frontendmentor.io/profile/indychrista"
                target="_blank"
                rel="noreferrer"
              >
                <SiFrontendmentor className="btn-icon" />
                Frontend Mentor
              </Button>
              <Button
                primary
                as="a"
                href="https://www.freecodecamp.org/christadejesus"
                target="_blank"
                rel="noreferrer"
              >
                <SiFreecodecamp className="btn-icon" />
                freeCodeCamp
              </Button>
            </div>
          </section>
          <FrontendMentor />
          <Link to="#top" className="back-to-top" id="freecodecamp">
            <FaArrowUp /> back to top
          </Link>
          <FreeCodeCamp />
        </article>
        <Link to="#top" className="back-to-top" id="landing-pages">
          <FaArrowUp /> back to top
        </Link>
        <section className="content-area content-area-lt">
          <div>
            <h2>Landing Pages</h2>
            <p>Coming soon!</p>
          </div>
        </section>
        <Link to="#top" className="back-to-top" id="components">
          <FaArrowUp /> back to top
        </Link>
        <section className="content-area content-area-lt">
          <div>
            <h2>Components</h2>
            <p>Coming soon!</p>
          </div>
        </section>
        <Link to="#top" className="back-to-top" id="low-code">
          <FaArrowUp /> back to top
        </Link>
        <section className="content-area content-area-lt">
          <div>
            <h2>No-Code/Low-Code</h2>
          </div>
        </section>
        <Link to="#top" className="back-to-top" id="blogs">
          <FaArrowUp /> back to top
        </Link>

        <section className="content-area content-area-lt">
          <div>
            <h2>Blogs</h2>
          </div>
        </section>
        <Link to="#top" className="back-to-top" id="design">
          <FaArrowUp /> back to top
        </Link>

        <section className="content-area content-area-lt">
          <div>
            <h2>Design</h2>
          </div>
        </section>
        <Link to="#top" className="back-to-top">
          <FaArrowUp /> back to top
        </Link>
      </MainContentWrapper>
    </Wrapper>
  );
};

export default Projects;
