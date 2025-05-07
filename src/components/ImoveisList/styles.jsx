import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 5rem;
    margin-bottom: 0.5rem;

    h1 {
      font-size: 30px;
      color: #000;
      text-align: center;
    }
  }

  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 450px) {
    display: none; 
  }
`;

export const MobileSlider = styled.div`
  display: none;
  width: 100%;
  max-width: 500px;
  padding: 0 10px;

  .slick-slide {
    padding: 0 10px;
  }

  .slick-dots {
    bottom: -25px;
    
    li button:before {
      color: #2563eb;
    }
  }

  @media (max-width: 450px) {
    display: block; 
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  max-width: 500px;
  flex: 1;
  margin: 0 auto;

  img {
    width: 100%;
    height: 192px;
    border-radius: 5px;
    object-fit: cover;
    display: block;
  }

  div {
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    color: #000;
  }

  button {
    width: auto;
    border: none;
    padding: 1rem;
    background-color: #2563eb;
    color: white;
    border-radius: 6px;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
    height: auto;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;

    &:hover {
      background-color: #1d4ed8;
    }
  }

  @media (max-width: 450px) {
    max-width: 100%;
    img {
      height: 160px;
    }

    div {
      padding: 0.8rem;
    }

    p {
      font-size: 14px;
    }

    button {
      width: 100%;
      padding: 0.9rem;
      font-size: 15px;
    }
  }
`;

export const ButtonImoveis = styled.div`
  width: 12.25rem;
  border: none;
  padding: 1rem;
  background-color: #2563eb;
  color: white;
  border-radius: 6px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  height: auto;
  margin-top: 1rem;
  text-align: center;
  font-weight: 600;

  &:hover {
    background-color: #1d4ed8;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;