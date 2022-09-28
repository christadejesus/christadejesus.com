import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  border-radius: 5px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--neutral-mdlt);

  h4 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.09rem;
    color: var(--primary-1);
  }
  .gallery-img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
  .gallery-img:hover {
    cursor: pointer;
  }
  .gallery-info {
    position: absolute;
    display: block;
    bottom: 10px;
    left: 0px;
    width: fit-content;
    padding: 0px 8px;
    background: var(--neutral-lt);
    border-radius: 0px;
    border: 1px solid var(--neutral-md);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectGalleryCard = (props) => {
  return (
    <Wrapper className="gallery-card">
      <a href={props.demoUrl} target="_blank" rel="noreferrer">
        <div className="gallery-info">
          <h4>{props.projectName}</h4>
        </div>
        <img className="gallery-img" src={props.imgUrl} alt={props.imgAlt} />
      </a>
    </Wrapper>
  );
};

export default ProjectGalleryCard;
