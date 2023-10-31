import back from '../../images/back.svg'
import text from '../../images/text.svg'
import deco from '../../images/deco.png'
import styled, { keyframes } from 'styled-components';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto 0;
    width: 1024px;
    height: 100vh;
    padding: 0 0 32px 0;
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.2);
    border-radius: 20px 20px 0 0;
`;

export const Header = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1024px;
    height: 60px;
    color: #ffffff;
    margin:0 0 50px;
    background-color: #26539C;
    border-radius: 20px 20px 0 0;
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.2);

    & > h2{
        margin-right: 370px;
    }

`;

export const Back = styled.div`
    margin-left: 30px;
    width: 50px;
    height: 51px;
    cursor: pointer;
    background: url(${back}) center no-repeat;
    transition: transform 0.3s;
    &:hover {
            transform: scale(1.05, 1.05);
            background-size: 150% 150%;
        }
`

export const TextInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 10px 32px;
    margin-left: 40px;
    box-sizing: border-box; 
`;

export const Text = styled.p`
    font-size: 25px;
    margin: auto 10px;
    font-weight: 600;
`;

export const TextImage = styled.div`
    background: url(${text}) center no-repeat;
    width: 50px;
    height: 61px;
`

export const Input1 = styled.input`
    width: 760px;
    height: 45px;
    margin: auto 10px;
    border-radius: 10px;
    border: 0;
    padding: 3px 0 0 10px;
    background-color: #f2f2f2;
    font-size: 18px;
`;

export const MyFunction = styled.div`
display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px auto;
    padding: 10px 32px; 
    box-sizing: border-box;

    & > div {
        display: flex;
        flex-direction: row;
    }

    & > div > p {
        display: flex;
        align-items: flex-start;
        margin-left: 7px;
    }

    & > div > img {
        margin-left: 20px;
    }
    
`;

export const Deco = styled.div`
    width: 42px;
    height: 37px;
    background: url(${deco}) center no-repeat;
    margin-left: 25px;
    margin-right: 6px;
`



export const StyleList = styled.ul`
    margin: 0 20px 40px;
    width: 94%;
    height: 40vh;
    padding: 10px 10px;
    list-style: none;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > li > button {
        width: 700px;
        height: 50px;
        margin-top: 25px;
        border-radius: 40px;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 20px;
        transition: transform 0.3s;
    }
`;

export const Button1 = styled.button`
    background-image: linear-gradient(to right,  #fc6076, #f7186a);
    box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.45);

        &:hover,
        &.active
         {
            background: linear-gradient(90deg,  #fc6076, #f7186a);
            background-size: 200% 200%;
            animation: ${gradient} 3s ease infinite;
            transform: scale(1.05, 1.05);
         }
`;

export const Button2 = styled.button`
    background-image: linear-gradient(to right, #f5ce62, #ff9a44);
    box-shadow: 0 4px 15px 0 rgba(229, 150, 10, 0.45);

        &:hover,
        &.active {
            background: linear-gradient(90deg,  #f5ce62, #ff9a44);
            background-size: 200% 200%;
            animation: ${gradient} 3s ease infinite;
            transform: scale(1.05, 1.05);
        }
`;

export const Button3 = styled.button`
    background-image: linear-gradient(to right, #b6eb77, #3cba92);
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.45);
        &:hover,
        &.active {
            background: linear-gradient(90deg,  #b6eb77, #3cba92);
            background-size: 200% 200%;
            animation: ${gradient} 3s ease infinite;
            transform: scale(1.05, 1.05);
        }
`;

export const Button4 = styled.button`
    background-image: linear-gradient(to right, #00c7c5, #0088d7);
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.45);
        &:hover,
        &.active {
            background: linear-gradient(90deg,  #00c7c5, #0088d7);
            background-size: 200% 200%;
            animation: ${gradient} 3s ease infinite;
            transform: scale(1.05, 1.05);
        }
`;

export const Button = styled.button`
    display: flex;
    width: 200px;
    height: 50px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    border: none;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: #26539C;
    color: #ffffff;
    position: relative;
    transition: transform 0.3s; 

    &:hover {
        content: "";
        transform: scale(1.1, 1.1);
        -ms-transform: scale(1.1, 1.1);
        -webkit-transform: scale(1.1, 1.1);
        box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
    }
`;

