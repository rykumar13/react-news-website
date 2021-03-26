import styled from "styled-components";
import img from "../sample_image.jpg";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 4px 1px rgb(0 0 0 / 15%);
  @media (min-width: 600px) {
    flex-direction: row;
    max-width: 75rem;
  }
`;

export const ImageData = styled.div`
  height: 25rem;
  position: relative;
  z-index: 1;
  overflow: hidden;

  @media (min-width: 600px) {
    flex-basis: 30%;
    height: unset;
  }
`;

export const BackgroundImage = styled.div`
  width: 85%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${img}) center no-repeat;
  background-size: cover;
  z-index: -1;
  transition: transform 2s;
  :hover {
    transform: scale(1.2);
  }
`;

export const PublicationDetails = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 119, 48, 0.8),
    rgba(255, 185, 0, 0.8)
  );
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  @media (min-width: 600px) {
    transform: translateY(-100%);
    transition: transform 0.5s;
  }
`;

export const Author = styled.a`
  display: inline-block;
  margin-bottom: 0.5rem;
  transition: all 0.5s;
  :hover {
    color: rgba(255, 255, 255, 0.75);
  }
  // @media (min-width: 600px) {
  //   transform: translateY(-3rem);
  //   opacity: 0;
  //   transition-delay: .3s;
`;

export const FasFaUser = styled.i``;

export const Date = styled.span`
  display: block;
  // @media (min-width: 600px) {
  //   transform: translateY(3rem);
  //   opacity: 0;
  //   transition: all .5s .3s;
  // }
`;

export const FasFaCalendarAlt = styled.i``;

export const PostData = styled.div`
  // background-color: #fff;
  padding: 10px 30px;
  position: relative;
  //width: 500px;
  @media (min-width: 600px) {
    ::before {
      content: "";
      width: 30px;
      height: 100%;
      background-color: white;
      position: absolute;
      top: 0;
      left: -25px;
      z-index: 10;
      transform: skewX(-5deg);
    }
    flex-basis: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  line-height: 1;
`;

export const Description = styled.p`
  font-size: 14px;
  position: relative;
  /* ::first-letter {
    margin-left: 1rem;
  } */
  /* ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 14px;
    background: linear-gradient(
      to right bottom,
      rgba(255, 119, 48, 0.8),
      rgba(255, 185, 0, 0.8)
    );
    border-radius: 2rem;
  } */
`;

export const Cta = styled.div`
  text-align: right;
  font-weight: bold;
  // margin-top: 1rem;
`;

export const SubTitle = styled.h2`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  color: #a2a2a2;
  // margin: 1rem 0 1.5rem 0;
`;

export const ReadMore = styled.a`
  background: linear-gradient(
    to right bottom,
    rgba(255, 119, 48, 0.8),
    rgba(255, 185, 0, 0.8)
  );
  -webkit-background-clip: text;
  color: transparent;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      to right bottom,
      rgba(255, 119, 48, 0.8),
      rgba(255, 185, 0, 0.8)
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s;
  }

  :hover::before {
    transform: scaleX(1);
  }
`;

export const StyledContainer = styled.div`
  margin-top: 50px;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* max-width: 100%; */
  /* align-items: center; */
`;

export const StyledWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 400px 400px 400px;
  grid-gap: 25px;

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
