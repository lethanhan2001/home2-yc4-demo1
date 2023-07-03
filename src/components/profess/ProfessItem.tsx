import { Profess } from "../../types";
import Facebook from "../../images/Facebook.png";
import Twitter from "../../images/Twitter (1).png";
import Instagram from "../../images/Instagram.png";
import styled from "@emotion/styled";

const BoxItem = styled.div`
  width: 270px;
  height: 484px;
  background: #fff;
  box-shadow: 10px 25px 50px 25px #efeff8;
  border-radius: 42px;
  padding: 0 5px;
  text-align: center;

  &:nth-child(2) {
    width: 424px;
    height: 626px;
    background: #fff;
    box-shadow: 10px 25px 50px 25px #efeff8;
    border-radius: 42px;
  }
`;

const Images = styled.img`
  margin-top: 0;
`;

const Img = styled.img`
  margin-top: 90px;
`;

const BoxImages = styled.div`
  margin-top: 22px;
  margin-right: 5px;
`;
const CenterImages = styled.div``;
const BoxImagesLast = styled.div`
  margin-top: 22px;
  margin-left: 10px;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #ff64ae;
  margin-top: 45px;
  margin-right: 5px;
  font-family: Poppins, sans-serif;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #091156;
  margin-top: -7px;
  margin-right: 0;
  letter-spacing: 0.6px;
  margin-bottom: 15px;
  font-family: Poppins, sans-serif;
`;

const Desc = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #8b8b8b;
  font-family: Poppins, sans-serif;
  letter-spacing: 1.6px;
`;

const DescCenter = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #8b8b8b;
  font-family: Poppins, sans-serif;
  letter-spacing: 1.4px;
  padding: 0 60px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const BoxIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 34px;
  margin-right: 10px;
`;
const BoxIconsLast = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 34px;
  margin-right: 0px;
`;

const Icons = styled.img``;
const IconsCenter = styled.img`
  margin-top: 10px;
`;
interface ProfessItems {
  item: Profess;
}
const ProfessItem: React.FC<ProfessItems> = ({ item }) => {
  return (
    <>
      <BoxItem>
        {item.id === 2 ? (
          <CenterImages>
            <Img src={item.image} alt="" />
          </CenterImages>
        ) : item.id === 3 ? (
          <BoxImagesLast>
            <Images src={item.image} alt="" />
          </BoxImagesLast>
        ) : (
          <BoxImages>
            <Images src={item.image} alt="" />
          </BoxImages>
        )}
        <Name>{item.name}</Name>
        <Title>{item.username}</Title>
        {item.id === 2 ? (
          <DescCenter>{item.title}</DescCenter>
        ) : (
          <Desc>{item.title}</Desc>
        )}
        {item.id === 2 ? (
          <BoxIcons>
            <IconsCenter src={Twitter} alt="" />
            <IconsCenter src={Facebook} alt="" />
            <IconsCenter src={Instagram} alt="" />
          </BoxIcons>
        ) : item.id === 3 ? (
          <BoxIconsLast>
            <Icons src={Twitter} alt="" />
            <Icons src={Facebook} alt="" />
            <Icons src={Instagram} alt="" />
          </BoxIconsLast>
        ) : (
          <BoxIcons>
            <Icons src={Twitter} alt="" />
            <Icons src={Facebook} alt="" />
            <Icons src={Instagram} alt="" />
          </BoxIcons>
        )}
      </BoxItem>
    </>
  );
};

export default ProfessItem;
