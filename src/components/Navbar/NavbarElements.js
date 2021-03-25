import styled from "styled-components";

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const HeadingContainer = styled.div`
`;

export const HeadingName = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

`;

export const StyledContainer = styled.div`
  background-color: #f55a3f;
  // height: 150px;
  @media (max-width: 63em) {
    padding: 0 40px;
  }
  @media (max-width: 48em) {
    padding: 0 25px;
  }
  @media (max-width: 400px) {
    display: none;
    justify-content: center;
  }
`;

export const NavListContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ec4438;
  font-weight: bold;
`;

export const NavListContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid;
`;

export const Strip = styled.div`
  background-color: black;
  padding: 9px;
  max-width: 100%;
`;

export const NavList1 = styled.ol`
  list-style-type: none;
  font-size: 14px;
  color: white;
`;

export const NavList2 = styled.ol`
  list-style-type: none;
  font-size: 18px;
  font-weight: 400;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  font-weight: 600;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

export const NavLink = styled.a`
  margin-right: 60px;
`;
