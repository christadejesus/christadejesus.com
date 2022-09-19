import authorImg from "../../assets/Christa.jpg";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
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
} from "react-icons/si";
import Button from "../buttons/Button";
import StandardArticle from "../containers/StandardArticle";

const Wrapper = styled.div`
  border-bottom: 1px solid var(--neutral-mdlt);
  padding-bottom: 40px;
  margin-bottom: 40px;
  h3 {
    text-transform: uppercase;
  }
  .about-flex {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
  .about-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid var(--color-neutral-mdlt);
    padding: 0px;
  }
  .heart-icon {
    padding-top: 5px;
  }
  .tech-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-evenly;
    gap: 20px;
  }
  .tech-list li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    width: 100px;
    font-size: 1.4rem;
    color: var(--primary-1);
  }
  .tech-icon {
    font-size: 3rem;
  }
  .more {
    display: none;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background: var(--neutral-lt);
    padding: 40px 20px;
    border-radius: 8px;
  }
  .less-btn {
    margin-top: 20px;
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
      align-items: flex-start;
      max-width: 600px;
      margin: 0 auto;
    }
    .more {
      margin-top: 40px;
      max-width: 600px;
      margin: 40px auto 0 auto;
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
    <StandardArticle id="about">
      <Wrapper>
        <div className="about-flex">
          <img src={authorImg} alt="Christa DeJesus" className="about-img" />
          <div>
            <h2>Hello, I'm Christa!</h2>
            <p>
              I'm a self-taught Front End Developer and Full Stack Development
              Student from Indianapolis, Indiana.
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
          <h3>My Favorite Tools</h3>
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
              <SiGatsby className="tech-icon" />
              Gatsby
            </li>
            <li>
              <SiMarkdown className="tech-icon" /> Markdown
            </li>
            <li>
              <SiGraphql className="tech-icon" /> GraphQL
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
          </ul>
          <Button
            secondary
            className="less-btn"
            id="less-btn"
            onClick={toggleMore}
          >
            see less
          </Button>
        </div>
      </Wrapper>
    </StandardArticle>
  );
};

export default AboutPreview;
