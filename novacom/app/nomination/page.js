"use client";
import React from "react";
import {
  Column,
  Row,
  Box,
  Backgorund_Color,
  Input,
  Container,
} from "./styled-components/nomination";
import {
  Hero_Button,
  Hero_Image,
  Hero_Spacer,
  Hero_Text,
  Hero_Title,
  W_text,
} from "../components/styled-components/hero";

const Nomination = () => {
  return (
    <Backgorund_Color>
      <Row $width="80%">
        <Column $width="47%">
          <Hero_Text $color="rgba(255,255,255,0.6)" $width="100%">
            Nominate and Earn NOVA points for successful nominations.
          </Hero_Text>
          <Hero_Spacer $height="1rem"></Hero_Spacer>
          <Box>
            <Hero_Image
              src="/coins.png"
              alt="logo"
              $width="100%"
              $widthM="100%"
            />
            <Hero_Title $fontSize="2rem" $fontSizeM="1.6rem" $align="left">
              Do you have a peer or colleague to attend NOVACOM?
            </Hero_Title>
            <Hero_Title
              $fontSize="1.2rem"
              $align="left"
              $color="rgba(255,255,255,0.6)"
              $fontSizeM="1.2rem"
            >
              Nominate and Earn 50 NOVA points for each successful Nomination!
            </Hero_Title>
          </Box>
        </Column>
        <Column $width="47%">
          <Box $gap="15px">
            <Hero_Title $padding="10px " $fontSize="2rem" $fontSizeM="1.4rem">
              Submit your Nomination
            </Hero_Title>
            <Input placeholder="Full Name" $width="90%" />

            <Input placeholder="Email" $width="90%" />

            <Row $width="">
              <Input placeholder="Full Name" $width="40%" />
              <Input placeholder="Full Name" $width="40%" />
            </Row>
            <Container $padding="10px 0">
              <Hero_Button $width="95%">Submit Nomination</Hero_Button>
            </Container>
          </Box>
          <Hero_Spacer $height="1rem"></Hero_Spacer>
          <Hero_Text
            $fontSize="1rem"
            $color="rgba(255,255,255,0.6)"
            $width="100%"
          >
            You can nominate up to 5 people. &nbsp;
            <W_text>You have 4 nominations left.</W_text>
          </Hero_Text>
        </Column>
      </Row>
    </Backgorund_Color>
  );
};

export default Nomination;
