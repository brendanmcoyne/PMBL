import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 1.1rem;
    line-height: 1.6;
    padding: 3rem 1rem;
    color: #f0f0f0;
`;

export const Passage = styled.span`
  display: block;
  max-width: 800px;
  text-align: left;
  margin: 20px auto;
  line-height: 1.7;
`;

export const StyledHeader = styled.h1`
    font-size: 3rem;
    margin-bottom: 1.5rem;
    text-align: center;
    max-width: 90%;
    font-weight: 600;
`;

export const ArticleMeta = styled.div`
  font-size: 0.9rem;
  color: #aaa;
  margin: 8px 0 16px 0;
  font-style: italic;
  text-align: center;
`;

export const SeparatorLine = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 0 0 30px 0;
  width: 80%;
  max-width: 600px;
`;

export const GenImage = styled.img`
    max-width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: contain;
    border: 3px solid black;
    padding: 8px;
    margin: 20px 0;
    background-color: white;
`;

export const Ruling = styled.div`
    max-width: 800px;
    margin: 30px auto;
    background-color: #f4e1c1;
    color: #222;
    border-radius: 8px;
    border: 2px solid #444;
    padding: 25px 30px;
    font-family: "Georgia", serif;
    font-size: 1rem;
    line-height: 1.6;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    h2 {
        margin-bottom: 1rem;
        font-size: 1.6rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        border-bottom: 2px solid #8b6e3a;
        padding-bottom: 8px;
        color: #6b4e1a;
    }
    p, pre {
        margin: 1rem 0;
        white-space: pre-wrap;
    }
`;

export const NewsletterRuling = styled.div`
  max-width: 800px;
  margin: 30px auto;
  background-color: #fef9e7; 
  color: #333;
  border-radius: 8px;
  padding: 20px 25px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 1.4rem;
    color: #b89830;
    border-bottom: 2px solid #d4c27a;
    letter-spacing: 1.2px;
  }
  p {
    margin-bottom: 1rem;
  }

  em {
    font-style: italic;
    color: #555;
  }
`;

export const StyledMiniHeader = styled.h3`
    text-align: center;
    font-size: 2rem;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

export const StyledLink = styled(Link)`
    margin-top: 1rem;
    font-size: 1.1rem;
    text-decoration: none;
    border: none;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px 20px;
    border-radius: 8px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;

export const Story = styled.div`
    position: relative;
    width: 500px;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
    transition: 0.5s;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    box-sizing: border-box;
`;

export const Headline = styled.h2`
    color: white;
    font-size: 1.5rem;
    text-align: center;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
`;

export const Stories = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
`;

export const MiniImage = styled.img`
    width: 80%;
    height: 100%;
    object-fit: cover;
    filter: brightness(65%);
    border-radius: 10px;
    display: block;
    margin: 0 auto;
`;

export const StoryDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 500px);
    justify-content: center;
    gap: 30px;
    margin: 2rem 0;
`;