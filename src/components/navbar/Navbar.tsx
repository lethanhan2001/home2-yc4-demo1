import Image from "../../images/animationheader.png";
import ImageNavbar from "../../images/slidebg.jpg";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Button from "../button/Button";
import useInnerWidth from "../../hooks/useInnerWidth";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { breakpoints } from "../../data/breakpoints";

interface MenuTabletProps {
  show: boolean;
}

const MainHeader = styled.div`
  background-image: url(${ImageNavbar});
  width: 100%;
  height: 851.4px;
  background-size: cover;
`;

const NavbarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px calc(10% - 6px) 18px 10%;
`;

const Menu = styled.div``;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuItem = styled.li`
  list-style: none;
  letter-spacing: 1.2px;
  font-size: 16px;
  font-weight: 500;
  color: #8b8b8b;
  &:not(:last-child) {
    margin: 0 24px;
  }
  &:last-child {
    margin: auto 0 auto 30px;
  }
  &:first-child {
    font-size: 16px;
    font-weight: 600;
    color: #414880;
  }
`;

const MainLogo = styled.div`
  position: relative;
`;

const One = styled.div`
  width: 63px;
  background-color: #ff64ae;
  position: relative;
  border-radius: 50%;
  height: 63px;
`;
const Two = styled.div`
  width: 13px;
  position: absolute;
  top: 11px;
  left: 15px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
`;
const Three = styled.div`
  height: 6px;
  width: 6px;
  top: 23px;
  position: absolute;
  left: 28px;
  border-radius: 50%;
  background: #fff;
`;
const Four = styled.div`
  height: 11px;
  width: 40px;
  top: 25px;
  position: absolute;
  left: 40px;

  background: #091156;
  border-radius: 50px;
`;

const BoxLogo = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  margin-left: 34px;
  font-size: 24px;
  letter-spacing: 3px;
  font-weight: 700;
  color: #091156;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  margin: 102px calc(9% + 2px);

  @media screen and (max-width: ${breakpoints.large}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    letter-spacing: 1px;
  }
`;

const Details = styled.button`
  width: 200px;
  height: 58.36px;
  border-radius: 50px;
  background-color: #ff64ae;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
  letter-spacing: 2px;
  font-family: Poppins, sans-serif;
  margin-top: 18px;
`;

const Left = styled.div`
  width: 40%;
  padding-right: 15px;
  margin-top: -48px;

  @media (max-width: ${breakpoints.large}) {
    width: 100%;
  }
`;

const Head = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 58px;
`;

const Desc = styled.p`
  font-size: 16px;
  width: 100%;
  font-weight: 500;
  letter-spacing: 1.7px;
  color: #091156;
  margin-top: -21px;
`;

const Right = styled.div`
  width: 50%;
  @media (max-width: ${breakpoints.large}) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

const Images = styled.img`
  width: 100%;
  margin: 26px 27px;
  @media (max-width: ${breakpoints.large}) {
    width: 100%;
    margin: 30px auto;
    text-align: center;
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 30px;
`;

const MenuTablet = styled.div<MenuTabletProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 300px;
  background-color: white;
  box-shadow: 0 3px 5px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-in-out;

  ${(props) =>
    props.show &&
    css`
      left: -300px;
    `}
`;

const MenuListTablet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50% auto;
  text-align: center;
`;

const MenuItemTablet = styled.p`
  list-style: none;
  &:first-child {
    color: #091156;
    font-weight: 600;
  }
`;

const Navbar: React.FC = () => {
  const width: number = useInnerWidth();
  const [show, setShow] = useState<boolean>(true);
  return (
    <>
      <MainHeader>
        <NavbarHeader>
          <BoxLogo>
            <MainLogo>
              <One></One>
              <Two></Two>
              <Three></Three>
              <Four></Four>
            </MainLogo>
            <Title>Beautice</Title>
          </BoxLogo>

          {width > 1250 ? (
            <Menu>
              <MenuList>
                <MenuItem>Home+</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Service</MenuItem>
                <MenuItem>Gallery</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>
                  {" "}
                  <Button>Contact</Button>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <>
              {show ? (
                <MenuIcon onClick={() => setShow(false)}>
                  <HiOutlineMenu />
                </MenuIcon>
              ) : (
                <MenuIcon onClick={() => setShow(true)}>
                  <AiOutlineClose />
                </MenuIcon>
              )}
            </>
          )}

          {width <= 1250 && (
            <MenuTablet show={show}>
              <MenuListTablet>
                <MenuItemTablet>Home+</MenuItemTablet>
                <MenuItemTablet>About</MenuItemTablet>
                <MenuItemTablet>Service</MenuItemTablet>
                <MenuItemTablet>Gallery</MenuItemTablet>
                <MenuItemTablet>Blog</MenuItemTablet>
                <MenuItemTablet>
                  {" "}
                  <Button>Contact</Button>
                </MenuItemTablet>
              </MenuListTablet>
            </MenuTablet>
          )}
        </NavbarHeader>

        <Content>
          <Left>
            <Head>Clinic & beauty consultant</Head>
            <Desc>
              It is a long established fact that a reader will be by the
              readable content of a page.
            </Desc>
            <Details>More Details</Details>
          </Left>
          <Right>
            <Images src={Image} alt="" />
          </Right>
        </Content>
      </MainHeader>
    </>
  );
};

export default Navbar;
