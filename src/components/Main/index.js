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
      <StyledTitle>Latest Headlines from New Zealand</StyledTitle>
      <StyledWrapper>
        <StyledBox>
          {/* <a href={currentMockData[0]["Url"]}>
            <StyledImg
              alt="test"
              src={currentMockData[0]["restaurant"]["thumb"]}
            />
          </a> */}
          <StyledName>{currentMockData[0]["Name"]}</StyledName>
          <br></br>
          <StyledBrief>{currentMockData[0]["Brief"]}</StyledBrief>
          <br></br>
          <StyledCategory>{currentMockData[0]["Category"]}</StyledCategory>
          <br></br>
          <StyledWebsite>{currentMockData[0]["Website"]}</StyledWebsite>
        </StyledBox>

        <StyledBox>
          {/* <a href={currentMockData[0]["Url"]}>
            <StyledImg
              alt="test"
              src={currentMockData[0]["restaurant"]["thumb"]}
            />
          </a> */}
          <StyledName>{currentMockData[1]["Name"]}</StyledName>
          <br></br>
          <StyledBrief>{currentMockData[1]["Brief"]}</StyledBrief>
          <br></br>
          <StyledCategory>{currentMockData[1]["Category"]}</StyledCategory>
          <br></br>
          <StyledWebsite>{currentMockData[1]["Website"]}</StyledWebsite>
        </StyledBox>

        <StyledBox>
          {/* <a href={currentMockData[0]["Url"]}>
            <StyledImg
              alt="test"
              src={currentMockData[0]["restaurant"]["thumb"]}
            />
          </a> */}
          <StyledName>{currentMockData[0]["Name"]}</StyledName>
          <br></br>
          <StyledBrief>{currentMockData[0]["Brief"]}</StyledBrief>
          <br></br>
          <StyledCategory>{currentMockData[0]["Category"]}</StyledCategory>
          <br></br>
          <StyledWebsite>{currentMockData[0]["Website"]}</StyledWebsite>
        </StyledBox>

        <StyledBox>
          {/* <a href={currentMockData[0]["Url"]}>
            <StyledImg
              alt="test"
              src={currentMockData[0]["restaurant"]["thumb"]}
            />
          </a> */}
          <StyledName>{currentMockData[0]["Name"]}</StyledName>
          <br></br>
          <StyledBrief>{currentMockData[0]["Brief"]}</StyledBrief>
          <br></br>
          <StyledCategory>{currentMockData[0]["Category"]}</StyledCategory>
          <br></br>
          <StyledWebsite>{currentMockData[0]["Website"]}</StyledWebsite>
        </StyledBox>
        
      </StyledWrapper>

      
    </StyledContainer>
  );
};

export default Main;
