import React, {useState} from 'react';
import {
    MainContainer,
    Header,
    TextInput,
    Text,
    Input1,
    MyFunction,
    Input2,
    Button,
    Back,
    Code,
    TextImage,
    Title,
    Input3,
    Input4,
    Input5
} from './style';
import { Link } from 'react-router-dom';
import axios from 'axios';


function DevPage() {

    const [text, setText] = useState('');
    const [color, setColor] = useState("");
    const [fontsize, setFontSize] = useState("");
    const [style, setStyle] = useState("");

    const resetInput = () => {
        setText('');
        setColor('');
        setFontSize('');
        setStyle('');
    }; 

    const handleSubmit = () => {
        // POST : name, studentId
        resetInput();
    axios
      .post("/api/function", {
        color: color,
        fontsize: fontsize,
        style: style
      })
      .then((response) => {
        console.log("요청 성공", response.data);
      })
      .catch((error) => {
        console.log("요청 실패: ", error);
      });
  };

    return (
        <MainContainer>
            <Header>
                <Link to="/main"><Back/></Link>
                <h2>텍스트 입력 코딩 사용자</h2>
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
                <Title>
                    <Code/>
                    <Text>나만의 함수 입력</Text>
                </Title>
                <Input2>
                    <div>
                        <p>color</p>
                        <Input3
                            type="text"
                            placeholder="컬러를 입력하세요."
                            value={color}
                            onChange={(e) => setColor(e.target.value)}/>
                    </div>
                    <div>
                        <p>font-size</p>
                        <Input4
                            type="text"
                            placeholder="폰트사이즈를 입력하세요."
                            value={fontsize}
                            onChange={(e) => setFontSize(e.target.value)}/>
                    </div>
                    <div>
                        <p>style</p>
                        <Input5
                            type="text"
                            placeholder="스타일을 입력하세요."
                            value={style}
                            onChange={(e) => setStyle(e.target.value)}/>
                    </div>
                </Input2> 
                    
                <Button type="submit" onClick={handleSubmit}>제출</Button>
            </MyFunction>
        </MainContainer>
    );
}

export default DevPage;

    // const showToast = () => {
    //     // 여기서 서버로 POST 요청을 보냅니다.
    //     axios.post('서버의_URL', {
    //         text,
    //         function: code,
    //         // 세션 ID 또는 사용자 구분 정보를 추가합니다.
    //     })
    //     .then((response) => {
    //         // 성공적으로 제출된 경우 토스트 메시지 표시
    //         toast.success('제출되었습니다.', {
    //             position: "top-right",
    //             autoClose: 3000,
    //         });
    //         resetInput();
    //     })
    //     .catch((error) => {
    //         // 요청이 실패한 경우 에러 처리
    //         console.error(error);
    //         toast.error('제출에 실패했습니다.');
    //     });
    // };