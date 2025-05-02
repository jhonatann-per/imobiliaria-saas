import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 90%;
    gap: 1rem;
    margin: 0 auto;
    flex-wrap: wrap;
    background-color: white;
`;

export const Input = styled.input`
  padding: 0.85rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  flex: 1;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 8px 20px;
  background-color: #2563EB;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;