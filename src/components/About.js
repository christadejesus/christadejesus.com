import styled from "styled-components";
import MainContentWrapper from "./containers/MainContentWrapper";
import Contact from "./articles/Contact";
import StandardArticle from "./containers/StandardArticle";
import PageBanner from "./banners/PageBanner";
import { RiHeartPulseLine } from "react-icons/ri";
import { GiShipWheel, GiJourney } from "react-icons/gi";

const Wrapper = styled.div`
  .heading-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
  }
  h2 {
    margin: 0;
  }
  .heading-icon {
    color: var(--color-primary-1);
    font-size: 2.8rem;
  }
`;

const About = () => {
  return (
    <MainContentWrapper>
      <PageBanner title="About" />
      <Wrapper>
        <StandardArticle>
          <div className="heading-container">
            <h2>Welcome, friends!</h2>
          </div>
          <p>
            Ipsum eu amet dolore in ullamco deserunt nulla culpa. Officia
            consequat qui eiusmod enim ut consectetur. Ut cillum est id deserunt
            ad. Enim cillum excepteur sunt ipsum sint adipisicing Lorem et
            cupidatat. Reprehenderit esse qui reprehenderit nisi proident.
          </p>

          <div className="heading-container">
            <RiHeartPulseLine className="heading-icon" />
            <h2>My Passion</h2>
          </div>
          <p>
            Eu veniam nisi magna ex velit. Deserunt laboris deserunt deserunt
            consectetur non in enim nisi eiusmod excepteur consequat nisi
            ullamco. Aliqua cillum aute minim esse velit irure Lorem nulla id
            aliquip est sint. Aliquip deserunt et esse minim id aliqua esse.
            Excepteur nisi anim ea quis eiusmod cupidatat commodo occaecat anim.
          </p>
          <div className="heading-container">
            <GiJourney className="heading-icon" />
            <h2>My Journey</h2>
          </div>
          <p>
            Minim minim voluptate fugiat laborum dolor. Id fugiat mollit ipsum
            minim ullamco voluptate labore deserunt culpa aute. Aliquip proident
            ea elit ex duis. Est voluptate quis ut ad amet cupidatat officia
            dolore cillum. In amet ipsum voluptate velit. Sint veniam duis
            cillum eu velit consequat. Sit irure irure ad ut voluptate.
          </p>
          <div className="heading-container">
            <GiShipWheel className="heading-icon" />
            <h2>My Mantras</h2>
          </div>
          <p>
            Fugiat cupidatat laborum quis excepteur dolore. Et commodo
            consectetur cillum deserunt. In exercitation incididunt est nisi et
            consequat duis excepteur laboris commodo in. Minim nostrud non
            eiusmod cupidatat est. Pariatur sit incididunt enim ad dolor fugiat
            ipsum. Enim non labore non consequat id duis cupidatat occaecat
            officia anim dolore proident labore excepteur. Ex cillum laboris eu
            Lorem qui exercitation minim Lorem.
          </p>
        </StandardArticle>
        <Contact />
      </Wrapper>
    </MainContentWrapper>
  );
};

export default About;
