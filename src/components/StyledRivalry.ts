import {styled} from "styled-components";

export const Rivalry = styled.div`
    background: linear-gradient(145deg, #1e1e1e, #121212);
    border-radius: 16px;
    padding: 2rem;
    margin: 1rem auto;
    max-width: 800px;
    width: 100%;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    box-sizing: border-box;

    @media screen and (max-width: 1000px) {
        padding: 1.5rem;
    }

    @media screen and (max-width: 600px) {
        padding: 1rem;
    }
`;

export const RivalryTitle = styled.h2`
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3rem;
    text-align: center;
    color: #fff;
    margin: 0;
    position: relative;

    &::after {
        content: "";
        display: block;
        width: 80px;
        height: 4px;
        background: #4a90e2;
        margin: 0.5rem auto 0;
        border-radius: 2px;
    }
    
    @media screen and (max-width: 1000px) {
        font-size: 1.75rem;
    }
`;

export const RivalryDesc = styled.p`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.2rem 1.5rem;
  border-radius: 12px;
  color: #e0e0e0;
  line-height: 1.8;
  font-size: 1.1rem;
`;

export const RivalryRecord = styled.div`
  text-align: center;
  font-size: 1rem;
  color: white;
  background: linear-gradient(90deg, #444, #222);
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  margin: 0 auto;
  font-style: italic;
  opacity: 0.9;
`;

export const RivalryRecords = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 10px;
`;

export const VersusRow = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    padding: 2px 14px;
    margin-bottom: 0;
    color: white;
    @media screen and (max-width: 600px) {
        font-size: 1.6rem;
        gap: 0.3rem;
    }
`;