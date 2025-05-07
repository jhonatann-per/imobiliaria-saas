import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  color: #2563EB;
  height: 72px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section {
    display: flex;
    gap: 0.6rem;
    align-items: center;
    justify-content: center;
  }

  strong {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 0.8rem;
    padding: 0.8rem 0;

    section {
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    strong {
      font-size: 18px;
    }
  }

  @media (max-width: 450px) {
    width: 90%;

    section {
      flex-direction: column;
      gap: 0.5rem;
    }

    strong {
      font-size: 17px;
      text-align: center;
    }
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3c3c3c;
  margin-right: 1rem;
  transition: color 0.3s ease-in-out;
  padding: 0.5rem;
  gap: 0.5rem;
  opacity: 0.75;
  cursor: pointer;

  &:hover {
    color: #1d4ed8;

    button {
      color: #1d4ed8;
    }
  }

  @media (max-width: 768px) {
    margin-right: 0;
    padding: 0.3rem;
    font-size: 14px;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 0.3rem;
  }
`;

export const ButtonWhite = styled.button`
  border: none;
  font-size: 15px;
  font-family: sans-serif;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonBlue = styled.button`
  width: auto;
  border: none;
  padding: 0.9rem;
  background-color: #2563eb;
  color: white;
  border-radius: 6px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  height: auto;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #1d4ed8;
  }

  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 15px;
  }

  @media (max-width: 450px) {
    width: 100%;
    padding: 0.8rem;
    font-size: 14px;
  }
`;
