import styled from "styled-components";

const Backgorund_Color = styled.div`
  background-color: #000000;
  width: 100vw;
  min-height: 100vh;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
`;
const Input = styled.input`
  width: ${(props) => props.$width || "90%"};
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: black;
  color: rgba(255, 255, 255, 0.8);
  margin: auto;
  placeholder: rgba(255, 255, 255, 0.8);

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: ${(props) => props.$padding || "0"};
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  width: ${(props) => props.$width || "100%"};
  display: flex;

  flex-direction: row;
  min-width: 300px;
  justify-content: ${(props) => props.$justify || "space-between"};
  item-align: ${(props) => props.$align || "center"};

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
const Column = styled.div`
  width: ${(props) => props.$width || "100%"};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.$justify || "center"};
  item-align: ${(props) => props.$align || "center"};

  @media (max-width: 1200px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Box = styled.div`
  width: ${(props) => props.$width || "100%"};
  background-color: #101010;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${(props) => props.$gap || "0px"};
`;

export { Row, Column, Box, Backgorund_Color, Input, Container };
