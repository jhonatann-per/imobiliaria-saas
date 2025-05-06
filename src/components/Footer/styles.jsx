import styled from "styled-components";

export const Container = styled.footer`
  background-color: #1e293b;
  padding: 3rem 1rem;
  color: #f1f5f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin-bottom: 2rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 200px;

  h3 {
    font-size: 20px;
    color: #ffffff;
  }

  h4 {
    font-size: 18px;
    color: #ffffff;
  }

  a {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #2563eb;
    }
  }

  p {
    color: #cbd5e1;
    font-size: 14px;
  }
`;

export const Copyright = styled.div`
  font-size: 14px;
  color: #94a3b8;
  text-align: center;
`;
