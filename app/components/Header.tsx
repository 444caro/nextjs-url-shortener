"use client";
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color:rgb(214,205,197);
  padding: 5px;
  text-align: center;
`;

const Title = styled.h1`
  font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
  font-size: calc(2em + 4vw);
  letter-spacing: 0.1em;
  text-align: center;
  color: rgb(239,235,231);
  background-color: rgb(138,153,168);
  margin: 2vw;
  padding: 2vw;
  border: 7px rgb(168,153,138) solid;
  border-radius: 10px;
`;

const Subtitle = styled.p`
  font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
  font-size: calc(1em + 2vw);
  text-align: center;
  color: rgb(239,235,231);
  background-color: rgb(138,153,168);
  margin: 2vw;
  border-radius: 10px;
`;

export default function Header() {
    return(
        <HeaderWrapper>
            <Title>URL Shortener</Title>
            <Subtitle>Shorten your long URLs into compact, shareable links</Subtitle>
        </HeaderWrapper>
    );
}