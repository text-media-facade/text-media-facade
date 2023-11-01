import React, {useState} from 'react';
import {
    MainContainer,
    Header,
    Text,
    Input1,
    MyFunction,
    TextImage,
    TextInput,
    Input2,
    Button,
    Button2,
    Back,
    Code,
    Guide,
    GuideZone,
    Information
} from './style';
import {Link} from 'react-router-dom';
import axios from 'axios';

function DevPage() {
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [text, setText] = useState('');
    const [code, setCode] = useState(''); 
    const [isVisible, setIsVisible] = useState(false);
    const maxLength = 15;

    const handleTextChange = (e) => {
        const newText = e.target.value;
    
        if (newText.length <= maxLength) {
            setText(newText);
        }
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault(); // 기본 동작을 중지
            const {selectionStart, selectionEnd} = e.target;
            const newCode = code.substring(0, selectionStart) + '\t' + code.substring(
                selectionEnd
            );
            setCode(newCode);
        }
    };

    const resetInput = () => {
        setText("");
        setName('');
        setStudentId('');
        setCode('');
    };

    const handleSubmit = () => {
    const propertyString = code; // code 변수에는 JSON 문자열이 들어있을 것

    // JSON 문자열을 파싱하여 객체로 변환
    const propertyData = JSON.parse(propertyString);

    // "property" 객체에서 값을 추출
    const color = propertyData.color;
    const fontSize = propertyData.fontSize;
    const style = propertyData.style;

    // 서버로 보낼 데이터 객체 구성
    const requestData = {
        name: name,
        studentId: studentId,
        type: "function",
        text: text,
        property: {
            color: color,
            fontSize: fontSize,
            style: style
        }
    };
        resetInput();
        axios
            .post("http://3.38.231.213:8080/api/function", requestData)
            .then((response) => {
                console.log("요청 성공", response.data);
                const storedTextData = JSON.parse(localStorage.getItem("textData")) || [];
                const newText = {
                    text: response.data.text,
                    color: response.data.property.color,
                    fontSize: `${response.data.property.fontSize}px`,
                    style: response.data.property.style
                };
                storedTextData.push(newText);
                localStorage.setItem("textData", JSON.stringify(storedTextData));
            })
            .catch((error) => {
                console.log("요청 실패: ", error);
            });
    };

    return (
        <MainContainer>
            <Header>
                <Link to="/main">
                    <Back />
                </Link>
                <h2>텍스트 입력 코딩 사용자</h2>
            </Header>
            <Information>
                <div>
                    <Text>이름</Text>
                    <input
                        placeholder="이름을 입력해주세요."
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        spellCheck="false"
                    />
                </div>
                <div>
                    <Text>학번</Text>
                    <input
                        placeholder="학번을 입력해주세요."
                        type="text"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        spellCheck="false"
                    />
                </div>
            </Information>
            <TextInput>
        <TextImage />
        <Text>텍스트</Text>
        <Input1
          placeholder="텍스트를 입력해주세요. (15자까지 입력 가능합니다.)"
          type="text"
          value={text}
          onChange={handleTextChange}
          spellCheck="false"
        />
      </TextInput>
            <MyFunction>
                <div>
                    <Code />
                    <Text>나만의 함수 입력</Text>
                    <Button2 onClick={toggleVisibility}>코드 작성 예시</Button2>
                </div>
                <GuideZone style={{ display: 'flex' }}>
                    {isVisible && (
                        <Guide style={{ flex: 1 }}>
                            <p style={{ marginBottom: 0 }}>✍️ 코드 작성 예시</p>
                            <br />
                            <pre style={{ margin: 0 }}>
                                {JSON.stringify(
                                    {
                                        "color":"#ffffff",
                                        "fontSize":"18px",
                                        "style":"zigzag"
                                    },
                                    null,
                                    2
                                )}
                            </pre>
                        </Guide>
                    )}
                    {isVisible && (
                        <Guide style={{ flex: 1 }}>
                            <p style={{ marginBottom: 0 }}>✍️ 코드 작성 규칙</p>
                            <br />
                            <pre style={{ margin: 0 }}>
                                {JSON.stringify(
                                    {
                                        "color": "blue(색상명) or #26539C(색상코드)",
                                        "fontSize": "10px ~ 50px",
                                        "style": "[wave, zigzag, bounce]"
                                    },
                                    null,
                                    2
                                )}
                                </pre>
                        </Guide>
                    )}
                </GuideZone>
                <Input2
                    rows="10"
                    cols="50"
                    placeholder={`json, dict 형으로 작성해주세요. ex) { "color" : "red",  "fontSize": "10px" }`}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onKeyDown={handleKeyDown}
                    spellCheck="false"
                />
                <Button type="submit" onClick={handleSubmit}>
                    제출
                </Button>
            </MyFunction>
        </MainContainer>
    );
}

export default DevPage;