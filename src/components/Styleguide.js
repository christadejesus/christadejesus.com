import MainContentWrapper from "./containers/MainContentWrapper";
import logo from "../assets/logo192.png";
import Button from "./buttons/Button";
import { FaArrowUp } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import { VscSmiley } from "react-icons/vsc";

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
  #styleguide-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    max-width: 600px;
    margin: 0 auto;
  }
  .styleguide-link {
    display: block;
    min-width: 150px;
    width: fit-content;
    border: none;
    color: inherit;
  }
  .styleguide-link:hover {
    color: var(--accent-1);
    opacity: initial;
    border: none;
  }
  .smiley-flex {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 20px;
  }
  .logo {
    border-radius: 5px;
    max-width: 100px;
  }
  .colors-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;
    margin-bottom: 20px;
  }
  .color-div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
  }
  #color-1 {
    background: var(--primary-1);
  }
  #color-2 {
    background: var(--primary-2);
  }
  #color-3 {
    background: var(--primary-3);
  }
  #color-4 {
    background: var(--primary-4);
  }
  #color-5 {
    background: var(--accent-1);
  }
  #color-6 {
    background: var(--accent-2);
  }
  #color-7 {
    background: var(--accent-3);
  }
`;

const Styleguide = () => {
  return (
    <Wrapper>
      <header className="content-area content-area-primary">
        <div className="heading-group">
          <span className="fancy fancy-large fancy-center">
            it's all about the
          </span>
          <h1 id="top">Styleguide</h1>
        </div>
        <aside>
          <nav id="styleguide-nav">
            <Link to="#about" className="styleguide-link">
              About
            </Link>
            <Link to="#logos" className="styleguide-link">
              Logos
            </Link>
            <Link to="#colors" className="styleguide-link">
              Colors
            </Link>
            <Link to="#typography" className="styleguide-link">
              Typography
            </Link>
            <Link to="#headings" className="styleguide-link">
              Headings
            </Link>
            <Link to="#buttons-and-links" className="styleguide-link">
              Buttons & Links
            </Link>
            <Link to="#text-areas" className="styleguide-link">
              Text Areas
            </Link>
            <Link to="#content-areas" className="styleguide-link">
              Content Areas
            </Link>
            <Link to="#code" className="styleguide-link">
              Code
            </Link>
            <Link to="#structure" className="styleguide-link">
              Structure
            </Link>
          </nav>
        </aside>
      </header>
      <MainContentWrapper>
        <section className="content-area">
          <div className="heading-group">
            <h2 id="about">About</h2>
            <div className="heading-accent"></div>
          </div>
          <p>
            If you want to dive into the colors, fonts, style and structure of
            this project, you're in the right place!
          </p>
          <p>
            You can use the links at the top of this page to go directly to any
            section or wander as you wish. If you really want to geek out with
            me and check out the code, I've got a button for that, too!
          </p>
          <div className="smiley-flex">
            Enjoy! <VscSmiley className="smiley-icon" />
          </div>
          <Button
            primary
            as="a"
            href="https://github.com/christadejesus/christadejesus.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit the Github Repo
          </Button>
        </section>
        <section className="content-area">
          <div className="heading-group">
            <h2 id="logos">Logos</h2>
            <div className="heading-accent"></div>
          </div>
          <img src={logo} alt="logo" className="logo" />
        </section>
        <section className="content-area">
          <div className="heading-group">
            <h2 id="colors">Colors</h2>
            <div className="heading-accent"></div>
          </div>
          <div className="colors-container">
            <div className="color-div" id="color-1">
              primary-1
            </div>
            <div className="color-div" id="color-2">
              primary-2
            </div>
            <div className="color-div" id="color-3">
              primary-3
            </div>
            <div className="color-div" id="color-4">
              primary-4
            </div>
          </div>
          <div className="colors-container">
            <div className="color-div" id="color-5">
              accent-1
            </div>
            <div className="color-div" id="color-6">
              accent-2
            </div>
            <div className="color-div" id="color-7">
              accent-3
            </div>
          </div>
        </section>
        <Link to="#top" className="back-to-top" id="typography">
          <FaArrowUp /> back to top
        </Link>

        <section className="content-area content-area-lt">
          <div className="heading-group">
            <h2>Typography</h2>
            <div className="heading-accent"></div>
          </div>
          <p
            style={{
              fontFamily: "'Brygada 1918', serif",
              textTransform: "uppercase",
            }}
          >
            Brygada 1918
          </p>
          <p>Open Sans</p>
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontWeight: "500",
              letterSpacing: ".2rem",
            }}
          >
            Bebas Neue
          </p>
          <p
            style={{
              fontFamily: "'Corinthia', cursive",
              fontSize: "3rem",
              fontStyle: "italic",
            }}
          >
            Corinthia
          </p>
        </section>
        <Link to="#top" className="back-to-top" id="headings">
          <FaArrowUp /> back to top
        </Link>

        <section className="content-area">
          <div className="heading-group">
            <h2>Headings</h2>
            <div className="heading-accent"></div>
          </div>
          <div className="heading-container">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <div className="heading-container">
              <span className="fancy">fancy text</span>
              <h2>Heading 2</h2>
            </div>
            <div className="heading-group">
              <span className="fancy fancy-large fancy-center">
                fancy centered
              </span>
              <h2>Heading 2</h2>
            </div>
            <div className="heading-group">
              <h2>Heading Accent</h2>
              <div className="heading-accent"></div>
            </div>
          </div>
        </section>
        <Link to="#top" className="back-to-top" id="buttons-and-links">
          <FaArrowUp /> back to top
        </Link>

        <section className="content-area content-area-lt">
          <h2>Buttons & Links</h2>
          <div className="buttons-div">
            <Button primary as="a" href="#" target="_blank" rel="noreferrer">
              Primary
            </Button>
            <Button secondary as="a" href="#" target="_blank" rel="noreferrer">
              Secondary
            </Button>
            <Button as="a" href="#" target="_blank" rel="noreferrer">
              Default
            </Button>
          </div>
          <p>
            <Link to="#top">I'm a link!</Link>
          </p>
        </section>
        <Link to="#top" className="back-to-top" id="text-areas">
          <FaArrowUp /> back to top
        </Link>

        <section className="content-area">
          <div className="heading-group">
            <h2>Text Areas</h2>
            <div className="heading-accent"></div>
          </div>
          <p>
            This is a paragraph with 18px Open Sans font with a font weight of
            400. Each paragraph has a margin of 20px on top and bottom and 0px
            left and right. The line height is 1.5 with a default letter
            spacing.
          </p>
          <p>
            This is a second paragraph. Commodo nulla incididunt mollit veniam
            mollit et officia enim reprehenderit labore. Anim ex mollit cillum
            dolore culpa consectetur nisi dolore dolore. Eiusmod dolor consequat
            Lorem incididunt Lorem.
          </p>
          <blockquote>
            I'm a blockquote with italic font, 5px solid left border, and a left
            padding of 10px. Line spacing is set to 1.5, equal to paragraph line
            spacing, for readability.
          </blockquote>
        </section>
        <Link to="#top" className="back-to-top" id="content-areas">
          <FaArrowUp /> back to top
        </Link>
        <section>
          <section className="content-area">
            <div className="heading-group">
              <h2>Content Areas</h2>
              <div className="heading-accent"></div>
            </div>
            Content Area
          </section>
          <section className="content-area content-area-lt">
            Content Area Light
          </section>
          <section className="content-area content-area-primary">
            Content Area Primary
          </section>
          <section className="content-area content-area-accent">
            Content Area Accent
          </section>
        </section>
        <Link to="#top" className="back-to-top" id="code">
          <FaArrowUp /> back to top
        </Link>

        <section className="content-area">
          <div className="heading-group">
            <h2>Code</h2>
            <div className="heading-accent"></div>
          </div>
          <code>&lt;p&gt;This is inline code.&lt;/p&gt;</code>
          <pre>
            <code>
              &lt;p&gt;This is a code block.&lt;/p&gt;
              <br />
              &lt;p&gt;This is a second line of code. The width of code blocks
              is set to 100% and overflow to scroll.&lt;/p&gt;
            </code>
          </pre>
        </section>
        <Link to="#top" className="back-to-top" id="structure">
          <FaArrowUp /> back to top
        </Link>

        <section className="content-area">
          <div className="heading-group">
            <h2>Notes on Structure</h2>
            <div className="heading-accent"></div>
          </div>
          <ul className="list-disc">
            <li>
              This website is built with <strong>React</strong> and{" "}
              <strong>Styled Components</strong> with additional CSS
              stylesheets.
            </li>
            <li>
              All <strong>main page components</strong> are routed through
              App.js and nestled between consistent TopNav and Footer
              components.
            </li>
            <li>
              Each page is wrapped in a <strong>Main Content Wrapper</strong>{" "}
              which is designed to keep the content horizontally centered on the
              page on all screen sizes. The Main Content Wrapper also controls
              the responsive left/right margins and maximum width.
            </li>
            <li>
              All <strong>section and article elements</strong> are set to a
              width of 100% of their parent element. Any container element,
              including sections and articles, can be assigned the class of{" "}
              <code>.content-area</code> which includes a width of 100% and
              responsive padding.
            </li>
            <li>
              <strong>Additional classes</strong> can be assigned to content
              areas to change the background while maintaining responsive
              padding. For examples, see{" "}
              <Link to="#content-areas">Content Areas</Link> above.
            </li>
          </ul>
        </section>
        <Link to="#top" className="back-to-top">
          <FaArrowUp /> back to top
        </Link>
      </MainContentWrapper>
    </Wrapper>
  );
};

export default Styleguide;
