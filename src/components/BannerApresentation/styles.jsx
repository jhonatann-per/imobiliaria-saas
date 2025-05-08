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

    div{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 70%;
    }
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

    @media (max-width: 450px) {
    width: 90%;
    height: 430px;

    div{ 
        width: auto;
    }

    h1{
        font-size: 2.25rem;
    }
    p{
        font-weight: 300;
        line-height: 1.75rem;
    }
  }
`;