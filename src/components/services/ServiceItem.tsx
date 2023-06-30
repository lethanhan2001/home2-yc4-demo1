import { Services } from "../../types";
import styled from "@emotion/styled";
interface ServicesItem {
  item: Services;
}

const BoxServices = styled("div")({
  width: "320px",
  height: "418px",
  backgroundColor: "white",
  borderRadius: "42px",
  padding: "20px 10px",

  textAlign: "center",
  boxShadow: "0 2px 8px 1px rgba(0,0,0,0.1)",
});
const ImageItem = styled("div")({
  margin: "40px auto ",
  textAlign: "center",
});
const Title = styled("span")({
  fontSize: "14px",
  fontWeight: "400",
  padding: "0px 12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  letterSpacing: "1.8px",
  color: "#8b8b8b",
});
const Name = styled("p")({
  fontSize: "18px",
  fontWeight: "600",
  color: "#091156",
  marginTop: "50px",
});

const Img = styled("img")({});

const ServiceItem: React.FC<ServicesItem> = ({ item }) => {
  return (
    <>
      <BoxServices>
        <ImageItem>
          <Img src={item.image} alt="" />
        </ImageItem>
        <Name>{item.name}</Name>
        <Title>{item.title}</Title>
      </BoxServices>
    </>
  );
};

export default ServiceItem;
