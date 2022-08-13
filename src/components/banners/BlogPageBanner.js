import styled from "styled-components";

const BlogPageBannerWrapper = styled.div``;

const BlogPageBanner = (props) => {
  return (
    <BlogPageBannerWrapper>
      <h1>{props.title}</h1>
    </BlogPageBannerWrapper>
  );
};

export default BlogPageBanner;
