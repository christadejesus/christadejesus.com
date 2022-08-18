import styled from "styled-components";
import Button from "../buttons/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
    justify-content: space-between;
    height: 100%;
    padding: 10px 10px 0px 10px;
  }
  .project-about-flex {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    column-gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    padding: 0px 10px;
  }
  .project-details {
    height: 100%;
  }
  h4 {
    color: var(--color-primary-1);
  }
  ul {
    margin-left: 20px;
  }
`;

const ProjectGridCardMore = (props) => {
  return (
    <Wrapper className="project-card">
      <img src={props.imgUrl} alt={props.imgAlt} />
      <div className="project-info">
        <h3>{props.projectName}</h3>
        <div className="h3-accent"></div>
        <div className="project-details">
          <h4>Highlights:</h4>
          <div className="project-about-flex">
            <ul>
              {props.detail1 ? <li>{props.detail1}</li> : <br />}
              {props.detail2 ? <li>{props.detail2}</li> : <br />}
              {props.detail3 ? <li>{props.detail3}</li> : null}
            </ul>
            <ul>
              {props.detail4 ? <li>{props.detail4}</li> : <br />}
              {props.detail5 ? <li>{props.detail5}</li> : <br />}
              {props.detail6 ? <li>{props.detail6}</li> : null}
            </ul>
          </div>
        </div>
      </div>
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
    </Wrapper>
  );
};

export default ProjectGridCardMore;
