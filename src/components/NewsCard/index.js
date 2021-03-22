import React from "react";
import {
  Card,
  ImageData,
  BackgroundImage,
  PublicationDetails,
  Author,
  FasFaUser,
  Date,
  FasFaCalendarAlt,
  PostData,
  Title,
  SubTitle,
  Description,
  Cta,
  ReadMore,
} from "./NewsCardsElements";

const NewsCard = () => {
  return (
  <Card>
    <ImageData>
      <BackgroundImage />
      <PublicationDetails>
        <Author href="#">
          {/* <FasFaUser /> */}
          Rajiv Kumar
        </Author>
        <Date>
          {/* <FasFaCalendarAlt /> */}
          March 22, 2021
        </Date>
      </PublicationDetails>
    </ImageData>
    <PostData>
      <Title>Artificial Inteligence</Title>
      <SubTitle>This is the SubTitle</SubTitle>
      <Description>
      Hello this is where all the radom fucking text will go
      </Description>
      <Cta>
        <ReadMore />
      </Cta>
    </PostData>
  </Card>
  )
};

export default NewsCard;
