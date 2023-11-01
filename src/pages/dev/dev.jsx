import React, { useState } from "react";
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
  Information,
  Title,
  Input3,
  Input4,
  Input5,
} from "./style";
import { Link } from "react-router-dom";
import axios from "axios";

function DevPage() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [color, setColor] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [style, setStyle] = useState("");

  const resetInput = () => {
    setText("");
    setColor("");
    setFontSize("");
    setStyle("");
    setName("");
    setStudentId("");
  };

  const handleSubmit = () => {
    // POST : name, studentId
    resetInput();
    axios
      .post("http://3.38.231.213:8080/api/function", {
        name: name,
        studentId: studentId,
        type: "function",
        text: text,
        property: {
          color: color,
          fontSize: fontSize,
          style: style,
        },
      })
      .then((response) => {
        console.log("요청 성공", response.data);
        const storedTextData =
          JSON.parse(localStorage.getItem("textData")) || [];
        const newText = response.data.text;
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
          />
        </div>
        <div>
          <Text>학번</Text>
          <input
            placeholder="학번을 입력해주세요."
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
      </Information>
      <TextInput>
        <TextImage />
        <Text>텍스트</Text>
        <Input1
          placeholder="텍스트를 입력해주세요."
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </TextInput>
      <MyFunction>
        <Title>
          <Code />
          <Text>나만의 함수 입력</Text>
        </Title>
        <Input2>
          <div>
            <p>color</p>
            <Input3
              type="text"
              placeholder="컬러를 입력하세요."
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div>
            <p>font-size</p>
            <Input4
              type="text"
              placeholder="폰트사이즈를 입력하세요."
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            />
          </div>
          <div>
            <p>style</p>
            <Input5
              type="text"
              placeholder="스타일을 입력하세요."
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            />
          </div>
        </Input2>

        <Button type="submit" onClick={handleSubmit}>
          제출
        </Button>
      </MyFunction>
    </MainContainer>
  );
}

export default DevPage;
