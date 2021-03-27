import { React, useState, useEffect } from "react";
import { getMockData as getMockDataSet } from "../../data/mock_data";
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
  StyledContainer,
  StyledWrapper,
} from "./NewsCardsElements";

const NewsCard = () => {
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
    <StyledContainer>
      <StyledWrapper>
        {currentMockData.map(({ Url, Name, Brief, Website, Category }) => (
          <Card>
            <ImageData>
              <BackgroundImage />
            </ImageData>
            <PostData>
              <Title>{Name}</Title>
              <SubTitle>{Website} - {Category}</SubTitle>
              <Description>
                {Brief}
              </Description>
              <Cta>
                <ReadMore href={Url}>Read more</ReadMore>
              </Cta>
            </PostData>
          </Card>
        ))}
      </StyledWrapper>
    </StyledContainer>
  );
};

export default NewsCard;
