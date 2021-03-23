import { React, useState, useEffect } from "react";
import { getMockData as getMockDataSet } from "../../data/mock_data";
import {
  StyledContainer,
  StyledWrapper,
  Text_card,
  Text_box,
  Text_card_heading,
} from "./MainElements";
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
} from "../NewsCard/NewsCardsElements";

const Main = () => {
  const [currentMockData, setMockData] = useState(null);

  useEffect(() => {
    const getMockData = async () => {
      let mockData = await getMockDataSet();
      if (mockData) return setMockData(mockData);
      setMockData("no mock data found");
    };
    getMockData();
  }, []);

  if (!currentMockData) return null;
  return ( 
    <StyledContainer id="LatestHeadlines">
      {/* <StyledTitle>Latest Headlines from New Zealand</StyledTitle> */}
      <StyledWrapper>
        {/* {currentMockData.map(({ Url, Name, Brief, Website, Category }) => (
          <Text_card>
            <Text_card_heading>
              <h1>{Name}</h1>
            </Text_card_heading>
            <Text_box>
              <p>{Brief}</p>
            </Text_box>
          </Text_card>
        ))} */}
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
              <ReadMore>Read more</ReadMore>
            </Cta>
          </PostData>
        </Card>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Main;
