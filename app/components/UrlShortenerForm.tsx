"use client";
import styled from "styled-components";
import React, { useState } from "react";
import checkUrl from "@/app/lib/checkUrl";
import createShortenedUrl from "@/app/lib/createShortenedUrl";

const Container = styled.div`
  font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
  max-width: 90%;
  margin: 20px auto;
  padding: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
  text-align: left-center;
`;

const Label = styled.label`
  color: rgb(51,51,51);
  font-size: calc(7px + 1.5vw);
  font-weight: bold;
  margin-bottom: 6px;
`;

const Input = styled.input`
  padding: 10px;
  padding-right: 50px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color:rgb(138,153,168);
  color: rgb(239,235,231);
  align-self: center;
  padding: 30px;
  font-size: calc(10px + 1.5vw);
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(80, 111, 143);
  }
`;

const ErrorMessage = styled.p`
  color: black;
  text-align: center;
  font-weight: bold;
`;

const ResultWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  border: 7px rgb(168,153,138) solid;
  border-radius: 10px;
`;

const ResultText = styled.p`
    color: rgb(51,51,51);
    font-weight: bold;
`;

const ResultLink = styled.a`
  font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
  color: rgb(80, 111, 143);
  text-decoration: dotted underline;
  font-weight: bold;
  &:hover {
    text-decoration:underline;
  }
`;


export default function UrlShortenerForm() {
    const [originalUrl, setOriginalUrl] = useState("");
    const [aliasUrl, setAliasUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setShortenedUrl(null);
        const isValid = await checkUrl(originalUrl);
        if (!isValid) {
            setError("The provided URL is not valid, please enter a valid URL");
            return;
        }
        try {
            const result = await createShortenedUrl(originalUrl, aliasUrl);
            setShortenedUrl(result.aliasUrl);
        } catch (err: any) {
            if (err.message === "Alias URL already exists") {
                setError("The provided alias URL already exists, please choose a different one");
            } else {
                setError("An error occurred while creating the shortened URL");
            }
        }
    };
    
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Label> Original Url </Label>
                    <Input
                        type="text"
                        value={originalUrl}
                        onChange={(e) => setOriginalUrl(e.target.value)}
                        placeholder="https://example.com/super/duper/very/long/url"
                        required
                    />
                </div>
                <div>
                    <Label> Custom Alias </Label>
                    <Input
                        type="text"
                        value={aliasUrl}
                        onChange={(e) => setAliasUrl(e.target.value)}
                        placeholder="your-custom-alias"
                        required
                    />
                </div>
                <Button type="submit">Shorten URL</Button>
            </Form>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {shortenedUrl && (
                <ResultWrapper>
                    <ResultText> Your shortened URL: </ResultText>
                    <ResultText><ResultLink href={`/${shortenedUrl}`} target="_blank" rel="noopener noreferrer">
                        {`/${shortenedUrl}`}
                    </ResultLink></ResultText>
                </ResultWrapper>
            )}
        </Container>
    );
}