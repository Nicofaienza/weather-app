import styled from "styled-components";
import '../../styles/index.css';

export const Cardwrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    background: rgb(210,90,4);

    & #temperature{
        font-size: 50px;
    }
`;

export const Cardbutton = styled.button`
    background: var(--secundary);
    border: none;
    border-radius: 20px;
    padding: 15px 30px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    position: absolute;
    bottom: 60px;
`;

export const Cardtitle = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
    position: absolute;
    top: 0;
    color: #fff;
    background: var(--secundary);
    width: 100%;
    height: 80px;
`;

export const Cardinfo = styled.ul`
    width: 70%;
    list-style: none;
    background: var(--primary);
    padding: 20px 60px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    position: absolute;
    top: 120px;
`;

export const Cardinfoli = styled.li`
    font-size: 20px;
    font-weight: 600;

    & > h3{
        font-size: 20px;
        color: #fff;
        font-weight: 600;
        text-align: center;
        font-size: 22px;
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
    width: 70%;
    justify-content: space-between;
    display: flex;
    position: absolute;
    top: 550px;
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