import ContactBg from "../../images/Contact Animations.png";
import styled from "@emotion/styled";
import BgMain from "../../images/bgbubble.png";
import useInnerWidth from "../../hooks/useInnerWidth";
import { breakpoints } from "../../data/breakpoints";
const ContactMain = styled.div`
  background-image: url(${BgMain});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
`;

const ContactBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 10% 0 0;
`;

const Content = styled.div`
  width: 50%;
  margin-left: 9.5%;
  margin-top: -15px;
`;

const BoxImages = styled.div`
  width: 50%;
`;

const Images = styled.img`
  margin-left: 142px;
  margin-top: 80px;
`;

const BoxInput = styled.div`
  margin-top: 40px;
`;

const Head = styled.h1`
  width: calc(100% - 100px);

  line-height: 43px;
  letter-spacing: 0.7px;
`;

const Title = styled.h6`
  margin-top: 20px;
`;

const Desc = styled.p`
  margin-top: 30px;
  letter-spacing: 1.6px;
  margin-top: 20px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 46px;

  @media (max-width: ${breakpoints.small}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const Input = styled.input`
  width: 220px;
  height: 62px;
  border-radius: 15px;
  border: 1px solid #d9ddfe;
  outline: none;
  padding-left: 21px;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c5c5c5;
    letter-spacing: 2.5px;
  }
  &:nth-child(2) {
    margin-left: 35px;
  }
`;

const InputItem = styled.div`
  padding: 30px 30px 30px 0;
  width: calc(100% + 30px);
`;

const InputInfo = styled.input`
  width: 90%;
  height: 62px;
  border-radius: 15px;
  border: 1px solid #d9ddfe;
  outline: none;

  margin: 2px auto;
  padding-left: 20px;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c5c5c5;
    letter-spacing: 3px;
  }

  &:nth-child(2) {
    margin-top: 35px;
  }
`;
const TextArea = styled.textarea`
  width: 87%;
  height: 190px;
  border-radius: 15px;
  border: 1px solid #d9ddfe;
  outline: none;
  padding: 20px;
  margin: 35px 20px 0 0;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c5c5c5;
    font-family: Poppins, sans-serif;
    letter-spacing: 1.8px;
  }
`;

const SendBtn = styled.button`
  width: 250px;
  height: 58.36px;
  margin-top: 22px;
  border-radius: 50px;
  background-color: #ff64ae;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
  font-family: Poppins, sans-serif;
  letter-spacing: 1.8px;
`;

const ContactBoxTablet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  margin: 0 8%;

  @media (max-width: ${breakpoints.small}) {
    margin: 0 7% 0 2%;
  }
`;

const BoxImagesTablet = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;
const ImagesTablet = styled.img`
  width: 75%;
`;
const ContentTablet = styled.div`
  width: 100%;
`;
const InputTablet = styled.input`
  width: 95%;
  height: 62px;
  border-radius: 15px;
  border: 1px solid #d9ddfe;
  outline: none;
  padding-left: 21px;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c5c5c5;
    letter-spacing: 2.5px;
  }
  &:nth-child(2) {
    margin-left: 35px;
  }

  @media (max-width: ${breakpoints.small}) {
    &:nth-child(2) {
      margin-top: 35px;
      margin-left: 10px;
    }
  }
`;
const InputInfoTablet = styled.input`
  width: 90%;
  height: 62px;
  border-radius: 15px;
  border: 1px solid #d9ddfe;
  outline: none;

  margin: 2px auto;
  padding-left: 20px;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c5c5c5;
    letter-spacing: 3px;
  }

  &:nth-child(2) {
    margin-top: 35px;
  }
`;
const TextAreaTablet = styled.textarea`
  width: 88%;
  height: 150px;
  border-radius: 15px;
  border: 1px solid #d9ddfe;
  outline: none;
  padding: 20px;
  margin: 35px 10% 0 0;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c5c5c5;
    font-family: Poppins, sans-serif;
    letter-spacing: 1.8px;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 85%;
    margin: 35px 11% 0 0;
  }
`;

const Contact: React.FC = () => {
  const width = useInnerWidth();

  return (
    <>
      <ContactMain id="contact">
        {width > 1200 ? (
          <ContactBox>
            <BoxImages>
              <Images src={ContactBg} alt="" />
            </BoxImages>
            <Content>
              <Title>Contact Us</Title>
              <Head>Send your inquiry to our expert team</Head>
              <Desc>Lorem ipsum dolor sit amet nulla turapis tellus.</Desc>
              <BoxInput>
                <InputRow>
                  <Input type="text" placeholder="First name" />
                  <Input className="last" type="text" placeholder="Last name" />
                </InputRow>
                <InputItem>
                  <InputInfo type="email" placeholder="Email address" />
                  <InputInfo type="text" placeholder="Subject message" />
                  <TextArea
                    className="message"
                    typeof="text"
                    placeholder="Your inquiry here"
                  ></TextArea>
                </InputItem>
              </BoxInput>

              <SendBtn>Send Message</SendBtn>
            </Content>
          </ContactBox>
        ) : (
          <ContactBoxTablet>
            <BoxImagesTablet>
              <ImagesTablet src={ContactBg} alt="" />
            </BoxImagesTablet>
            <ContentTablet>
              <Title>Contact Us</Title>
              <Head>Send your inquiry to our expert team</Head>
              <Desc>Lorem ipsum dolor sit amet nulla turapis tellus.</Desc>
              <BoxInput>
                <InputRow>
                  <InputTablet type="text" placeholder="First name" />
                  <InputTablet
                    className="last"
                    type="text"
                    placeholder="Last name"
                  />
                </InputRow>
                <InputItem>
                  <InputInfoTablet type="email" placeholder="Email address" />
                  <InputInfoTablet type="text" placeholder="Subject message" />
                  <TextAreaTablet
                    typeof="text"
                    placeholder="Your inquiry here"
                  ></TextAreaTablet>
                </InputItem>
              </BoxInput>

              <SendBtn>Send Message</SendBtn>
            </ContentTablet>
          </ContactBoxTablet>
        )}
      </ContactMain>
    </>
  );
};

export default Contact;
