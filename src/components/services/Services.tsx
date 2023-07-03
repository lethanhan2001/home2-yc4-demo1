import styled from "@emotion/styled";
import Option from "../option/Option";
import { servicesData } from "../../data";
import { Services } from "../../types";
import ServiceItem from "./ServiceItem";

const Space = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-62px",
});
const One = styled("div")({
  width: "14.82px",
  height: "3.09px",
  backgroundColor: "#eeeeee",
  borderRadius: "50px",
});
const Two = styled("div")({
  width: "25.31px",
  height: "8.15px",
  backgroundColor: "#414880",
  margin: "0 10px",
  borderRadius: "50px",
});
const Three = styled("div")({
  width: "14.82px",
  height: "3.09px",
  backgroundColor: "#eeeeee",
  borderRadius: "50px",
});

const BoxModals = styled("div")({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginTop: "50px",
  flex: "1",
  flexWrap: "wrap",
  rowGap: "30px",
  margin: "80px calc(7%  - 9px)",
});

const Services = () => {
  return (
    <>
      <Space>
        <One></One>
        <Two></Two>
        <Three></Three>
      </Space>

      <Option
        title="Main Services"
        text="Learn services to focus
on your beauty"
        desc="Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
      />

      <BoxModals id="service">
        {servicesData.map((item: Services) => (
          <ServiceItem key={item.id} item={item} />
        ))}
      </BoxModals>
    </>
  );
};

export default Services;
