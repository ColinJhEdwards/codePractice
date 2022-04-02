import styled from "styled-components";

export const StyledDiv = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  .description {
    flex: 1;
    padding-right: 5rem;
    z-index: 2;
    h2 {
      font-weight: lighter;
    }
  }
  .hide {
    overflow: hidden;
  }
  .image {
    z-index: 2;
    flex: 1;
    overflow: hidden;
    img {
      width: 100%;
      height: 80vh;
      object-fit: cover;
    }
  }
`;
