import { React, useState, useEffect } from "react";
import { getMockData as getMockDataSet } from "../../data/mock_data";
import {
  StyledBox,
  StyledBrief,
  StyledCategory,
  StyledContainer,
  StyledImg,
  StyledName,
  StyledTitle,
  StyledWebsite,
  StyledWrapper,
  StyledBoxBorder
} from "./MainElements";

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
        {currentMockData.map(({ Url, Name, Brief, Website, Category }) => (
          <StyledBoxBorder>
            <a href={Url}>
              <StyledBox>
                <StyledName>{Name.slice(0, 100)}...</StyledName>
                <br></br>
                <StyledBrief>{Brief.slice(0, 150)}</StyledBrief>
                <br></br>
                <StyledCategory>{Category} - </StyledCategory>
                <StyledWebsite>{Website}</StyledWebsite>
              </StyledBox>
            </a>
          </StyledBoxBorder>
        ))}
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Main;
