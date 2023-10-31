import styled from 'styled-components';
import back from '../../images/back.svg'
import text from '../../images/text.svg'
import code from '../../images/code.svg'


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

export const Information = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 51px;
    box-sizing: border-box;
    margin-bottom: 20px;

    & > div{
        display: flex;
    }
    
    & > div > input {
        width: 350px;
        height: 45px;
        margin: auto 10px;
        border-radius: 10px;
        padding: 3px 0 0 10px;
        background-color: #f2f2f2;
        font-size: 18px;
        border: none;
        &:focus{
            outline: none;
        }
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
    font-size: 30px;
    margin: auto 10px;
    font-weight: 600;
`;

export const Input1 = styled.input`
    width: 760px;
    height: 45px;
    margin: auto 10px;
    border-radius: 10px;
    border: 0;
    padding: 3px 0 0 10px;
    background-color: #f2f2f2;
    font-size: 18px;
    &:focus{
            outline: none;
        }
`;

export const MyFunction = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 50px auto;
    padding: 10px 32px; 
    box-sizing: border-box;   
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;

    & > p {
        display: flex;
        align-items: flex-start;
        margin-left: 7px;
    }
`

export const TextImage = styled.div`
    background: url(${text}) center no-repeat;
    width: 50px;
    height: 61px;
`

export const Code = styled.div`
    width: 42px;
    height: 37px;
    background: url(${code}) center no-repeat;
    margin-left: 25px;
    margin-right: 6px;
`

export const Input2 = styled.div`
    margin: 20px;
    width: 94%;
    height: 30vh;
    padding: 10px 10px;
    background-color: #f2f2f2;
    border: 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
        margin-left: 20px;
        display: flex;
        flex-direction: row;
    }

    & > div > p {
        font-size: 25px;
        font-weight: 600;
    }
`;

export const Input3 = styled.input`
    width: 700px;
    height: 45px;
    margin: auto 10px auto 70px;
    border-radius: 10px;
    border: 0;
    padding: 3px 0 0 10px;
    font-size: 18px;
    &:focus{
            outline: none;
        }
`

export const Input5 = styled.input`
    width: 700px;
    height: 45px;
    margin: auto 10px auto 77px;
    border-radius: 10px;
    border: 0;
    padding: 3px 0 0 10px;
    font-size: 18px;
    &:focus{
            outline: none;
        }
`

export const Input4 = styled.input`
    width: 700px;
    height: 45px;
    margin: auto 10px auto 30px;
    border-radius: 10px;
    border: 0;
    padding: 3px 0 0 10px;
    font-size: 18px;
    &:focus{
            outline: none;
        }
`

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
