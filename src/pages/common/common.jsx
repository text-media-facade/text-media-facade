import React, {useState} from 'react';
import {
    MainContainer,
    Header,
    TextInput,
    Text,
    Input1,
    MyFunction,
    StyleList,
    Button,
    TextImage,
    Back,
    Deco,
    Button1,
    Button2,
    Button3,
    Button4
} from './style';
import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CommonPage() {

    const [text, setText] = useState('');

    const resetInput = () => {
        setText('');
    };

    const handleButtonClick = async (styleNumber) => {
    // 데이터를 서버로 전송할 준비
        const dataToSend = {
            text: text,
            selection: styleNumber, // 스타일 번호를 전달
            type: '일반사용자'
        };

    try {
      const response = await fetch('url 주소', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        // POST 요청이 성공적으로 처리된 경우
        console.log('POST 요청 성공:', response);

        // 필요하면 토스트 메시지 등을 표시
      } else {
        // 서버에서 오류 응답을 반환한 경우
        console.error('POST 요청 실패:', response);

        // 필요하면 에러 처리 및 토스트 메시지 등을 표시
      }
    } catch (error) {
      // 네트워크 오류 등의 예외 처리
      console.error('POST 요청 중 오류 발생:', error);

      // 필요하면 에러 처리 및 토스트 메시지 등을 표시
    }
  };

    return (
        <MainContainer>
            <Header>
                <Link to="/main"><Back/></Link>
                <h2>텍스트 입력 일반 사용자</h2>
            </Header>
            <TextInput>
                <TextImage/>
                <Text>텍스트</Text>
                <Input1 
                  placeholder="텍스트를 입력해주세요." 
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}/>
            </TextInput>
            <MyFunction>
                <div>
                    <Deco/>
                    <Text>텍스트 꾸밈 리스트</Text>
                </div>
                <StyleList>
                    <li><Button1 onClick={() => handleButtonClick(1)}>효과1</Button1></li>
                    <li><Button2 onClick={() => handleButtonClick(2)}>효과2</Button2></li>
                    <li><Button3 onClick={() => handleButtonClick(3)}>효과3</Button3></li>
                    <li><Button4 onClick={() => handleButtonClick(4)}>효과4</Button4></li>            
                </StyleList>
                <Button type="submit" onClick={resetInput}>제출</Button>
            </MyFunction>
        </MainContainer>
    );
}

export default CommonPage;

