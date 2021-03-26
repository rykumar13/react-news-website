import React from "react";
import { FaBars } from "react-icons/fa";
import {
  StyledContainer,
  NavList1,
  NavList2,
  Title,
  MobileIcon,
  SubTitle,
  NavLink,
  HeadingContainer,
  NavListContainer1,
  NavListContainer2,
  Strip,
  HeadingName
} from "./NavbarElements";

const Navbar = () => {
  return (
    <StyledContainer>
      <HeadingContainer>
        <HeadingName>
          <Title>THE DAILY ROUND UP</Title>
          {/* <SubTitle>LATEST HEADLINES FROM STUFF, SCOOP & RNZ</SubTitle> */}
        </HeadingName>
      </HeadingContainer>
      <NavListContainer1>
        <NavList1>
          <NavLink>Auckland</NavLink>
          <NavLink>Wellington</NavLink>
          <NavLink>Christchurch</NavLink>
          <NavLink>Australia</NavLink>
          <NavLink>Pacific</NavLink>
          <NavLink>USA</NavLink>
          <NavLink>UK</NavLink>
          <NavLink>Asia</NavLink>
          <NavLink>Americas</NavLink>
        </NavList1>
      </NavListContainer1>
      <NavListContainer2>
        <NavList2>
          <NavLink>Front Page</NavLink>
          <NavLink>Stuff</NavLink>
          <NavLink>Scoop</NavLink>
          <NavLink>Radio NZ</NavLink>
          <NavLink>Sports</NavLink>
          <NavLink>Business</NavLink>
          <NavLink>Sci-Tech</NavLink>
          <NavLink>Culture</NavLink>
          <NavLink>Education</NavLink>
        </NavList2>
      </NavListContainer2>
    </StyledContainer>
  );
};

export default Navbar;
