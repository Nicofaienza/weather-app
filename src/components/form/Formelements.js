import styled from "styled-components";
import '../../styles/index.css';

export const Formwrapper = styled.form`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

export const Formlabel = styled.label`
    color: var(--secundary);
    font-size: 20px;
    font-weight: 600;
    position: relative;
    align-self: flex-start;
    margin-left: 10px;
`;

export const Forminput = styled.input`
    height: 40px;
    width: 100%;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    background: var(--primary);
    padding: 5px 10px;
    color: var(--secundary);
    
    &:focus{
        outline: none;
        background: var(--secundary);
        color: #fff;
    }

    &::placeholder{
        color: var(--secundary);
    }
`;


export const Formbutton = styled.button`
    margin-top: 20px;
    cursor: pointer;
    background: var(--secundary);
    border: none;
    border-radius: 20px;
    padding: 16px 30px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
`;