import React from "react";
import PlayBtn from "../../images/Play_button.png";
import HomeBg from "../../images/home.png";
import styled from "@emotion/styled";
import useInnerWidth from "../../hooks/useInnerWidth";
import { breakpoints } from "../../data/breakpoints";
const AboutMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex: 1;
  margin: 100px 10%;
`;

const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
  height: 350px;
`;

const Images = styled.img`
  width: 620px;
  margin-left: 20px;
  margin-top: 35px;
  height: 350px;
  object-fit: cover;
`;

const WatchBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

const Video = styled.div`
  display: flex;
  align-items: center;
`;

const Play = styled.img`
  margin-left: 43px;
`;
const TextWatch = styled.p`
  margin-left: 11px;
  font-size: 16px;
  font-weight: 600;
  color: #8b8b8b;
  letter-spacing: 2px;
`;

const Abouts = styled.div`
  line-height: 25px;
  margin-top: 32px;
`;
const TextAbout = styled.div`
  margin-top: 20px;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: #091156;

  @media (max-width: ${breakpoints.large}) {
    line-height: 40px;
  }
`;
const DescAbout = styled.div`
  margin-top: 30px;
  width: 80%;
  font-size: 16px;
  font-weight: 400;
  color: #8b8b8b;
  letter-spacing: 1.6px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
  color: #ff64ae;
`;

const Span = styled.div`
  width: 90%;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #8b8b8b;
  letter-spacing: 1.6px;
`;

const LearnBtn = styled.button`
  width: 200px;
  letter-spacing: 2px;
  height: 58.36px;
  border-radius: 50px;
  background-color: #ff64ae;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
`;

const AboutMainTablet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  flex: 1;
  margin: 100px 10%;

  @media (max-width: ${breakpoints.small}) {
    margin: 100px 5%;
  }
`;

const LeftTablet = styled.div`
  width: 100%;
`;

const RightTablet = styled.div`
  width: 100%;
`;
const ImagesTablet = styled.img`
  width: 100%;
`;

const About: React.FC = () => {
  const width: number = useInnerWidth();
  return (
    <>
      {width > 1200 ? (
        <AboutMain id="about">
          <Left>
            <Abouts>
              <Title>About Us</Title>
              <TextAbout>We are the best beauty clinic</TextAbout>
              <DescAbout>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                tellus in suspendisse placerat. <br />{" "}
              </DescAbout>
              <Span>
                Id dui erat sed quam tellus in purus. Pellentesque congue
                fringilla cras tellus enim.
              </Span>
            </Abouts>

            <WatchBox>
              <LearnBtn>Learn More</LearnBtn>
              <Video>
                <Play src={PlayBtn} alt="" />
                <TextWatch>Watch Video</TextWatch>
              </Video>
            </WatchBox>
          </Left>
          <Right>
            <Images src={HomeBg} alt="" />
          </Right>
        </AboutMain>
      ) : (
        <AboutMainTablet>
          <LeftTablet>
            <Abouts>
              <Title>About Us</Title>
              <TextAbout>We are the best beauty clinic</TextAbout>
              <DescAbout>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                tellus in suspendisse placerat. <br />{" "}
              </DescAbout>
              <Span>
                Id dui erat sed quam tellus in purus. Pellentesque congue
                fringilla cras tellus enim.
              </Span>
            </Abouts>

            <WatchBox>
              <LearnBtn>Learn More</LearnBtn>
              <Video>
                <Play src={PlayBtn} alt="" />
                <TextWatch>Watch Video</TextWatch>
              </Video>
            </WatchBox>
          </LeftTablet>
          <RightTablet>
            <ImagesTablet src={HomeBg} alt="" />
          </RightTablet>
        </AboutMainTablet>
      )}
    </>
  );
};

export default About;
