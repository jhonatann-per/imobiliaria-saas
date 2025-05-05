import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 4rem;

    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 5rem;
        margin-bottom: 0.5rem;
        
        h1{
            font-size: 30px;
            color: #000;
        }
    }
`;

export const Card = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    max-width: 500px;
    img{
        width: 100%;
        height: 192px;
        border-radius: 5px;
        object-fit: cover;
        display: block;
    }

    div{
        padding: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    p{
        margin-top: 10px;
    }
    
    button{
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
        &:hover {
            background-color: #1d4ed8;
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
  
    &:hover {
        background-color: #1d4ed8;
    }
`;
