import React, {useState} from 'react';
import {
    MainContainer,
    Header,
    TextInput,
    Text,
    Input1,
    Information,
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
import axios from 'axios';

function CommonPage() {

  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (styleNumber) => {
    setActiveButton(styleNumber);
  };

    const resetInput = () => {
      setText('');
      setName('');
      setStudentId('');
    };

  const handleSubmit = async () => {
    const styleNumber = activeButton;
    resetInput();
    setActiveButton(null);
    axios
      .post("http://3.38.231.213:8080/api/common", {
        withCredentials: true,
        text: text,
        selection: styleNumber,// 스타일 번호를 전달
        name: name,
        studentId: studentId,
        type: "common",
      })
      .then((response) => {
        console.log('POST 요청 성공:', response.data);
  
      })
      .catch((error) => {
        console.log('POST 요청 실패:', error);
      });
  };

    return (
        <MainContainer>
            <Header>
                <Link to="/main"><Back/></Link>
                <h2>텍스트 입력 일반 사용자</h2>
            </Header>
        <Information>
            <div>
              <Text>이름</Text>
              <input
                placeholder="이름을 입력해주세요." 
                type="text"
                value={name}
              onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Text>학번</Text>
              <input
                placeholder="학번을 입력해주세요." 
                type="text"
                value={studentId}
              onChange={(e) => setStudentId(e.target.value)} />
            </div>
            </Information>
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
                    <li> <Button1 onClick={() => handleButtonClick(1)}
                          className={activeButton === 1 ? 'active' : ''}>효과1</Button1></li>
                    <li><Button2 onClick={() => handleButtonClick(2)}
                          className={activeButton === 2 ? 'active' : ''}>효과2</Button2></li>
                    <li><Button3 onClick={() => handleButtonClick(3)}
                          className={activeButton === 3 ? 'active' : ''}>효과3</Button3></li>
                    <li><Button4 onClick={() => handleButtonClick(4)}
                          className={activeButton === 4 ? 'active' : ''}>효과4</Button4></li>            
                </StyleList>
                <Button type="submit" onClick={handleSubmit}>제출</Button>
            </MyFunction>
        </MainContainer>
    );
}

export default CommonPage;
