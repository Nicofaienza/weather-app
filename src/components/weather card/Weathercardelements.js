import styled from "styled-components";
import '../../styles/index.css';

export const Cardwrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    justify-content: space-around;
    padding-top: 80px;

    & #temperature{
        font-size: 4rem;
    }
`;

export const Cardbutton = styled.button`
    background: var(--secundary);
    border: none;
    border-radius: 20px;
    padding: 15px 30px;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
`;

export const Cardtitle = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;
    position: absolute;
    top: 0;
    color: #fff;
    background: var(--secundary);
    width: 100%;
    height: 80px;
`;

export const Cardinfo = styled.ul`
    width: 90%;
    list-style: none;
    background: var(--primary);
    padding: 40px 60px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`;

export const Cardinfoli = styled.li`
    font-size: 1.2rem;
    font-weight: 600;

    & > h3{
        font-size: 20px;
        color: #fff;
        font-weight: 600;
        text-align: center;
        font-size: 1.3rem;
    }
`;

export const Cardimgcontainer = styled.div`
    background: #ffffff40;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Cardnextdayscontainer = styled.div`
    width: 90%;
    justify-content: space-between;
    display: flex;
`;

export const Cardnextday = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 30px 15px;
    background: var(--primary);
    border-radius: 30px;

    & > div{
        display: flex;
        text-align: left;
        flex-direction: column;
        align-items: flex-start;
        gap: 3px;
    }
`;