import styled from "@emotion/styled";
import { professData } from "../../data";
import { Profess } from "../../types";
import ProfessItem from "./ProfessItem";
import { breakpoints } from "../../data/breakpoints";
const ProfessHeader = styled.div`
  text-align: center;
  margin: 30px 10px 50px 4px;
  line-height: 40px;
  margin-top: 132px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
  color: #ff64ae;
  letter-spacing: 0.3px;
  margin-left: 8px;
`;
const Text = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: #091156;
  width: 30%;
  margin: 6px auto 7px auto;
  padding-left: 6px;
  font-family: Poppins, sans-serif;
  letter-spacing: 0.3px;

  @media (max-width: ${breakpoints.xlarge}) {
    width: 100%;
  }
`;

const Desc = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #8b8b8b;
  font-family: Poppins, sans-serif;
  letter-spacing: 2.1px;
  margin: 24px calc(20%) 24px calc(20% + 4px);

  line-height: 26px;

  @media (max-width: ${breakpoints.medium}) {
    margin: 24px calc(5%) 24px calc(5% + 4px);
  }
`;

const ProfessList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
  margin: 110px calc(10% - 20px);
  flex: 1;
  flex-wrap: wrap;
  row-gap: 50px;
`;

const Profess: React.FC = () => {
  return (
    <>
      <ProfessHeader id="gallery">
        <Title>Professional Teams</Title>
        <Text>The Professional expert</Text>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </Desc>
      </ProfessHeader>

      <ProfessList>
        {professData.map((item: Profess) => (
          <ProfessItem key={item.id} item={item} />
        ))}
      </ProfessList>
    </>
  );
};

export default Profess;
