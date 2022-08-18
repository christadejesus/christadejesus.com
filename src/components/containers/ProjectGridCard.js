import styled from "styled-components";
import Button from "../buttons/Button";

const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-neutral-mdlt);

  h3 {
    margin-bottom: 5px;
  }
  .project-btns {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
  }
  .project-card img {
    border-radius: 4px 4px 0px 0px;
  }
  .project-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 0px 10px;
  }
`;

const ProjectGridCard = (props) => {
  return (
    <Wrapper className="project-card">
      <img src={props.imgUrl} alt={props.imgAlt} />
      <div className="project-info">
        <h3>{props.projectName}</h3>
        <div className="h3-accent"></div>
        <div className="project-btns">
          <Button
            primary
            as="a"
            href={props.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visit the demo
          </Button>
          <Button as="a" href={props.repoUrl} target="_blank" rel="noreferrer">
            View the code
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectGridCard;
