import authorImg from "../../assets/Christa_500x500.png";
import styled from "styled-components";
import {
  SiGraphql,
  SiMarkdown,
  SiGatsby,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFigma,
  SiInkscape,
  SiAdobephotoshop,
  SiVisualstudiocode,
  SiGithub,
  SiStyledcomponents,
} from "react-icons/si";
import Button from "../buttons/Button";

const Wrapper = styled.article`
  h3 {
    text-transform: uppercase;
  }
  .about-flex {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    border-top: 1px solid var(--neutral-mdlt);
    padding-top: 40px;
  }
  .about-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid var(--color-neutral-mdlt);
    padding: 0px;
  }
  h2 {
    text-align: center;
  }
  h3 {
    font-family: var(--font-sans-alt);
    letter-spacing: 0.2rem;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .more {
    display: none;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    background: var(--neutral-lt);
    border-radius: 5px;
    padding: 40px 20px;
    margin: 40px 0px;
  }
  .more .heading-group {
    text-align: center;
    width: 100%;
  }
  .more .divider {
    margin: 0px auto;
  }
  .tech-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-evenly;
    gap: 30px 15px;
    margin: 40px auto;
  }
  .tech-list li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    text-align: center;
    width: 100px;
    font-size: 1.4rem;
    color: var(--primary-1);
  }
  .tech-icon {
    font-size: 3rem;
  }
  .less-btn {
    margin: 0px auto;
  }
  .open {
    display: flex;
  }
  .btn-hidden {
    display: none;
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 900px) {
    .about-flex {
      flex-direction: row;
      align-items: center;
      margin: 0 auto;
    }
    .more {
      margin-top: 40px;
      margin: 40px auto 0 auto;
      padding: 40px;
    }
  }
`;

function toggleMore() {
  const more = document.getElementById("more");
  const moreBtn = document.getElementById("more-btn");
  more.classList.toggle("open");
  moreBtn.classList.toggle("btn-hidden");
}

const AboutPreview = (props) => {
  return (
    <Wrapper className="content-area">
      <div className="about-flex">
        <img src={authorImg} alt="Christa DeJesus" className="about-img" />
        <div className="about-text">
          <div className="heading-container">
            <span className="fancy fancy-center">get to know</span>
            <h2>Christa DeJesus</h2>
          </div>
          <p>
            At the start of 2021, I set out to learn <em>a little code</em> to
            curb my frustration with bugs in my no-code website. After those
            first few courses, I was hooked on code and never looked back!
          </p>
          <Button
            primary
            className="more-btn"
            id="more-btn"
            onClick={toggleMore}
          >
            read more
          </Button>
        </div>
      </div>
      <div className="more" id="more">
        <section id="news">
          <div className="heading-group">
            <h3>My Latest News</h3>
            <div className="divider"></div>
          </div>
          <div>
            <p>
              As of October 2022, I am officially enrolled in a 7-month software
              development training program and on my way to earning my Full
              Stack Web Development Certification. I'm so excited for this new
              adventure and look forward to sharing updates soon!
            </p>
            <p>
              Want to see my current certifications and get the latest updates
              on my training and experience? Let's connect on{" "}
              <a
                href="https://www.linkedin.com/in/christa-dejesus"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </section>
        <section id="fav-tools">
          <div className="heading-group">
            <h3>My Favorite Tools</h3>
            <div className="divider"></div>
          </div>
          <ul className="tech-list">
            <li>
              <SiHtml5 className="tech-icon" />
              HTML
            </li>
            <li>
              <SiCss3 className="tech-icon" />
              CSS
            </li>
            <li>
              <SiJavascript className="tech-icon" />
              JS
            </li>
            <li>
              <SiReact className="tech-icon" />
              React
            </li>
            <li>
              <SiVisualstudiocode className="tech-icon" /> vsCode
            </li>
            <li>
              <SiGithub className="tech-icon" /> Github
            </li>
            <li>
              <SiFigma className="tech-icon" /> Figma
            </li>
            <li>
              <SiInkscape className="tech-icon" />
              Inkscape
            </li>
            <li>
              <SiAdobephotoshop className="tech-icon" /> PS
            </li>
            <li>
              <SiStyledcomponents className="tech-icon" />
              Styled Components
            </li>
          </ul>
        </section>
        <section id="other-tools">
          <div className="heading-group">
            <h3>Other Tools I Use</h3>
            <div className="divider"></div>
          </div>
          <ul className="tech-list">
            <li>
              <SiMarkdown className="tech-icon" /> Markdown
            </li>
            <li>
              <SiGraphql className="tech-icon" /> GraphQL
            </li>
            <li>
              <SiGatsby className="tech-icon" />
              Gatsby
            </li>
          </ul>
        </section>
        <Button primary className="less-btn" id="less-btn" onClick={toggleMore}>
          see less
        </Button>
      </div>
    </Wrapper>
  );
};

export default AboutPreview;
