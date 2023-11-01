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
    height: 100%;
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
    padding: 10px 50px;
    box-sizing: border-box;
    margin-bottom: 10px;

    & > div{
        display: flex;
    }

    & > div > p {
        font-size: 25px;
    }
    
    & > div > input {
        width: 353px;
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
    font-size: 25px;
    margin: auto 10px;
    font-weight: 600;
`;

export const Input1 = styled.input`
    width: 750px;
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
    
`;

export const Button2 = styled.button`
  background-color: #26539C;
  color: white;
  padding: 10px 20px;
  border: none;
  font-weight: 500;
  border-radius: 20px;
  cursor: pointer; 
`;

export const Guide = styled.p`
  font-size: 16px;
  color: #333;
  display: flex;
  flex-direction: column;
  margin: 0px;
`;

export const GuideZone = styled.div`
  display: flex;
  margin-left: 80px; 
  transition: opacity 0.3s ease;
`;

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

export const Input2 = styled.textarea`
    margin: 20px;
    width: 93%;
    height: 40vh;
    resize: none;
    display: flex;
    justify-content: space-between;
    padding: 10px 13px;
    font-size: 18px;
    font-family: monospace;
    font-weight: 600;
    white-space: pre; /* 공백 문자(들여쓰기)를 유지하도록 설정 */
    tab-size: 3; /* 탭 문자 크기를 지정 (들여쓰기 간격) */
    background-color: #f2f2f2;
    border: 0;
    border-radius: 10px;
    &:focus{
            outline: none;
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
