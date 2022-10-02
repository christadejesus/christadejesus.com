import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--neutral-mdlt);

  h4 {
    color: var(--primary-1);
    margin-top: 10px;
  }
  .gallery-img {
    border-radius: 5px 5px 0px 0px;
  }
  @media screen and (min-width: 1000px) {
    h4 {
      font-size: 2rem;
    }
  }
`;

const ProjectGalleryCard = (props) => {
  return (
    <Wrapper className="gallery-card">
      <a href={props.demoUrl} target="_blank" rel="noreferrer">
        <div className="gallery-container">
          <img className="gallery-img" src={props.imgUrl} alt={props.imgAlt} />
          <h4>{props.projectName}</h4>
        </div>
      </a>
    </Wrapper>
  );
};

export default ProjectGalleryCard;
