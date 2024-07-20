import styled from "styled-components";

const Hero_Grad = styled.div`
  background-image: linear-gradient(#00000000, #000000);
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  item-align: center;
  gap: 15px;
`;
const Hero_wrapper = styled.div`
  background-image: url("/heroImg.png");
  background-size: cover;
  background-position: center;
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  item-align: center;
`;
const Hero_Title = styled.h1`
  font-size: ${(props) => props.$fontSize || "3rem"};
  font-weight: 400;
  padding: ${(props) => props.$padding || "0"};
  color: ${(props) => props.$color || "white"};
  text-align: ${(props) => props.$align || "center"};
  margin: 0;

  @media (max-width: 1200px) {
    font-size: ${(props) => props.$fontSizeM || "2.5rem"};
  }
`;
const Hero_Text = styled.p`
  font-size: ${(props) => props.$fontSize || "1rem"};
  font-weight: 400;
  width: ${(props) => props.$width || "fit-content"};
  padding: ${(props) => props.$padding || "14px 16px"};
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;

  background-color: #101010;
  color: ${(props) => props.$color || "white"};
  text-align: center;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: ${(props) => props.$widthM || "100%"};
    margin: 0 ${(props) => props.$marginM || "0"};
    font-size: ${(props) => props.$fontSizeM || "0.6rem"};
  }
`;
const Hero_Image = styled.img`
  width: ${(props) => props.$width || "240px"};
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: ${(props) => props.$widthM || "160px"};
  }
`;
const Hero_Spacer = styled.div`
  width: 100%;
  height: ${(props) => props.$height || "2rem"};

  @media (max-width: 1200px) {
    height: ${(props) => props.$heightM || "1rem"};
  }
`;
const Hero_Button = styled.button`
  width: ${(props) => props.$width || "fit-content"};
  padding: 10px 16px;
  cursor: pointer;
  background-color: #2196f3;
  color: #fff;
  font-size: 1em;
  border: 0;
  border-radius: 5px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    font-size: 0.6em;
  }
`;
const W_text = styled.span`
  color: #ffffff;
`;
export {
  Hero_Grad,
  Hero_wrapper,
  Hero_Title,
  Hero_Image,
  Hero_Spacer,
  Hero_Text,
  Hero_Button,
  W_text,
};
