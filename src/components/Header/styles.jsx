import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    color: #2563EB;
    height: 72px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    section{
        display:flex;
        gap: 0.6rem;
        align-items: center;
        justify-content: center;
    }

    strong{
        font-size: 20px;
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
`;

export const ButtonWhite = styled.button`
    border: none;
    font-size: 15px;
    font-family: sans-serif; 
    background-color: transparent;  
`;

export const ButtonBlue = styled.button`
    width: auto;
    border: none;
    padding: 0.75rem;
    background-color: #2563eb;
    color: white;
    border-radius: 6px;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
    height: auto; 
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;

    &:hover {
        background-color: #1d4ed8;
    }
`;

