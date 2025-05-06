import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  gap: 2rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 5rem;
    margin-bottom: 2rem;
    width: 80%;

    h1 {
      font-size: 30px;
      color: #000;
    }
  }
`;

export const ContainerServices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  align-items: stretch;
  justify-content: space-between;

  div {
    background-color: #F9FAFB;
    flex: 1;
    width: 394px;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  p{
    width: 300px;
  }

  @media (max-width: 1360px) {
    div {
      width:30%; 
    }
  }
`;

export const ContainerInvitation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 5rem;
    
    color: white;
    background-color: #2563eb;
    width: 100%;
    height: 316px;
    text-align: center;
    gap: 1.5rem;

    h1 {
      font-size: 30px;
      color: white;
    }

      button{
        width: auto;
        border: none;
        padding: 1rem;
        background-color: #ffffff;
        color: #2563eb;
        border-radius: 6px;
        transition: background-color 0.2s ease-in-out;
        cursor: pointer;
        height: auto; 
        margin-top: 10px;
        font-size: 16px;
        &:hover {
            background-color: #dbdee7;
        }
    }
`;