import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    color: white;
    width: 100%;
    flex-direction: column;
    background-color:#0F276C;
`;
export const Banner = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    height: 412px;
    margin: 0 auto;
    gap: 2rem;

    button{
        width: 8.1rem;
        border: none;
        padding: 1rem;
        background-color: #2563eb;
        color: white;
        border-radius: 6px;
        transition: background-color 0.2s ease-in-out;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;

        &:hover {
            background-color: #1d4ed8;
        }
    }
    h1{
        font-size: 3rem;
    }

    p{
        font-size: 20px;
    }
`;