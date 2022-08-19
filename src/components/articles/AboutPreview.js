import authorImg from "../../assets/Christa.jpg";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from "../buttons/Button";
import StandardArticle from "../containers/StandardArticle";
import AccentSolid from "../containers/AccentSolid";

const Wrapper = styled.div`
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
  .heart {
    color: var(--color-accent-2);
    padding-top: 5px;
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 700px) {
    .about-flex {
      flex-direction: row;
    }
  }
  @media screen and (min-width: 900px) {
    .about-flex {
      flex-direction: row;
    }
  }
`;

const AboutPreview = (props) => {
  return (
    <StandardArticle id="about">
      <AccentSolid>
        <Wrapper>
          <div className="about-flex">
            <img src={authorImg} alt="Christa DeJesus" className="about-img" />
            <div>
              <h2>Hello, I'm Christa!</h2>
              <p>
                In a nutshell, I'm a creative entrepreneur from Indianapolis,
                Indiana, who fell in love with code, development, and graphic
                design. <FaHeart className="heart" />
              </p>
              <Link to="/about">
                <Button primary>Read more</Button>
              </Link>
            </div>
          </div>
        </Wrapper>
      </AccentSolid>
    </StandardArticle>
  );
};

export default AboutPreview;
