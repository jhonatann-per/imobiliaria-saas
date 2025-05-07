import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  background-color: white;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  border-radius: 8px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  top: -30px;

  p {
    margin-bottom: 15px;
    font-size: 20px;
    color: #000;
    font-weight: 500;
  }

  @media (max-width: 450px) {
    width: 90%;
    padding: 1rem;

    p {
      font-size: 18px;
      text-align: center;
    }
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const Input = styled.input`
  padding: 0.85rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  flex: 1;
  height: auto;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  padding: 0.85rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: auto;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 8.1rem;
  border: none;
  padding: 1rem;
  background-color: #2563eb;
  color: white;
  border-radius: 6px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  height: auto;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: #1d4ed8;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;
