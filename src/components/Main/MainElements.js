import styled from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  padding: 40px 0;
  align-items: center;
`;

export const StyledStuff = styled.div`
  background-color: #4caf50; /* Green */
  border: none;
  border-radius: 8px;
  color: white;
  padding: 4px 4px 4px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 4px
`;

export const StyledCat = styled.div`
  background-color: #4caf50; /* Green */
  border: none;
  border-radius: 8px;
  color: white;
  padding: 4px 4px 4px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

// export const StyledTitle = styled.h2`
//   height: 80px;
//   font-size: 50px;
//   line-height: 1.1;
//   font-style: italic;
//   margin: 0;
//   @media (max-width: 63em) {
//     font-size: 40px;
//   }
//   @media (max-width: 48em) {
//     font-size: 30px;
//   }
// `;

export const StyledWrapper = styled.div`
    margin: auto:
    height: 350px;
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-gap: 10px;

    @media (max-width: 1200px) {
      grid-template-columns: 350px 350px;
    }

    @media (max-width: 900px) {
      grid-template-columns: 500px;
    }

    @media (max-width: 600px) {
      grid-template-columns: 300px;
    }
`;

export const StyledBox = styled.div`
  padding: 10px 10px 10px 10px;
  font-size: 100%;
  line-height: 1.5;
  text-decoration: none;
`;

export const StyledBoxBorder = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  border-width: 1px;
  &:hover {
    transform: scale(1.01);
    transition-duration: 0.3s;
  }
`;

// export const StyledImg = styled.img`
//   height: 185px;
//   width: 260px;
//   border-radius: 0.6rem;
// `;

export const StyledName = styled.h6`
  display: inline;
  font-size: 20px;
`;

export const StyledBrief = styled.h6`
  display: inline;
  font-weight: 400;
  font-size: 12px;
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
