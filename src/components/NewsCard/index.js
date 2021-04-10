import { React, useState, useEffect } from "react";
import { getData as getDataSet } from "../..//data/data"
import {
  Card,
  ImageData,
  BackgroundImage,
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
  const [currentData, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let data = await getDataSet();
      if (data) return setData(data);
      setData("no mock data found");
    };
    getData();
  }, []);

  if (!currentData) return null;

  return (
    <StyledContainer>
      <StyledWrapper>
        {currentData.map(({ Url, Date, Name, Brief, Website, Category }) => (
          <Card>
            <ImageData>
              <BackgroundImage />
            </ImageData>
            <PostData>
              <Title>{Name}</Title>
              <SubTitle>{Website} / {Category} / {Date}</SubTitle>
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
