import { React, useState, useEffect } from "react";
import { getMockData as getMockDataSet } from "../../data/mock_data";
import {
  StyledBox,
  StyledBrief,
  StyledCategory,
  StyledContainer,
  StyledName,
  StyledWebsite,
  StyledWrapper,
  StyledBoxBorder,
  StyledStuff,
  StyledCat,
  Text_card,
  Text_box, 
  Text_card_heading
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
          // <StyledBoxBorder>
          //   <a href={Url}>
          //     <StyledBox>
          //       <StyledName>{Name}</StyledName>
          //       <br></br>
          //       <StyledBrief>{Brief}</StyledBrief>
          //       <br></br>
          //         <StyledCat>{Category}</StyledCat>
          //       <StyledStuff>{Website}</StyledStuff>
          //     </StyledBox>
          //   </a>
          // </StyledBoxBorder>
          <Text_card>
            <Text_card_heading>
              <h1>{Name}</h1>
            </Text_card_heading>
            <Text_box>
              <p>{Brief}</p>
            </Text_box>
          </Text_card>
        ))}
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Main;
