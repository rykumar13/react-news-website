import styled from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  padding: 140px 0;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  height: 80px;
  font-size: 50px;
  line-height: 1.1;
  font-style: italic;
  margin: 0;
  @media (max-width: 63em) {
    font-size: 40px;
  }
  @media (max-width: 48em) {
    font-size: 30px;
  }
`;

export const StyledWrapper = styled.div`
    margin: auto:
    height: 350px;
    display: grid;
    grid-template-columns: 250px 250px 250px 250px;
    grid-gap: 30px;

    @media (max-width: 1200px) {
      grid-template-columns: 250px 250px 250px;
    }

    @media (max-width: 900px) {
      grid-template-columns: 250px 250px;
    }

    @media (max-width: 600px) {
      grid-template-columns: 250px;
    }
`;

export const StyledBox = styled.div`
  border-radius: 5px;
  border-color: #990000;
  font-size: 100%;
  line-height: 1.5;

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }

  text-decoration: none;

`;

export const StyledImg = styled.img`
  height: 185px;
  width: 260px;
  border-radius: 0.6rem;
`;

export const StyledName = styled.h6`
  display: inline;
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 600;
`;

export const StyledBrief = styled.h6`
  display: inline;
  line-height: 1.5;
  font-weight: 400;
`;

export const StyledCategory = styled.h6`
  display: inline;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
`;

export const StyledWebsite = styled.h6`
  display: inline;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
`;
