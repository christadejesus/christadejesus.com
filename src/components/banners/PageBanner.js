import styled from "styled-components";
import backgroundImg from "../../assets/low-poly-grid.png";

const PageBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;
  background: url(${backgroundImg});
  background-position: bottom;
  background-size: contain;
  height: 120px;
  width: 100%;
  margin-bottom: 100px;
  border-bottom: 1px solid var(--color-neutral-mdlt);

  h1 {
    font-family: var(--font-cursive);
    font-size: 5rem;
    font-weight: 400;
    background: var(--color-neutral-wht);
    padding: 0px 20px 10px 20px;
    border: 8px solid var(--color-primary-1);
    border-radius: 3px;
  }
`;

const PageBanner = (props) => {
  return (
    <PageBannerWrapper>
      <h1>{props.title}</h1>
    </PageBannerWrapper>
  );
};

export default PageBanner;
