"use client";
import React from "react";
import {
  Hero_Button,
  Hero_Grad,
  Hero_Image,
  Hero_Spacer,
  Hero_Text,
  Hero_Title,
  Hero_wrapper,
  W_text,
} from "./components/styled-components/hero";
import Link from "next/link";

const Home = () => {
  return (
    <Hero_wrapper>
      <Hero_Grad>
        <Hero_Title $fontSize="3.5rem">NOMINATE AN ATTENDEE FOR</Hero_Title>
        <Hero_Image src="/novcom_logo.png" alt="logo" />
        <Hero_Title $fontSize="2rem">AFRICA</Hero_Title>
        <Hero_Spacer $height="1rem"></Hero_Spacer>
        <Hero_Title $color="yellow" $fontSize="2rem">
          01-03 OCT 2024
        </Hero_Title>
        <Hero_Text $fontSize="1rem" $color="rgba(255,255,255,0.8)">
          Nominate a peer or colleague to attend NOVACOM and earn &nbsp;
          <W_text>NOVA points.</W_text>
        </Hero_Text>
        <Hero_Text $fontSize="1rem" $color="rgba(255,255,255,0.8)">
          <W_text>You have 4 nominations left.</W_text>
        </Hero_Text>
        <Link
          href="/nomination"
          style={{
            display: "flex",
            margin: "0 auto",
            justifyContent: "center",
            textDecoration: "none",
            
          }}
        >
          <Hero_Button>Nominate Now!</Hero_Button>
        </Link>
      </Hero_Grad>
    </Hero_wrapper>
  );
};

export default Home;
